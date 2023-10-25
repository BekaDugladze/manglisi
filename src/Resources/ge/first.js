import React, { Component } from "react";
import './css/first.css';
import logo from '../img/logo.png';
import video from '../img/mgl.mp4';
import {NavLink} from 'react-router-dom'

export default class First extends Component {
    render() {
        return(
            <div className="first">
            <div className="first-main">
                <img src={logo} alt="Manglisi Inn" />
                <ul>
                    <li><a href="#abus">ჩვენ შესახებ</a></li>
                    <li><a href="#select">მიმდინარე პროექტები</a></li>
                    <li><a href="#kontakti">კონტაქტი</a></li>
                </ul>
                <div className="lang">
                    <NavLink to='/' id="ge" style={{color: 'white', background: '#486243'}}>ქარ</NavLink>
                    <NavLink to='/en' id="en" style={{color: '#486243', background: 'white'}}>ENG</NavLink>
                </div>
            </div>
            <video id="video" src={video} autoPlay loop muted onClick={(event) => {event.preventDefault()} onContextMenu={(event) => {event.preventDefault()}}>video isn't loaded</video>
            </div>
        )
    }
}
