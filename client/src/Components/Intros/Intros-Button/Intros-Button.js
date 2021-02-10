import React, { Component } from "react"


class IntrosButton extends Component {
    render(){
        return (
            <div id="IntroOne">
            <button type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="menu-btn" onMouseDown={this.props.handleMouseDown}>Intro<span className="menu-span">+</span></button>
            </div>
        )
    }
}


export default IntrosButton