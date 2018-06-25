import React, { Component } from 'react';
import "./Footer.css";
import FontAwsome from 'react-fontawesome';

var Footer = () => (<div className="Footer">

    <div className="inner">
    <div>
    <h3>FOR YOU</h3>
        <ul>
            <li>crowdfund for a person</li>
            <li>fundraise for a charity</li>
            <li>fundraising ideas</li>
            <li>find a charity</li>
            <li>charity events</li>
            <li>pledge your birthday</li>
            <li>girt cards & vouchers</li>
            <li>regular & portfolio giving</li>
        </ul>
    </div>
    <div>
    <h3>FOR ORGANIZATIONS</h3>
        <ul>
            <li>charities</li>
            <li>event managers</li>
            <li>corporates</li>
            <li>schools</li>
            <li>clubs</li>
            <li>product range</li>
        </ul>
    </div>
    <div>
        <h3>ABOUT</h3>
        <ul>
                <li>about</li>
                <li>help + FAQs</li>
                <li>blog & press</li>
        </ul>
    </div>
    <div className="subscribe">
        <h2 >Follow inspiring cause with mycause</h2>
        <input type="text" />
        <button>Subscribe</button>

        </div>
    </div>
</div>);

export default Footer;
