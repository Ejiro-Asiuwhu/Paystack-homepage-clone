import React, { Component } from 'react';
import './Partners.css';

export class Partners extends Component {
    render() {
        return (
           <section className="Trust">
                <div className="Trust-heading mb-5">
                    <h1 className="Trust__heading">Backed by strong global partners</h1>
                    <p className="Trust__subheading mb-5">Paystack is backed by notable investors as well as some of the best payments companies on the planet.</p>  
                </div>
                <div className="card-container d-flex justify-content-center align-items-center mt-5">
                    <div className="card-custom card-1 mr-5">
                        <img className="card-img mb-5 card-logo" src="https://assets.paystack.com/assets/img/logos/merchants/_400x190_crop_center-center_82_line/Stripe-Logo-blue.png" alt="" />
                        <p className="mb-5">Paystack is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.</p>
                        <div className="ceo-container d-flex">
                            <img className="ceo mr-4" src="https://assets.paystack.com/ assets/img/testimonial-authors/_400x400_crop_center-center_82_line/patrick-collison-headshot.jpg" alt="Stripe CEO"/>
                            <a class="text-link" href="https://paystack.com/success-rates"> <p>Patrick Collison</p> CEO, Stripe</a>
                        </div>
                    </div>
                    <div className="card-custom card-1 mr-5">
                        <img className="card-img mb-5 card-logo" src="https://assets.paystack.com/assets/img/logos/merchants/_400x190_crop_center-center_82_line/Stripe-Logo-blue.png" alt="" />
                        <p className="mb-5">Paystack is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.</p>
                        <div className="ceo-container d-flex">
                            <img className="ceo mr-4" src="https://assets.paystack.com/ assets/img/testimonial-authors/_400x400_crop_center-center_82_line/patrick-collison-headshot.jpg" alt="Stripe CEO"/>
                            <a class="text-link" href="https://paystack.com/success-rates"> <p>Patrick Collison</p> CEO, Stripe</a>
                        </div>
                    </div>
                    <div className="card-custom card-1 mr-5">
                        <img className="card-img mb-5 card-logo" src="https://assets.paystack.com/assets/img/logos/merchants/_400x190_crop_center-center_82_line/Stripe-Logo-blue.png" alt="" />
                        <p className="mb-5">Paystack is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.</p>
                        <div className="ceo-container d-flex">
                            <img className="ceo mr-4" src="https://assets.paystack.com/ assets/img/testimonial-authors/_400x400_crop_center-center_82_line/patrick-collison-headshot.jpg" alt="Stripe CEO"/>
                            <a class="text-link" href="https://paystack.com/success-rates"> <p>Patrick Collison</p> CEO, Stripe</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Partners
