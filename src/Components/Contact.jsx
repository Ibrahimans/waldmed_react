import React, { Component } from 'react'
import Hours from './Subsections/Hours'

export default class Contact extends Component {
    render() {
        return (
            <div style={{}}>
                <div style={{ textAlign: 'center', backgroundColor: '#abdbe3', color: 'white' }}>
                    <div style={{ height: '5vh' }}></div>
                    <h1 style={{ fontWeight: 'bold' }}>Contact Information</h1>
                    <div>Phone: (301) 396-4800</div>
                    <div>Fax: (301) 396-4802</div>
                    <div style={{ height: '5vh' }}></div>
                </div>
                <Hours />
            </div>
        )
    }
}
