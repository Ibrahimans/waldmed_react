import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class PrivacyPolicies extends Component {
    render() {
        return (
            <div>
                <Container style={{ textAlign: 'center', marginTop: '20vh', marginBottom: '25vh' }}>
                    <Row>
                        <Col style={{ color: '#063970' }}>
                            <h1>HIPAA Privacy</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                The HIPAA Privacy Rule establishes national standards to protect individuals' medical records and other personal health information and applies to health plans,
                                health care clearinghouses, and those health care providers that conduct certain health care transactions electronically.
                                The Rule requires appropriate safeguards to protect the privacy of personal health information, and sets limits and conditions on the uses and disclosures that may be made of such information without patient authorization. '
                                The Rule also gives patients rights over their health information, including rights to examine and obtain a copy of their health records, and to request corrections.
                            </div>
                            <div style={{ marginTop: '3vh' }}>
                                The Waldorf Medical Clinic complies with all HIPAA rules and regulations. To see more information about HIPAA, visit <a href='https://www.hhs.gov/hipaa/for-professionals/privacy/index.html'>https://www.hhs.gov/hipaa/for-professionals/privacy/index.html</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
