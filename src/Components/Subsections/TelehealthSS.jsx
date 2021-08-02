import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import doxyme from '../../Images/doxymewebsite.PNG';


export default class TelehealthSS extends Component {
    render() {
        return (
            <div style={{ marginBottom: '10vh' }}>
                <Container style={{ marginTop: '10vh' }}>
                    <Row>
                        <Col lg='7' xs='12' className="cn">
                            <Container>
                                <Row>
                                    <Col xs='12' style={{ textAlign: 'left' }}>
                                        <h1>Telehealth</h1>
                                        <div>Access your telehealth meeting with Dr. Ansari by going to <a href='https://doxy.me/zansari'>https://doxy.me/zansari</a>. <br />(You must have a scheduled Telehealth meeting
                                            to be seen by Dr. Ansari) 
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col lg='5' xs='12' >
                            <Container>
                                <Row>
                                    <Col xs='12'>
                                        <a href='https://doxy.me/zansari'><img src={doxyme} style={{ width: '100%', border: '2px solid gray', borderRadius: '8px', textAlign: 'center' }} /></a>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <div style={{height:'10vh'}}></div>
            </div>
        )
    }
}