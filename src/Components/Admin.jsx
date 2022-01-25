import React, { useState } from "react";

import { Container, Form, FormGroup, Input, Spinner } from "reactstrap";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { listReadings } from "../graphql/queries";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Metrics from "./Metrics";

function Admin({ isAdmin }) {
  const [email, setEmail] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [readings, setReadings] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    listReadingsByEmail();
    setSelectedEmail(email);
    setEmail("");
  };

  const listReadingsByEmail = async () => {
    setLoading(true);
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

  if (!isAdmin) {
    return (
      <Container
        style={{ minHeight: "90vh", maxWidth: 800, textAlign: "center" }}
      >
        401 Forbidden
      </Container>
    );
  }

  return (
    <Container style={{ minHeight: "90vh", textAlign: "center" }}>
      <Container style={{ maxWidth: 800 }}>
        {/* search bar */}
        <Form onSubmit={handleSubmit}>
          <FormGroup style={{ margin: 10 }}>
            <Input
              onChange={(event) => setEmail(event.target.value)}
              name="email"
              type="email"
              id="email"
              value={email}
              placeholder="Search Patient By Email"
            />
          </FormGroup>
        </Form>
      </Container>

      {loading ? (
        <Spinner> </Spinner>
      ) : (
        <Metrics readings={readings} selectedEmail={selectedEmail} />
      )}
    </Container>
  );
}

export default withAuthenticator(Admin);
