import React, { Component } from "react"
import GalleryButton from "../Gallery-Button/Gallery-Button"
import GalleryMenu from "../Gallery-Menu/Gallery-Menu"


class GalleryContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleMouseDown = this.handleMouseDown.bind(this)

        
    }

    handleMouseDown(event){
        event.stopPropagation();
        var span = event.target.querySelector("span")
        var elementTag = event.target.tagName
        var aria = event.target.getAttribute("aria-expanded")

        if (elementTag === "SPAN") {
            span = event.target.parentElement.querySelector("span")
            aria = event.target.parentElement.getAttribute("aria-expanded")
        }
        if (aria === "true") {
            span.style.transform = "rotate(180deg)"
            span.style.transition = "transform 0.3s ease-in-out"
            span.style.bottom = "2px"
        } else if(aria === "true" && elementTag === "SPAN"){
            span.style.transform = "rotate(180deg)"
            span.style.transition = "transform 0.3s ease-in-out"
            span.style.bottom = "2px"
        } else if (aria === "false" && elementTag === "SPAN") {
            span.style.transform = "rotate(-225deg)"
            span.style.transition = "transform 0.3s ease-in-out"
            span.style.bottom = "2px"
        }  else {
            span.style.transform = "rotate(-225deg)"
            span.style.transition = "transform 0.3s ease-in-out"
            span.style.bottom = "2px"
        }
    }


render() {
    return (
        <div className="accordian" id="accordionGallery">
        <GalleryButton handleMouseDown={this.handleMouseDown}/>
        <GalleryMenu onArrow={this.props.onArrow} handleMouseDown={this.handleMouseDown} />
        
        </div>
    )
}
}
export default GalleryContainer




