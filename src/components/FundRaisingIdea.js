import React, { Component } from 'react';

import "./FundRaisingIdea.css";
var FundRaisingIdea = () => (<div className="FundRaisingIdea">
    <h2>Fundraising Idea</h2>
    <ul>
        <li>
            <img src="/images/ideas_15_16.png" />
            <br/>disaster relief 
        </li>  
        <li><img src="/images/ideas_15_09.png" /><br/>health and medical </li>  
        <li><img src="/images/ideas_15_11.png" /><br/>cancer </li>  
        <li><img src="/images/ideas_15_19.png" /><br/>volunteer </li>  
        <li><img src="/images/ideas_15_13.png" /><br/>challenges</li>  
        <li><img src="/images/ideas_15_22.png" /><br/>in memory</li>  
    </ul>

    <button>show more</button>
</div>);

export default FundRaisingIdea;