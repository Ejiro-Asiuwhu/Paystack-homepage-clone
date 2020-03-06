import React, { Component } from 'react';
import Navbar from './Navbar';
import './Hero.css';
import map from '../assets/images/svgs/map.svg'
import play from '../assets/images/svgs/play.svg'
export class Hero extends Component {
    render() {
        return (
            <header className="Header">
                <Navbar />
                <div className="Hero overflow-hidden px-5 mx-auto">
                    <div className="Hero__main d-flex">
                        <div className="Hero__left-body">
                            <h1 className="mb-3">Modern online and offline payments for Africa</h1>
                            <p className="font-weight-normal">Paystack helps businesses in Africa get paid by anyone, anywhere in the world</p>
                            <a href="#s" className="custom-btn custom-btn-2 mt-3">Create free account</a> 
                        </div>
                        <div className="Hero__right-body">
                            <img src={map} alt=""/>
                        </div>
 
                    </div>
                    <div className="Hero__footer d-flex justify-content-between align-items-center pb-5">
                         <div className="Hero__left-logo">
                                <p>Trusted by over 60,000 businesses</p>
                                <div className="Hero__logo">
                                    <img className="mr-5 mtn" src="https://assets.paystack.com/assets/img/logos/merchants/MTN-Plain.svg" alt="MTN logo"/>
                                    <img className="mr-5 bolt" src="https://assets.paystack.com/assets/img/logos/merchants/Bolt-Stack-Blue_200304_153027.svg" alt="Bolt logo" />
                                    <img className="mr-5 axa" src="https://assets.paystack.com/assets/img/logos/merchants/Axa-mansard-_-Plain.svg" alt="Axa Mansard logo" />
                                    <img className="ups" src="https://assets.paystack.com/assets/img/logos/merchants/UPS-Stack-Blue_200304_153333.svg" alt="UPS logo"/>
                                </div>
                        </div> 
                        <div className="Hero__footer-video d-flex align-items-center">
                            <p className="mr-3">Watch MTN Chief Transformation Officer, Olubayo <br /> Adekanmbi, discuss working with Paystack</p>
                            <a target="_blank" className="play-link d-flex justify-content-center align-items-center"  rel="noopener noreferrer" href="https://www.youtube.com/watch?v=aQ06f8vARhw"><img src={play} alt=""/></a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Hero
