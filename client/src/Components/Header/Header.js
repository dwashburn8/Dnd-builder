import React from "react"
import "./Header.css"
import LogoutButton from "../LogoutButton/LogoutButton"
function Header (props){


    return (
        
        <nav className="navbar navbar-light primary-color">

    {/* <h3 className="text-center">Hello {props.name}</h3> */}
        <LogoutButton/>
      </nav>
      
    )
}

export default Header