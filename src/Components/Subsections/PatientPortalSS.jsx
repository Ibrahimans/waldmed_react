import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MymedAccess from '../../Images/mymedaccess.PNG';

export default class PatientPortalSS extends Component {
    render() {
        return (
            <div>
                <Container style={{ marginTop: '10vh' }}>
                    <Row>
                        <Col lg='5' xs='12'>
                            <Container>
                                <Row>
                                    <Col xs='12'>
                                        <a href='https://waldorfmed.mymedaccess.com/login'><img src={MymedAccess} style={{ width:'100%', border:'2px solid gray', borderRadius:'8px'}}/></a>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col lg='7' xs='12' className="cn">
                            <Container>
                                <Row>
                                    <Col xs='12' style={{ textAlign: 'left' }}>
                                        <h1>Patient Portal</h1>
                                        <div>
                                            Access your patient portal by going to <a href='https://waldorfmed.mymedaccess.com/login'>https://waldorfmed.mymedaccess.com/login</a> to
                                            view your records. If you do not have a patient portal set up please contact our office and we will get it set up for you!
                                        </div>
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
