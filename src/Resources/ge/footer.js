import React, { Component } from "react";
import './css/footer.css';
import logo from '../img/logo.png';

export default class Footer extends Component{
    render(){
        return(
            <div id="kontakti">
                <div class="kontakti">
                    <div>
                        <h1>კონტაქტი</h1>
                        <p>ტელ: <a href="tel:+995595011801">595 01 18 01</a></p>
                        <p>E-Mail: <a href="mailto: manglisinn@gmail.com">manglisinn@gmail.com</a></p>
                        <p>მის: <a href="#map">დაბა მანგლისი, განთიადის ქუჩა</a></p>
                    </div>
                <img src={logo} alt="manglisi Inn" />
                </div>
                <p id="me">@ 2023 <a href="https://www.linkedin.com/in/beqa-dugladze-266374268/" target="_blank" rel="noreferrer">ბექა დუგლაძე</a></p>
            </div>
        )
    }
}
