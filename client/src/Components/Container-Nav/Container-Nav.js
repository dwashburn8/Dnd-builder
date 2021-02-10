import React from "react";
import "./Container-Nav.css"
import { NavLink } from "react-router-dom"
import { TabLink } from "react-tabs-redux";


class ContainerNav extends React.Component {
    
    
    handleAddPage () {
    var navLink = document.createElement("LI");
    var homePage = document.getElementById("homePage");
    var pageTitle = prompt("What would you like to name this page?", "Services Page");
    navLink.classList.add("nav-item");
    navLink.innerHTML='<a href="/container2" exact className="nav-link"><h5>' + pageTitle + '</h5></a>';
    navLink.classList.add("new-link")
    // navLink.style.padding="8px 0px 0px 10px";
    var count = homePage.childNodes.length;    
    homePage.insertBefore(navLink, homePage.childNodes[count -1])
    console.log(count);
}
render(){
    return (


<div id="navbarNav">
    <ul className="navbar-nav navbar-center" id="homePage">
        <li className="nav-item" >
            <TabLink to="tab1">Home Page</TabLink>
        </li>
        <li className="nav-item" >
            <TabLink to="tab2">Service Page</TabLink>
        </li>
        <li className="nav-item">
            <button onClick={this.handleAddPage}  className="btn container-nav"> +</button>
        </li>
        
    </ul>
</div>

    )
}
}
export default ContainerNav