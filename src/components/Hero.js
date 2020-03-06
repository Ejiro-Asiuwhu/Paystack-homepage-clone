import React, { Component } from 'react';
import Navbar from './Navbar'

export class Hero extends Component {
    render() {
        return (
            <header className="Hero">
                <Navbar />
                <div className="Hero--left">
                    <h1>Modern online and offline payments for Africa</h1>
                    <p>Paystack helps businesses in Africa get paid by anyone, anywhere in the world</p>
                    <a href="#s">Create free account</a>
                </div>
            </header>
        )
    }
}

export default Hero
