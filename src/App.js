import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';
import OfficePolicies from './Components/OfficePolicies';
import PrivacyPolicies from './Components/PrivacyPolicies';
import Insurance from './Components/Insurance';
import PatientEducation from './Components/PatientEducation';
import PatientForms from './Components/PatientForms'
import Telehealth from './Components/Telehealth';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Footer from './Components/Footer';

export default class App extends Component {

  render() {
    return (
          <main>
            <Navbar />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/services/" component={Services} />
              <Route path="/office_policies/" component={OfficePolicies} />
              <Route path="/privacy_policies/" component={PrivacyPolicies} />
              <Route path="/insurance/" component={Insurance} />
              {/* <Route path="/patient_education/" component={PatientEducation} /> */}
              <Route path="/patient_forms/" component={PatientForms} />
              <Route path="/telehealth/" component={Telehealth} />
              <Route path="/about_us/" component={AboutUs} />
              <Route path="/contact/" component={Contact} />
              <Route component={Error} />
            </Switch>
            
            <Footer />
          </main>
    )
  }
}
