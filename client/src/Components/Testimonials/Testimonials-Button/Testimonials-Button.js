import React, { Component } from "react"


class TestimonialsButton extends Component {
    render(){
        return (
            <button type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight" className="menu-btn" onMouseDown={this.props.handleMouseDown}>Testimonials<span className="menu-span">+</span></button>
        )
    }
}


export default TestimonialsButton