import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import newPatientForm from '../PDFs/new_patient_form.pdf';

export default class PatientForms extends Component {
    render() {
        return (
            <div>
                <Container style={{ textAlign: 'center', marginTop: '20vh', marginBottom: '50vh' }}>
                    <Row>
                        <Col style={{ color: '#063970' }}>
                            <h1>Patient Forms</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                If you are not yet a patient at the Waldorf Medical Clinic, consider filling out our <a href={newPatientForm} target="_blank" rel="noopener noreferrer">New Patient Form</a> before coming in to our office.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
