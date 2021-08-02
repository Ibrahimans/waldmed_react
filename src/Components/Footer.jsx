import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Footer extends Component {
    render() {
        return (
            <div style={{ height: '100%', backgroundColor: '#FAEBD7' }}>
                <div style={{ height: '3.5vh' }}></div>
                <Container style={{ color: 'black' }}>
                    <Row>
                        {/* Quick links */}
                        <Col lg='4'>
                            <Container>
                                <Row>
                                    <Col lg='12' xs='12' style={{ margin: '5px', fontWeight: 'bold' }}>Navigate:</Col>
                                    <Col lg='12' xs='12' style={{ margin: '5px' }}><a style={{ textDecoration: 'none' }} href='/telehealth/'>Telehealth & Patient Portal</a></Col>
                                    <Col lg='12' xs='12' style={{ margin: '5px' }}><a style={{ textDecoration: 'none' }} href='/office_policies/'>Office Policies</a></Col>
                                    <Col lg='12' xs='12' style={{ margin: '5px' }}><a style={{ textDecoration: 'none' }} href='/privacy_policies/'>Privacy Policies</a></Col>
                                    <Col lg='12' xs='12' style={{ margin: '5px' }}><a style={{ textDecoration: 'none' }} href='/insurance/'>Insurance</a></Col>
                                    <Col lg='12' xs='12' style={{ margin: '5px' }}><a style={{ textDecoration: 'none' }} href='/patient_education/'>Patient Education</a></Col>
                                    <Col lg='12' xs='12' style={{ margin: '5px' }}><a style={{ textDecoration: 'none' }} href='/patient_forms/'>Patient Forms</a></Col>
                                </Row>
                            </Container>
                        </Col>
                        {/* Contact us */}
                        <Col lg='4'>
                            <Container >
                                <Row>
                                    <Col lg='12' xs='12' style={{ marginTop: '5px', marginBottom: '10px', fontWeight: 'bold' }}>Contact Us:</Col>
                                    <Col lg='12' xs='12' style={{ marginBottom: '5px' }}>Phone: (301) 396-4800 | Fax: (301) 396-4802</Col>
                                    {/* <Col lg='12' xs='12'>Fax: (301) 396-4802</Col> */}
                                    <Col>
                                        <ul style={{ listStyleType: 'none', padding: '0', marginTop: '5px' }}>
                                            <li><a style={{ textDecoration: 'none' }} href='https://www.google.com/maps/search/?api=1&query=The+Waldorf+Medical+Clinic&query_place_id=ChIJx4qiCtygt4kRYXze0zE0bd0'>Waldorf: 601 Post Office Rd #2C, Waldorf, MD 20602</a></li>
                                            <li><a style={{ textDecoration: 'none', marginTop: '20px' }} href='https://www.google.com/maps/search/?api=1&query=9135+Piscataway+Rd+Suite+%23300,+Clinton,+MD+20735/'>Clinton: 9135 Piscataway Dr #300, Clinton MD 20735</a></li>
                                            <li><a style={{ textDecoration: 'none' }} href='https://www.google.com/maps/search/?api=1&query=Alexandria+Medical+Clinic&query_place_id=ChIJS_MdF8Kvt4kRsfjLF9D150o/'>Alexandria: 4010 Maury Place #9B, Alexandria VA 22309</a></li>
                                        </ul></Col>
                                </Row>
                            </Container>
                        </Col>
                        {/* Our mission */}
                        <Col lg='4'>
                            <Container>
                                <Row>
                                    {/* <Col lg='12' xs='12'><a style={{ textDecoration: 'none' }} href='/about_us/'>About Us:</a></Col> */}
                                    <Col lg='12' style={{ fontSize: '1.5vh', marginTop: '5vh' }}><a style={{ textDecoration: 'none' }} href='/about_us/'>The Waldorf Medical Clinic </a>is a family-run doctors office that focuses on you, the patient.
                                        Our mission is to provide our patients with valued products and services in a caring and professional manner.</Col>
                                    <Col>© 2021 The Waldorf Medical Clinic, LLC.</Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
