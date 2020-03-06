import React, { Component } from 'react';
import Hero from '../components/Hero'
import Payment from '../components/Payment'

export class Homepage extends Component {
    render() {
        return (
            <>
                <Hero />
                <Payment />
            </>
        )
    }
}

export default Homepage
