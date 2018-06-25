import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import "./Stats.css";

var Stats = () => (<div className="Stats">
    <h2>
        Fundraising and crowdfunding for a person, charity <br/> or cause that matters to you.
    </h2>
    <div className="stat">     
        <FontAwesome name='user-circle' size="2x" /> 
        <h2>207,097</h2> <br/>members
    </div>
    
    <div className="stat">
        <FontAwesome name='user-circle' size="2x" /> 
        <h2>207,097</h2> <br/>causes
    </div>

     <div className="stat">
        <FontAwesome name='heart' size="2x" /> 
        <h2>17,496</h2> <br/>raised
     </div>
    
</div>);

export default Stats;