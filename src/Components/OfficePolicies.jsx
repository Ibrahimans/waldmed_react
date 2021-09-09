import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class OfficePolicies extends Component {
    render() {
        return (
            <div style={{ marginTop: '5vh', marginBottom: '15vh' }}>
                <Container>
                    <Row>
                        <Container style={{ textAlign: 'center', marginBottom: '5vh' }}>
                            <Row>
                                <Col>
                                    <h4 style={{ color: 'black' }}>Appointment & Cancellation Policy</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        We make every effort to honor all time commitments and request, please extend the same courtesy to us.
                                        If you are unable to keep an appointment, please inform us immediately.
                                        Failure to do so deprives other patients from receiving needed care in a timely fashion.
                                        <span style={{ fontWeight: 'bold' }}> There is a $20.00 no show fee charged on all cancelled appointment made without at least a 24 hour notice.</span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <Row>
                        <Container style={{ textAlign: 'center' }}>
                            <Row>
                                <Col>
                                    <Container>
                                        <Row>
                                            <Col lg='12' style={{ color: '#Da3925' }}>
                                                <h4>Prescriptions</h4>
                                            </Col>
                                            <Col lg='12'>
                                                <div>
                                                    <ul>
                                                        <li>Please make every effort to refill your medications during office visits. Prescriptions can only be refilled during normal business hours</li>
                                                        <li>For urgent refills when you cannot visit the office, the required time may be up to 72 hours to complete the request.</li>
                                                        <li>For medication needing prior authorization through your insurance company, it will take approximately 4-6 business days</li>
                                                        <li style={{ fontWeight: 'bold' }}>Narcotics and all other controlled substances will not be renewed over the phone for any reason. By appointment only</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col lg='7'>
                                            <h4 style={{ color: '#063970' }}>Same-day Appointments</h4>
                                            <div>Office hours are by appointment only. Walk-ins and same day sick visits accepted as our schedule allows</div>
                                        </Col>
                                        <Col lg='5'>
                                            <h4 style={{ color: '#9e3e07' }}>Referrals</h4>
                                            <div>ALL referrals require an office visit. Maximum of two referrals per visit.</div>
                                        </Col>
                                        <Col lg='12' style={{ marginTop: '2vh' }}>
                                            <h4 style={{ color: '#1e81b0' }}>Medical Records</h4>
                                            <div>In order for us to release records to anyone other than your insurance company, there is a charge as well as a medical release form that must be completed.
                                                Please allow up to 14 business days for a transfer of records (we will make every effort to complete your request in the shortest time possible)</div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <Row style={{ textAlign: 'center', marginTop: '5vh' }}>
                        <h4 style={{ color: '#abdbe3' }}>Insurance & Payment Policy</h4>
                        <div>If you are insured by one of the plans in which we a provider, we will gladly follow the contractual agreements.
                            You must have your insurance card and government issued identfication at the time of your visit.
                            Please be aware that your co-pay and/or deductible are due before services are rendered</div>
                    </Row>
                </Container>
            </div>
        )
    }
}
