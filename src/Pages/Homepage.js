import React, { Component } from 'react';
import Hero from '../components/Hero'
import Payment from '../components/Payment'
import Api from '../components/Api'
import Trust from '../components/Trust'

export class Homepage extends Component {
    render() {
        return (
            <>
                <Hero />
                <Payment />
                <Api />
                <Trust />
            </>
        )
    }
}

export default Homepage
