import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Error extends Component {
    render() {
        return (
            <div>
                <Container style={{ textAlign: 'center', marginTop: '20vh', marginBottom: '20vh' }}>
                    <Row>
                        <Col style={{ color: '#063970' }}>
                            <h1>ERROR 404 This page could not be found or does not exist!</h1>
                            <div>Please navigate back using the navigation bar above</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
