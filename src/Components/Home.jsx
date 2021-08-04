import React, { Component } from 'react';
import genericDoctor from '../Images/generic_doctor.jpeg';
import Hours from './Subsections/Hours';
import ChooseUs from './Subsections/ChooseUs';
import PatientPortalSS from './Subsections/PatientPortalSS';
import TelehealthSS from './Subsections/TelehealthSS';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={genericDoctor} className='image' alt="" />
                    <div className='imageText'>The Waldorf Medical Clinic</div>
                    <div className='imageSubtext'>Personalized Primary Care Just For You</div>
                </div>
                <Hours />
                <ChooseUs />
                <PatientPortalSS />
                <hr className='divider' />
                <TelehealthSS />
            </div>
        )
    }
}
