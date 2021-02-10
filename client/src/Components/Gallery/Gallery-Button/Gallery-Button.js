import React, { Component } from "react"


class GalleryButton extends Component {
    render(){
        return (
            <div id="galleryOne">
            <button type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" className="menu-btn" onMouseDown={this.props.handleMouseDown}>Gallery<span className="menu-span">+</span></button>
            </div>
        )
    }
}


export default GalleryButton