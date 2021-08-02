import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Services extends Component {
    render() {
        return (
            <div>
                <Container style={{ textAlign: 'center', marginTop: '20vh', marginBottom: '20vh' }}>
                    <Row>
                        <Col style={{ color: '#063970' }}>
                            <h1>Services</h1>
                        </Col>
                    </Row>
                    <Row style={{ margin: '5vh' }}>
                        <Col>The Waldorf Medical Clinic offers a variety of services and treatments to our patients. These Services include:</Col>
                    </Row>
                    <Row style={{ marginTop: '5vh' }}>
                        <Col style={{ color: '#666699' }}>Adult Preventative Care</Col>
                        <Col style={{ color: '#Da3925' }}>Physical Examinations</Col>
                        <Col style={{ color: '#063970' }}>Adult Vaccinations</Col>
                    </Row>
                    <Row style={{ marginTop: '5vh' }}>
                        <Col style={{ color: 'black' }}>Cancer Screenings</Col>
                        <Col style={{ color: '#9900cc' }}>Blood Pressure Screenings</Col>
                        <Col style={{ color: '#33ccff' }}>Cholesterol Screenings</Col>
                    </Row>
                    <Row style={{ marginTop: '5vh' }}>
                        <Col style={{ color: '#9e3e07' }}>Thyroid Evaluations</Col>
                        <Col style={{ color: '#1e81b0' }}>Urinalysis</Col>
                        <Col style={{ color: 'black' }}>Spirometry</Col>
                    </Row>
                    <Row style={{ marginTop: '5vh' }}>
                        <Col style={{ color: '#2eb82e' }}>EKG Testing</Col>
                        <Col style={{ color: '#663300' }}>Nebulizer Treatments</Col>
                        <Col style={{ color: '#ffcc00' }}>Diabetic Screenings</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
