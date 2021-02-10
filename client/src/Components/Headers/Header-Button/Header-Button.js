import React, { Component } from "react"


class HeaderButton extends Component {


    render(){
        return (
            <div  id="headingOne">
            <button  type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="menu-btn" onMouseDown={this.props.handleMouseDown}>Headers<span onMouseDown={this.props.handleMouseDown} className="menu-span">+</span></button>
            </div>
        )
    }
}


export default HeaderButton