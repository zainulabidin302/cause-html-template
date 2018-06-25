import React, { Component } from 'react';

import "./FundRaisingIdea.css";
var FundRaisingIdea = () => (<div className="FundRaisingIdea">
    <h2>Fundraising Idea</h2>
    <ul>
        <li>
            <img src="/images/ideas_15_16.png" />
            <br/>disaster relief 
        </li>  
        <li><img src="/images/ideas_15_09.png" /><br/><div class="text">health and medical</div> </li>  
        <li><img src="/images/ideas_15_11.png" /><br/><div class="text">cancer</div> </li>  
        <li><img src="/images/ideas_15_19.png" /><br/><div class="text">volunteer</div> </li>  
        <li><img src="/images/ideas_15_13.png" /><br/><div class="text">challenges</div></li>  
        <li><img src="/images/ideas_15_22.png" /><br/><div class="text">in memory</div></li>  
    </ul>

    <button>show more</button>
</div>);

export default FundRaisingIdea;