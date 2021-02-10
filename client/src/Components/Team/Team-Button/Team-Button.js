import React, { Component } from "react"


class TeamButton extends Component {
    render(){
        return (
            <button type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" className="menu-btn" onMouseDown={this.props.handleMouseDown}>Team<span className="menu-span">+</span></button>
        )
    }
}


export default TeamButton