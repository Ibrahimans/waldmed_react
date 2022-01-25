import React, { useState } from "react";
import { API, graphqlOperation, Auth } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { createReadings } from "../graphql/mutations";
import { Container, Form, Label, Input, FormGroup } from "reactstrap";
import Datetime from "react-datetime";

import "react-datetime/css/react-datetime.css";
import moment from "moment";
import { Alert } from "@mui/material";

const initialState = { sbp: "", dbp: "", heartRate: "", readingTs: moment() };
const initialAlert = { severity: "info", visible: false, message: "" };

function BloodPressure() {
  const [formState, setFormState] = useState(initialState);
  const [alert, setAlert] = useState(initialAlert);

  const dismissAlert = () => {
    setAlert(initialAlert);
  };

  const setInput = (key, value) => {
    setFormState({ ...formState, [key]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addReading();
  };

  const handleDateTimeChange = (moment) => {
    try {
      setInput("readingTs", moment);
    } catch (error) {
      console.error(moment);
      console.error(error);
    }
  };

  const submitDisabled = !(
    formState.readingTs &&
    formState.sbp &&
    formState.dbp &&
    formState.heartRate
  );

  const addReading = async () => {
    try {
      if (submitDisabled) return;

      const {
        idToken: {
          payload: { email },
        },
      } = await Auth.currentSession();

      // weird bug where readingTs moment in initialState is a Moment Object but then when its formstate its formatted
      const reading = {
        ...formState,
        email,
        readingTs: formState.readingTs.format(),
      };
      setFormState(initialState);
      await API.graphql(graphqlOperation(createReadings, { input: reading }));
      setAlert({
        visible: true,
        message: "Successfully added Blood Pressure Reading!",
        severity: "success",
      });
    } catch (err) {
      console.log("error creating todo:", err);
      if (
        err.errors && err.errors[0]?.errorType === "DynamoDB:ConditionalCheckFailedException"
      ) {
        setAlert({
          visible: true,
          message: "A blood pressure reading already exists for this time.",
          severity: "error",
        });
        return;
      }
      setAlert({
        visible: true,
        message: "An Error Ocurred",
        severity: "error",
      });
    }
  };

  return (
    <Container
      style={{ minHeight: "90vh", maxWidth: 800, textAlign: "center" }}
    >
      <h2 style={{ marginBottom: 20 }}>Input Blood Pressure Reading</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup style={{ margin: 10 }}>
          <Label for="sbp">Systolic Blood Pressure: </Label>
          <Input
            onChange={(event) => setInput("sbp", event.target.value)}
            name="sbp"
            type="number"
            id="sbp"
            value={formState.sbp}
            placeholder="Enter SBP reading here"
          />
        </FormGroup>

        <FormGroup style={{ margin: 10 }}>
          <Label for="dbp">Diastolic Blood Pressure: </Label>
          <Input
            onChange={(event) => setInput("dbp", event.target.value)}
            name="dbp"
            type="number"
            id="dbp"
            value={formState.dbp}
            placeholder="Enter DBP reading here"
          />
        </FormGroup>
        <FormGroup style={{ margin: 10 }}>
          <Label for="heartRate">Heart Rate: </Label>
          <Input
            onChange={(event) => setInput("heartRate", event.target.value)}
            name="heartRate"
            type="number"
            id="heartRate"
            value={formState.heartRate}
            placeholder="Enter Heart Rate reading here"
          />
        </FormGroup>
        <FormGroup style={{ margin: 10 }}>
          <Label for="readingTs">Time of Measure: </Label>
          <Datetime
            value={formState.readingTs}
            onChange={handleDateTimeChange}
          />
        </FormGroup>
        <FormGroup style={{ margin: 10 }}>
          <Input
            style={{ backgroundColor: submitDisabled ? "#BBB" : "#ADD8E6" }}
            type="submit"
            disabled={submitDisabled}
          />
        </FormGroup>
      </Form>

      {alert.visible && (
        <Alert
          severity={alert.severity}
          onClose={dismissAlert}
          style={{ margin: 50 }}
        >
          {alert.message}
        </Alert>
      )}
    </Container>
  );
}

export default withAuthenticator(BloodPressure);
