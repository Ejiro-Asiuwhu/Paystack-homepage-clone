import React, { Component } from 'react'
import play from '../assets/images/svgs/play.svg'
import './Trust.css'
export class Trust extends Component {
    render() {
        return (
            <section className="Trust">
                <div className="Trust-heading mb-5">
                    <h1>Trusted by 60,000+ businesses</h1>
                    <p>Thousands of organizations of all sizes trust Paystack to grow their business.</p>  
                </div>
                <div className="card-container">
                    <div className="card-custom card-1">
                        <img className="card-img mb-5" src="https://assets.paystack.com/assets/img/content/For-International-Businesses_180823_165939.svg" alt="" />
                        <h4 className="mb-4">
                            Paystack for <br/> Global Brands
                        </h4>
                        <p  className="mb-5">We help global brands accept payments from across Africa</p>
                        <a class="text-link" href="https://paystack.com/success-rates"> <span><img className="mr-3 mt-1n" src={play} alt=""/></span> Learn more</a>

                    </div>
                </div>
            </section>
        )
    }
}

export default Trust
