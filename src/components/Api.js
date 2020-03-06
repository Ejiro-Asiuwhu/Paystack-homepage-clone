import React, { Component } from 'react'
import './Api.css';
import play from '../assets/images/svgs/play.svg'


export class Api extends Component {
    render() {
        return (
           <section className="Payment">
                <div className="payment__main d-flex justify-content-between">
                    <div className="payment__main-right mt-n5">
                        <h2 className="payment-heading mb-3">
                            Build custom payments experiences with well-documented APIs
                        </h2>
                        <p className="my-4">
                            Developers love our thorough, well-documented APIs that let you to build 
                            everything from simple weekend projects, to complex financial products 
                            serving hundreds of thousands of customers. If you can imagine it, you 
                            can build it with Paystack.
                        </p>
                        <div className="feature d-flex">
                            <ul className="mb-4">
                                <li>Collect one-time and recurring payments from your app or website</li>
                                <li>Make instant transfers</li>
                                <li>Retrieve all your transaction and customer data</li>
                                <li>Verify the identity of customers</li>
                            </ul>
                        </div>
                        <a class="text-link " href="https://paystack.com/success-rates"> <span className="mr-3"><img className="mt-n1" src={play} alt=""/></span> <span>Paystack API quickstart </span> </a>
                    </div>
                     <div className="paymant__main-left">
                        <img src="https://assets.paystack.com/assets/img/content/_400x357_crop_center-center_82_line/Robust-Suite-of-APIs-Opt.png" alt="Multiple channels gif"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Api
