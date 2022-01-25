import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BloodPressureForm from "./BloodPressureForm";
import { Container, Spinner } from "reactstrap";
import Metrics from "./Metrics";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { listReadings } from "../graphql/queries";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BloodPressure() {
  const [selectedEmail, setSelectedEmail] = useState("");
  const [readings, setReadings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const listReadingsByEmail = async () => {
    setLoading(true);
    const {
      idToken: {
        payload: { email },
      },
    } = await Auth.currentSession();
    setSelectedEmail(email);

    try {
      const readingData = await API.graphql(
        graphqlOperation(listReadings, {
          email,
          sortDirection: "DESC",
        })
      );
      const _readings = readingData.data.listReadings.items;
      setReadings(_readings);
    } catch (err) {
      console.log("error fetching readings", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    listReadingsByEmail();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Add Reading" {...a11yProps(0)} />
          <Tab label="My Readings" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BloodPressureForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container>
          {loading ? (
            <Spinner> </Spinner>
          ) : (
            <Metrics readings={readings} selectedEmail={selectedEmail} />
          )}
        </Container>
      </TabPanel>
    </Box>
  );
}
