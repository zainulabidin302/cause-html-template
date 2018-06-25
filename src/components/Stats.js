import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import "./Stats.css";

var Stats = () => (<div className="Stats">
    <h2>
        Fundraising and crowdfunding for a person, charity <br/> or cause that matters to you.
    </h2>

    <div className="stat">     
        <img src="/images/icons_09.png" /> 
        <h2>207,097 <br/><small>members</small></h2> 
    </div>
    
    <div className="stat">
    <img src="/images/icons_11.png" />
    <h2>17,469 <br/><small>causes</small></h2>
    </div>

     <div className="stat">
     <img src="/images/icons_13.png" />
         <h2>$40 million+ <br/><small>raised</small></h2> <br/>
     </div>
    
</div>);

export default Stats;