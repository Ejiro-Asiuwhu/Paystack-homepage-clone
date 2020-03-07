import React, { Component } from 'react';
import './Accept.css'
export class Accept extends Component {
    render() {
        return (
            <section className="Accept Trust d-flex justify-content-between align-items-center">
                <div className="Trust-heading mb-5">
                    <p className="Trust__subheading">Try Paystack Now</p>  
                    <h1 className="Trust__heading">Start accepting payments in just 30 minutes</h1>
                </div>
                <div className="Trust__bt">
                     <a href="#s" className="custom-btn custom-btn-2 mt-3">Create free account</a> 
                </div>
            </section>
        )
    }
}

export default Accept;
