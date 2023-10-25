import React, { Component } from "react";
import './css/first.css';
import logo from '../img/logo.png';
import video from '../img/mgl.mp4';
import { NavLink } from "react-router-dom";

export default class First extends Component {
    render() {
        return(
            <div className="first">
            <div className="first-main">
                <img src={logo} alt="Manglisi Inn" />
                <ul>
                    <li><a href="#abus">About Us</a></li>
                    <li><a href="#select">Our Projects</a></li>
                    <li><a href="#kontakti">Contact</a></li>
                </ul>
                <div className="lang">
                    <NavLink to='/' id="ge" style={{color: '#486243', background: 'white'}}>ქარ</NavLink>
                    <NavLink to='/en' id="en" style={{color: 'white', background: '#486243'}}>ENG</NavLink>
                </div>
            </div>
            <video id="video" src={video} autoPlay loop muted onContextMenu={(event) => {event.preventDefault()}}>video isn't loaded</video>
            </div>
        )
    }
}