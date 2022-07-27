import Auth from "@aws-amplify/auth";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Input,
  Stack,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SMSTable from "./SMSTable";

const WALDMED_SMS_URL =
  "https://g0388iy2gd.execute-api.us-east-1.amazonaws.com/";

export default function SMSTool() {
  const [appointments, setAppointments] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alerts, setAlerts] = useState([]);

  const sendSMS = async () => {
    setButtonClicked(true);
    setLoading(true);
    console.log(appointments);

    const res = await Auth.currentSession();
    const idToken = res.getIdToken();
    const jwt = idToken.getJwtToken();

    const cp = flattenAppointment(appointments);

    // go through batches of 5 appointments at a time
    let hasError = false;
    while (cp.length) {
      const batchAppointments = cp.splice(0, 5);
      console.log(batchAppointments);
      try {
        const {
          data: { skipList },
        } = await axios.post(
          WALDMED_SMS_URL,
          {
            appointments: batchAppointments,
          },
          {
            headers: {
              authorization: `Bearer ${jwt}`,
            },
          }
        );

        for (const { phoneNumber } of skipList) {
          setAlerts((alerts) => [
            ...alerts,
            {
              severity: "info",
              message: `Found ${formatPhoneNumber(phoneNumber)} in Skip List. Skipping text`,
            },
          ]);
        }
      } catch (error) {
        hasError = true;
      }
    }

    if (!hasError) {
      setAlerts((alerts) => [
        ...alerts,
        { severity: "success", message: "Sent Messages to all Patients" },
      ]);
    } else {
      setAlerts((alerts) => [
        ...alerts,
        { severity: "error", message: "An error occured. Contact Haroun" },
      ]);
    }

    setLoading(false);
  };

  const resetState = () => {
    setAlerts([]);
    setButtonClicked(false);
  };

  const flattenAppointment = (appointments) => {
    const flattened = [];
    for (const apt of appointments) {
      for (const phoneNumber of apt.phoneNumbers) {
        flattened.push({
          phoneNumber,
          name: apt.name,
          date: apt.date,
          time: apt.time,
        });
      }
    }
    return flattened;
  };

  const handleFileChange = (e) => {
    resetState();
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      const content = e.target.result;
      const appointments = parseTextFile(content);

      if (hasDuplicateForAppointments(appointments)) {
        setAlerts((alerts) => [
            ...alerts,
            {
              severity: "error",
              message: "Found Duplicate Phone Numbers in list. Please correct file and try again",
            },
          ]);
      }
      setAppointments(appointments);
    };

    fileReader.readAsText(file);
  };

  const parseTextFile = (content) => {
    // split by new line
    const textLines = content.split("\n");
    const appointmentList = [];

    // remove beginning by checking for headings (date, time, name, ...)
    // TODO make checking for date more robust than just checking if contains "/"
    for (let i in textLines) {
      // delete from array
      let textWords = textLines[i].split(" ");
      if (textWords[0].includes("/")) {
        appointmentList.push(textLines[i]);
      }
    }

    // create objects from string
    const appointments = [];

    for (let i in appointmentList) {
      // split by  | | delimeter
      const apt = appointmentList[i].split(" | | ");

      // trim whitespace
      for (let i in apt) {
        apt[i] = apt[i].trim();
      }

      const date = apt[0];
      const time = apt[1];

      // convert name from CHASE, JOYCE A to JOYCE A CHASE
      let name = apt[2];
      name = name.split(", ")[1] + " " + name.split(", ")[0];
      name = toTitleCase(name);

      // add phone numbers to array
      const phoneNumbers = [];
      if (apt[3]) {
        phoneNumbers.push(apt[3]);
      }

      if (apt[4]) {
        phoneNumbers.push(apt[4]);
      }

      // if phoneNumbers is not an empty array add it to the appointment list
      if (phoneNumbers.length !== 0) {
        const appointment = {
          name,
          date,
          time,
          phoneNumbers,
        };

        appointments.push(appointment);
      }
    }

    return appointments;
  };

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const hasDuplicateForAppointments = (appointments) => {
    if (!appointments) return false;
    const phoneNumbers = flattenAppointment(appointments)
      .map(({ phoneNumber }) => phoneNumber);

    return (phoneNumbers.length !== new Set(phoneNumbers).size);
  }

  // useEffect(() => {
  //   async function logJWT() {
  //     const res = await Auth.currentSession();
  //     const idToken = res.getIdToken();
  //     const jwt = idToken.getJwtToken();
  //     console.log("jwt", jwt);
  //   }
  //   logJWT();
  // }, []);

  // const hasDuplicate = appointments.find();
  const hasDuplicate = hasDuplicateForAppointments(appointments);

  console.log('appointments');
  console.log(appointments);

  return (
    <Container style={{ minHeight: "90vh", textAlign: "center" }}>
      <Input type="file" accept=".txt" onChange={handleFileChange} />
      {Boolean(appointments) && (
        <Container>
          <SMSTable appointments={appointments} />
          {loading && <CircularProgress />}
          <Button variant="outlined" onClick={sendSMS} disabled={buttonClicked || hasDuplicate}>
            Send SMS
          </Button>
        </Container>
      )}
      {Boolean(alerts.length) && (
        <Stack sx={{ width: "100%", margin: "20px" }} spacing={2}>
          {alerts.map(({ message, severity }) => (
            <Alert severity={severity}>{message}</Alert>
          ))}
        </Stack>
      )}
    </Container>
  );
}

const formatPhoneNumber = (phoneNumberString) => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phoneNumberString;
}