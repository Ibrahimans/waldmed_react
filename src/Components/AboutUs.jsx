import React, { Component } from 'react';
import ChooseUs from './Subsections/ChooseUs';
import { Container, Row, Col } from 'reactstrap';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <Container style={{ textAlign: 'center' }}>
                    <Row>
                        <Col style={{ marginTop: '10vh', color: '#063970' }}>
                            <h1>Our Story</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            The Waldorf Medical Clinic was founded by Dr. Zafar Ansari in 1998. The Waldorf Medical Clinic is a family-run doctor's office that focuses on you, the patient.
                            Our mission is to provide our patients with valued products and services in a caring and professional manner.
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ marginTop: '10vh', color: '#9e3e07' }}>
                            <h1>Meet Dr. Ansari</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='12' xs='12'>
                            Dr. Zafar Ansari did his Undergraduate degree at George Mason University, where he graduated in 1990 with honors. He then attended The University
                            of Health Sciences Chicago Medical School and graduated in 1995. Dr. Ansari went on to the Norwalk Hospital affiliated with The Yale University
                            School of Medicine to do his Resdiency, in which he completed in June of 1998. He became board certified by the American Board of Internal Medicine in 1998, and has remained so since.
                        </Col>
                        <Col style={{ marginTop: '3vh' }}>
                            Dr. Ansari is proud to welcome patients to his practice where care and compassion combined with education and experience to provide only the best in adult primary care.
                            His philosophy, "the patient comes first", along with his expertise creates excellence in both patient care and clinical results.
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ marginTop: '10vh' }}>
                            <h1>Internal Medicine</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Why pick an Internal Medicine Doctor? Internists or practicioners of Internal Medicine are specialists in the care of the adult patient. This includes management of chronic medical problems, as well as specialized care for most acute illnesses.
                            Internists are primary care physicians who take an active role in care of the entire patient, including each organ system, as well as the individual human being that is much more than just the sum of these parts.
                            Independent internsits are the best patients advocates, and are primarily concernedd about the interests of the patient and his or her well being.
                            Sub-specialists such as cardiologists or gastroenterologists are experts in their own specialized field, but only Internists can provide complete care which is essential for overall excellent health.
                        </Col>
                    </Row>
                </Container>
                <ChooseUs />
            </div>
        )
    }
}
