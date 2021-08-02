import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { BsBuilding } from 'react-icons/bs';
import { GiHealthNormal } from 'react-icons/gi';
import { FaRegHospital } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';


export default class ChooseUs extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#abdbe3', marginTop: '5vh' }}>
                <Container>
                    <Row>
                        <Col>
                            <h1 style={{ textAlign: 'center', marginTop: '5vh', color: 'white' }}>
                                Our mission is to provide our patients and customers with valued products and services in a caring and professional manner.
                            </h1>
                        </Col>
                    </Row>
                    <Row style={{ textAlign: 'center', marginTop: '5vh' }}>
                        <Col lg='3' sm='3' xs='6'>
                            <Container>
                                <Row>
                                    <Col lg='12' xs='12'>
                                        <BsBuilding style={{ fontSize: '10vh', color: 'white' }} />
                                    </Col>
                                    <Col lg='12' xs='12' style={{ textAlign: 'center', marginTop: '1vh' }}>
                                        <h4>MULTIPLE LOCATIONS</h4>
                                    </Col >
                                    <Col>
                                        <div>Receive primary care from Dr. Ansari at one of our several locations in Waldorf, Clinton, and Alexandria </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col lg='3' sm='3' xs='6'>
                            <Container>
                                <Row>
                                    <Col lg='12' xs='12'>
                                        <AiOutlineClockCircle style={{ fontSize: '10vh', color: '#e28743' }} />
                                    </Col>
                                    <Col lg='12' xs='12' style={{ textAlign: 'center', marginTop: '1vh' }}>
                                        <h4>CONVENIENT HOURS</h4>
                                    </Col >
                                    <Col>
                                        <div>Walk-in patients welcome! Dr. Ansari and staff will take care of your needs with same or next day appointments</div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col lg='3' sm='3' xs='6'>
                            <Container>
                                <Row>
                                    <Col lg='12' xs='12'>
                                        <GiHealthNormal style={{ fontSize: '10vh', color: 'white' }} />
                                    </Col>
                                    <Col lg='12' xs='12' style={{ textAlign: 'center', marginTop: '1vh' }}>
                                        <h4>VARIOUS TREATMENTS</h4>
                                    </Col >
                                    <Col>
                                        <div>We offer many treatments such as, but not limited to, Diabetic Screening, EKG testing, Physicals, Thyroid Evaluation, and Blood Testing </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col lg='3' sm='3' xs='6'>
                            <Container>
                                <Row>
                                    <Col lg='12' xs='12'>
                                        <FaRegHospital style={{ fontSize: '10vh', color: '#e28743' }} />
                                    </Col>
                                    <Col lg='12' xs='12' style={{ textAlign: 'center', marginTop: '1vh' }}>
                                        <h4>NUMEROUS INSURANCES</h4>
                                    </Col >
                                    <Col>
                                        <div>Please checkout the insurances we accept to see if we accept yours!</div>
                                    </Col>
                                    <Col lg='12' xs='12'>
                                        <Button href="/insurance/" style={{backgroundColor:'#e28743', marginTop:'1vh'}}>Insurance</Button>{' '}
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <div style={{height:'10vh', backgroundColor:'#abdbe3'}}></div>
            </div>
        )
    }
}
