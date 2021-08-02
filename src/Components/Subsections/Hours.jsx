import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { GiEmptyHourglass } from "react-icons/gi";

export default class Hours extends Component {
    render() {
        return (
            <div style={{ width: '100%' }}>
                <Container>
                    <Row>
                        <Col lg='6' sm='6' xs='12' style={{ marginTop: '10vh', textAlign: 'center' }}>
                            <h1>Office Hours</h1>
                            <Container>
                                <Row>
                                    <Col lg='6' xs='6' style={{ textAlign: 'left' }}>Monday</Col>
                                    <Col lg='6' xs='6' style={{ textAlign: 'right' }}>8:00 AM - 5:00 PM (Waldorf) <hr class="rounded"></hr></Col>
                                </Row>
                                <Row>
                                    <Col lg='6' xs='6' style={{ textAlign: 'left' }}>Tuesday</Col>
                                    <Col lg='6' xs='6' style={{ textAlign: 'right' }}>8:00 AM - 5:00 PM (Waldorf) <hr class="rounded"></hr> </Col>
                                </Row>
                                <Row>
                                    <Col lg='2' xs='6' style={{ textAlign: 'left' }}>Wednesday</Col>
                                    <Col lg='10' xs='6' style={{ textAlign: 'right' }}>8:30 AM - 12:00 PM (Waldorf) & 1:00 PM - 5:00 PM (Clinton) <hr class="rounded"></hr> </Col>
                                </Row>
                                <Row>
                                    <Col lg='6' xs='6' style={{ textAlign: 'left' }}>Thursday</Col>
                                    <Col lg='6' xs='6' style={{ textAlign: 'right' }}>9:00 AM - 12:00 PM (Alexandria) <hr class="rounded"></hr> </Col>
                                </Row>
                                <Row>
                                    <Col lg='6' xs='6' style={{ textAlign: 'left' }}>Friday</Col>
                                    <Col lg='6' xs='6' style={{ textAlign: 'right' }}>8:30 AM - 5:00 PM (Waldorf) <hr class="rounded"></hr></Col>
                                </Row>
                                <Row>
                                    <Col lg='6' xs='6' style={{ textAlign: 'left' }}>Saturday (Only open on the first Saturday of the month)</Col>
                                    <Col lg='6' xs='6' style={{ textAlign: 'right' }}>8:00 AM - 5:00 PM (Waldorf) <hr class="rounded"></hr></Col>
                                </Row>
                                <Row>
                                    <Col lg='6' xs='6' style={{ textAlign: 'left' }}>Sunday</Col>
                                    <Col lg='6' xs='6' style={{ textAlign: 'right' }}>CLOSED</Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col lg='6' sm='6' xs='12' className="cn">
                            <Container style={{ marginTop: '10vh' }}>
                                <Row style={{ textAlign: 'center' }}>
                                    <h1>Locations</h1>
                                    <ul style={{ listStyleType: 'none' }}>
                                        <li><a style={{ textDecoration: 'none' }} href='https://www.google.com/maps/search/?api=1&query=The+Waldorf+Medical+Clinic&query_place_id=ChIJx4qiCtygt4kRYXze0zE0bd0'><span style={{ fontWeight: 'bold' }}>Waldorf: </span> 601 Post Office Rd #2C, Waldorf, MD 20602</a></li>
                                        <li><a style={{ textDecoration: 'none' }} href='https://www.google.com/maps/search/?api=1&query=9135+Piscataway+Rd+Suite+%23300,+Clinton,+MD+20735/'><span style={{ fontWeight: 'bold' }}>Clinton: </span> 9135 Piscataway Dr #300, Clinton MD 20735</a></li>
                                        <li><a style={{ textDecoration: 'none' }} href='https://www.google.com/maps/search/?api=1&query=Alexandria+Medical+Clinic&query_place_id=ChIJS_MdF8Kvt4kRsfjLF9D150o/'><span style={{ fontWeight: 'bold' }}>Alexandria: </span> 4010 Maury Place #9B, Alexandria VA 22309</a></li>
                                    </ul>
                                </Row>
                                <Row>
                                    <Col xs='12' style={{ textAlign: 'center' }}>
                                        <GiEmptyHourglass style={{ fontSize: '15vw', color: '#e28743' }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs='12'>
                                        <h5 style={{ textAlign: 'center' }}>Walk-in and Emergency care available. Prompt Service, usually with same or next day appointments.</h5>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <div style={{ height: '10vh' }}></div>
            </div>
        )
    }
}


