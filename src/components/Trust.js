import React, { Component } from 'react'
import play from '../assets/images/svgs/play.svg'
export class Trust extends Component {
    render() {
        return (
            <section className="Trust">
                <h1>Trusted by 60,000+ businesses</h1>
                <p>Thousands of organizations of all sizes trust Paystack to grow their business.</p>
                <div className="card-container">
                    <div className="card card-1">
                        <img src="https://assets.paystack.com/assets/img/content/For-International-Businesses_180823_165939.svg" alt="" />
                        <h5>
                            Paystack for Global Brands
                        </h5>
                        <p>We help global brands accept payments from across Africa</p>
                        <a class="text-link" href="https://paystack.com/success-rates"> <span><img className="mr-3" src={play} alt=""/></span> Learn more</a>

                    </div>
                </div>
            </section>
        )
    }
}

export default Trust
