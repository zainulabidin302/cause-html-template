import React, { Component } from 'react';
import "./Card.css";
import Bar from './Bar'
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (<div className="Card">
                    <div>
                        <img style={{width: "100%"}} src={"/images/" + this.props.image} />
                    </div>
                    <div className="title">
                        {this.props.title}
                    </div>
                    <div>
                        <Bar complete={this.props.amount} total={this.props.goal} label={"$" + this.props.amount}  />
                    </div>
                    <div className="goals-and-donation">
                        <div>
                            {this.props.goal} <b>donations</b>
                        </div>
                        <div>
                        Goal <b>${this.props.goal} </b>
                        </div>
                    </div>
        </div>);
    }
}

export default Card;

