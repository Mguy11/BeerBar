import React, { Component } from 'react'
import headerImage from '../images/Beerbar-Header.jpg'

import '../App.css';

export default class NavBar extends Component {

    render() {
        return (
            <div className="header" ref="innerHeader">
                <img className="headerImage center"  src={headerImage} alt="Header-BeerBar"/>
            </div>
        );
    }
}