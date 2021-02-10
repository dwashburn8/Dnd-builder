import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ContainerTabs from "./Components/Tabs/Tabs"
import FileUpload from "./Components/File-Upload/File-Upload"
import ContactContainer from "./Components/Contact/Contact-Container/Contact-Container"
import ContentContainer from "./Components/Content/Content-Container/Content-Container"
import Features from "./Components/Featues/Features-Container/Features-Container"
import Gallery from "./Components/Gallery/Gallery-Container/Gallery-Container"
import Pricing from "./Components/Pricing/Pricing-Container/Pricing-Container"
import Headers from "./Components/Headers/Header-Container/Header-Container"
import Testimonials from "./Components/Testimonials/Testimonials-Container/Testimonials-Container"
import Footers from "./Components/Footers/Footer-Container/Footer-Container"
import Team from "./Components/Team/Team-Container/Team-Container"
import Intros from "./Components/Intros/Intros-Container/Intros-Container"
import Header from "./Components/Header/Header"
import LoginButton from "./Components/LoginButton/LoginButton";

function Copy (){
    const { user } = useAuth0();
    const { name, email } = user;
console.log(email);


    const onUpload = (event) => {
        this.setState({images:EventTarget})
    }
    


        return (
            <>
                <Header name = {name} email={email}/>
                <div id="wrapper" >
                    <div className="container1 fixed">
                    <img src="https://www.cybermark.com/wp-content/uploads/2018/08/mainLogo.png" height="45" alt="cybermark logo"/>
                    <br></br>
                    <h5 className="text-center content-blocks">Content Blocks</h5>
                        <Headers />
                        <Intros />
                        <ContentContainer />
                        <Gallery />
                        <Features />
                        <Team/>
                        <Pricing />
                        <Testimonials/>
                        <ContactContainer />
                        <Footers />
                        <div>
                        <FileUpload name={name} email={email} onUpload={onUpload} />
                    </div>
                    </div>


                    <div id="container2">
                    <ContainerTabs name = {name} email={email} />

                    </div>

                    
                </div>
            </>
        );
    }



export default Copy;



    // handleAddPage() {
    //     var navLink = document.createElement("LI");
    //     var homePage = document.getElementById("homePage");
    //     var pageTitle = prompt("What would you like to name this page?", "Services Page");
    //     navLink.classList.add("nav-item");
    //     navLink.innerHTML = '<button onClick={this.handleClassSwitch} id="tab-tab2" role="tab" aria-selected="true" aria-controls="tabpanel-tab2" class="tab-link" style="">' + pageTitle + '</button>';
    //     navLink.classList.add("new-link")
    //     // navLink.style.padding="8px 0px 0px 10px";
    //     var count = homePage.childNodes.length;
    //     homePage.insertBefore(navLink, homePage.childNodes[count - 1])
    //     console.log(count);
    // }