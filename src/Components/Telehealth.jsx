import React, { Component } from 'react'
import PatientPortalSS from './Subsections/PatientPortalSS'
import TelehealthSS from './Subsections/TelehealthSS'

export default class Telehealth extends Component {
    render() {
        return (
            <div>
                <TelehealthSS />
                <PatientPortalSS />
            </div>
        )
    }
}
