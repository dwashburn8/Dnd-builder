import React, { Component } from "react"


class ContactButton extends Component {
    render(){
        return (
            <button type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine" className="menu-btn" onMouseDown={this.props.handleMouseDown}>Contact<span className="menu-span">+</span></button>
        )
    }
}


export default ContactButton