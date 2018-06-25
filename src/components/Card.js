import React, { Component } from 'react';
import "./Card.css";
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
                    <div>
                        {this.props.title}
                    </div>
                    <div>
                        {this.props.amount}
                    </div>

                    <div>
                        {this.props.goal}
                    </div>
                    <div>
                        {this.props.goal}
                    </div>
        </div>);
    }
}

export default Card;

