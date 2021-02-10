import React, { Component } from "react"


class Header1 extends Component {
    render(){
        return (
            <nav class="navbar navbar-expand-md navbar-light bg-light">
            <a class="navbar-brand" href="/">
                <img src="../Placeholder Images/mainLogo.png" width="250" height="60" class="d-inline-block align-top"
                    alt="" loading="lazy" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto mr-5">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Stories <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Company</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Contact</a>
                    </li>
                </ul>
    
            </div>
        </nav>
        )
    }
}


export default Header1