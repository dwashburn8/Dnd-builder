import React, { Component } from "react"


class ContentButton extends Component {
    render(){
        return (
            <div id="contentOne">
            <button type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="menu-btn" onMouseDown={this.props.handleMouseDown}>Content<span className="menu-span">+</span></button>
            </div>
        )
    }
}


export default ContentButton