import React, { Component } from 'react';
import './Payment.css';
import play from '../assets/images/svgs/play.svg'

export class Payment extends Component {
    render() {
        return (
            <section className="Payment">
                <div className="heading">
                   <h2 className="mb-4 payment-heading">Simple, easy payments</h2>   
                   <p>Building a business is hard. Getting paid shouldn't be.</p> 
                </div>
                <div className="payment__main d-flex justify-content-between">
                    <div className="paymant__main-left">
                        <img src="https://assets.paystack.com/assets/img/content/Collect-Payments-for-Multiple-Channels-1.1.gif" alt="Multiple channels gif"/>
                    </div>
                    <div className="payment__main-right mt-n5">
                        <h2 className="payment-heading mb-3">
                            Delight customers with a seamless payments experience
                        </h2>
                        <p className="my-4">
                            Give your customers the gift of modern, frictionless, painless payments. Integrate Paystack once and let your customers pay you however they want.
                        </p>
                        <div className="feature d-flex">
                            <ul className="mb-4">
                                <li>Card</li>
                                <li>Bank Accont</li>
                                <li>GTB 737</li>
                                <li>Visa QR</li>
                            </ul>
                            <ul>
                                <li>Mobile</li>
                                <li>mCash (comming soon)</li>
                                <li>POS (coming soon)</li>
                            </ul>
                        </div>
                        <h2 className="payment-heading mt-5">
                            Enjoy phenomenal transaction success rates
                        </h2>
                        <p className="my-5">
                            We automatically route payments through the most optimal channels, ensuring the highest transaction success rates in the market.
                        </p>
                        <a class="text-link" href="https://paystack.com/success-rates"> <span><img className="mr-3" src={play} alt=""/></span> Find out how we achieve high success rates</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Payment
