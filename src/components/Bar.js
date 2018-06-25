import React, { Component } from 'react';
import "./Bar.css";

class Bar extends Component {
    state = {  }

    render() {
       let perc = ( this.props.complete / this.props.total) * 100;
       console.log(perc)
        return (
            <div className="Bar">
                <div style={{"width": perc  + '%'}} className="inner" >
                    {this.props.label}
                </div>
            </div>
        );
    }
}

export default Bar;