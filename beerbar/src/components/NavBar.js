import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";


export default class NavBar extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    };


    render() {
        return (
            <nav className={this.props.getClass} ref="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            id="about"
                            to="About"
                            spy={true}
                            smooth={true}
                            cursor="pointer"
                            offset={0}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            id="photos"
                            to="Photos"
                            spy={true}
                            smooth={true}
                            cursor="pointer"
                            offset={0}
                            duration={500}
                        >
                            Photos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            id="menu"
                            to="Menu"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            Menu
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            id="maps"
                            to="Maps"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            Maps
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            id="contact"
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

        );
    }
}