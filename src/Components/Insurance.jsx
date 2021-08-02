import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Insurance extends Component {
    render() {
        return (
            <div>
                <Container style={{ textAlign: 'center', marginTop: '20vh', marginBottom: '20vh' }}>
                    <Row>
                        <Col style={{ color: '#063970' }}>
                            <h1>Insurance</h1>
                        </Col>
                    </Row>
                    <Row style={{ margin: '5vh' }}>
                        <Col>The Waldorf Medical Clinic accepts numerous insurances. These insurances include:</Col>
                    </Row>
                    <Row style={{ marginTop: '5vh' }}>
                        <Col style={{ color: '#666699' }}>Aetna PPO & HMO</Col>
                        <Col style={{ color: '#Da3925' }}>Aetna Medicaid</Col>
                        <Col style={{ color: '#063970' }}>Amerigroup</Col>
                    </Row>
                    <Row style={{ marginTop: '5vh' }}>
                        <Col style={{ color: 'black' }}>Blue Cross Blue Shield PPO</Col>
                        <Col style={{ color: '#9900cc' }}>Blue Cross Blue Shield EPO</Col>
                        <Col style={{ color: '#33ccff' }}>Blue Cross Blue Shield Traditional</Col>
                    </Row>
                    <Row style={{ marginTop: '5vh' }}>
                        <Col style={{ color: '#9e3e07' }}>Care First Blue Choice</Col>
                        <Col style={{ color: '#1e81b0' }}>Care First Community Healthplan</Col>
                        <Col style={{ color: 'black' }}>Cigna PPO</Col>
                    </Row>
                    <Row style={{ marginTop: '5vh' }}>
                        <Col style={{ color: '#2eb82e' }}>DOL Worker's Comp</Col>
                        <Col style={{ color: '#663300' }}>GEHA</Col>
                        <Col style={{ color: '#ffcc00' }}>John Hopkins Health Insurance</Col>
                    </Row>
                    <Row style={{ marginTop: '5vh' }}>
                        <Col style={{ color: '#e60073' }}>Kaiser Permanente Medicare</Col>
                        <Col style={{ color: '#1a75ff' }}>Mamsi PPO</Col>
                        <Col style={{ color: '#ff0000' }}>Maryland Physician's Care</Col>
                    </Row>
                    <Row style={{ marginTop: '5vh' }}>
                        <Col style={{ color: '#e6e600' }}>Medicare - Care First Medicare Advantage</Col>
                        <Col style={{ color: '#000080' }}>Medicaid Federal & State</Col>
                        <Col style={{ color: '#33cc00' }}>Priority Partners</Col>
                    </Row>
                    <Row style={{ marginTop: '5vh' }}>
                        <Col style={{ color: '#d633ff' }}>Tricare Standard & Prime</Col>
                        <Col style={{ color: 'black' }}>United Healthcare</Col>
                        <Col style={{ color: '#0000e6' }}></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
