import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png'

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="nav__item-left">
                    <div className="nav__logo">
                        <img src={require('')} alt="logo"/>
                    </div>
                    <div className="nav__item-link nav__item">
                        <ul>
                            <li><NavLink to="/">Why Paystack</NavLink></li>
                            <li><NavLink to="/">Customers</NavLink></li>
                            <li><NavLink to="/">Pricing</NavLink></li>
                            <li><NavLink to="/">Learn</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="nav__item-right nav__item-link nav__item">
                    <ul>
                        <li><NavLink to="/">Developers</NavLink></li>
                        <li><NavLink to="/">Support</NavLink></li>
                        <li><NavLink to="/">Login</NavLink></li>
                        <li><NavLink className="nav-btn" to="/">Create free account</NavLink></li>
                        <li><NavLink to="/"><span></span></NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;

