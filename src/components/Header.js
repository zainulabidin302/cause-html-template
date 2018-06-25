import React, { Component } from 'react';
import './Header.css';
import FontAwesome from 'react-fontawesome';
var Header = () => (
    <div className="Header">
        <div className="logo">
            <img src="/images/logo-top.PNG" />
        </div>
        
        <ul className="menu main-menu">
            <li> <a href="#">fundraise</a> </li>
            <li> <a href="#">fundraising ideas</a> </li>
            <li> <a href="#">for partners</a> </li>
        </ul>

        <ul className="menu login-menu">
            <li>{'\u00A0'}<a href="#"> help </a> </li>
            <li> | {'\u00A0'}<a href="#"> login </a> </li>
            <li>| {'\u00A0'} <FontAwesome name='search' /> </li>
        </ul>

        <div className="bars">
            <FontAwesome name='bars' />
        </div>

    </div>
    );

export default Header;