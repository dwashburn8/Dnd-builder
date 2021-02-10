import React, { Component } from "react"


class FeaturesButton extends Component {
    render(){
        return (
            <button type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" className="menu-btn" onMouseDown={this.props.handleMouseDown}>Features<span className="menu-span">+</span></button>
        )
    }
}


export default FeaturesButton