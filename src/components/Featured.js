import React, { Component } from 'react';
import Card from './Card'

import './Featured.css'
class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cards: [{
                id: 1,
                title: "Ricardo's journey to Awsome Health",
                amount: 14155,
                donations: 91,
                goal: 15000,
                image: 'card-item.png'
            }, {
                id: 2,
                title: "Ricardo's journey to Awsome Health",
                amount: 14155,
                donations: 91,
                goal: 15000,
                image: 'card-item.png'
            }, {
                id: 3,
                title: "Ricardo's journey to Awsome Health",
                amount: 14155,
                donations: 91,
                goal: 15000,
                image: 'card-item.png'
            }, {
                id: 4,
                title: "Ricardo's journey to Awsome Health",
                amount: 14155,
                donations: 91,
                goal: 15000,
                image: 'card-item.png'
            }, {
                id: 5,
                title: "Ricardo's journey to Awsome Health",
                amount: 14155,
                donations: 91,
                goal: 15000,
                image: 'card-item.png'
            }, {
                id: 6,
                title: "Ricardo's journey to Awsome Health",
                amount: 14155,
                donations: 91,
                goal: 15000,
                image: 'card-item.png'
            }]
        };
    }

    render() {
        return (
            <div className="Featured">
                <h1>Featured Compaigns</h1>
                
                <div className="cards-container">
                    
                    {
                        this.state.cards.map(
                            card => (<div className="thirds">
                                        <Card key={card.id} {...card} />
                                    </div>)
                        )
                    }
                    
                </div>
                <button>Start a Compaign</button>
            </div>
        );
    }
}

export default Featured;