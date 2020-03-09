import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <footer className="Trust d-flex">
                <div className="footer__link">
                    <ul>
                        <h4>Why Paystack</h4>
                        <li> <a href="/">Success Rate</a></li>
                        <li> <a href="/">For Entreprenurs</a></li>
                        <li> <a href="/">For Corporates</a></li>
                        <li> <a href="/">For Fintech</a></li>
                        <li> <a href="/">For Schools</a></li>
                        <li> <a href="/">For Betting</a></li>
                    </ul>
                </div>
                 <div className="footer__link">
                    <ul>
                        <h4>Pricing</h4>
                        <li> <a href="/">Success Rate</a></li>
                        <li> <a href="/">For Entreprenurs</a></li>
                        <li> <a href="/">For Corporates</a></li>
                        <li> <a href="/">For Fintech</a></li>
                        <li> <a href="/">For Schools</a></li>
                        <li> <a href="/">For Betting</a></li>
                    </ul>
                </div>
                 <div className="footer__link">
                    <ul>
                        <h4>Developers</h4>
                        <li> <a href="/">Success Rate</a></li>
                        <li> <a href="/">For Entreprenurs</a></li>
                        <li> <a href="/">For Corporates</a></li>
                        <li> <a href="/">For Fintech</a></li>
                        <li> <a href="/">For Schools</a></li>
                        <li> <a href="/">For Betting</a></li>
                    </ul>
                </div>
                 <div className="footer__link">
                    <ul className="no-margin">
                        <h4>About</h4>
                        <li> <a href="/">Success Rate</a></li>
                        <li> <a href="/">For Entreprenurs</a></li>
                        <li> <a href="/">For Corporates</a></li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer
