import React, { Component } from 'react';
import Navbar from './Navbar';
import './Hero.css';

export class Hero extends Component {
    render() {
        return (
            <header className="Header">
                <Navbar />
                <div className="Hero">
                    <div className="Hero__left">
                    <h1 className="mb-3">Modern online and offline payments for Africa</h1>
                    <p>Paystack helps businesses in Africa get paid by anyone, anywhere in the world</p>
                    <a href="#s" className="custom-btn custom-btn-2 mt-3">Create free account</a>
                </div>
                </div>
            </header>
        )
    }
}

export default Hero
