import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Services from "./Components/Services";
import OfficePolicies from "./Components/OfficePolicies";
import PrivacyPolicies from "./Components/PrivacyPolicies";
import Insurance from "./Components/Insurance";
import PatientForms from "./Components/PatientForms";
import Telehealth from "./Components/Telehealth";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import BloodPressure from "./Components/BloodPressure";
import Admin from "./Components/Admin";
import Error from "./Components/Error";
import Footer from "./Components/Footer";
import { Auth, Hub } from "aws-amplify";

const WALDMED_ADMIN_GROUP = "Admin";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  getisAdmin = async () => {
    const session = await Auth.currentSession();
    const isAdmin = session.idToken.payload["cognito:groups"]
      ? session.idToken.payload["cognito:groups"].includes(WALDMED_ADMIN_GROUP)
      : false;
    return isAdmin;
  };

  componentDidMount = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const isAdmin = await this.getisAdmin();
      this.setState({ user: { ...user, isAdmin } });
    } catch (error) {
      console.log("No signed in user");
    }

    Hub.listen("auth", async (data) => {
      switch (data.payload.event) {
        case "signIn":
          const user = data.payload.data;
          const isAdmin = await this.getisAdmin();
          return this.setState({ user: { ...user, isAdmin } });
        case "signOut":
          return this.setState({ user: null });
        default:
          console.log(`not supported Hub event ${data.payload.event}`);
      }
    });
  };
  render() {
    const { user } = this.state;
    const isAdmin = user ? user.isAdmin : false;
    return (
      <main>
        <Navbar user={user} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/services/" component={Services} />
          <Route path="/office_policies/" component={OfficePolicies} />
          <Route path="/privacy_policies/" component={PrivacyPolicies} />
          <Route path="/insurance/" component={Insurance} />
          <Route path="/patient_forms/" component={PatientForms} />
          <Route path="/telehealth/" component={Telehealth} />
          <Route path="/about_us/" component={AboutUs} />
          <Route
            path="/bloodpressure/admin"
            render={() => <Admin isAdmin={isAdmin} />}
          />
          <Route path="/bloodpressure/" component={BloodPressure} />
          <Route path="/contact/" component={Contact} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </main>
    );
  }
}
