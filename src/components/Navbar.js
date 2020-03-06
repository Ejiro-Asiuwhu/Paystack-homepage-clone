import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg'
import NigFlag from '../assets/images/Nigeria_flag_small.jpg';
import './Navbar.css'
class Navbar extends Component {
    render() {
        return (
            <nav className="Nav__main d-flex justify-content-between align-items-center">
                <div className="nav__item-left d-flex align-items-center">
                    <div className="nav__logo mr-5">
                       <img src={logo} alt=""/>
                    </div>
                    <div className="nav__item-link nav__item">
                        <ul className="d-flex align-items-center">
                            <li><NavLink to="/">Why Paystack</NavLink></li>
                            <li><NavLink to="/">Customers</NavLink></li>
                            <li><NavLink to="/">Pricing</NavLink></li>
                            <li><NavLink to="/">Learn</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="nav__item-right nav__item-link nav__item">
                    <ul className="d-flex align-items-center">
                        <li><NavLink to="/">Developers</NavLink></li>
                        <li><NavLink to="/">Support</NavLink></li>
                        <li><NavLink to="/">Login</NavLink></li>
                        <li><NavLink className="custom-btn" to="/">Create free account</NavLink></li>
                        <li><NavLink to="/"><span><img className="flag" src={NigFlag} alt="Nigeria"/></span></NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;

