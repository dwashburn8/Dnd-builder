import React from "react";
import LoginButton from "../LoginButton/LoginButton.js";
import "./Guest.css"

// import { useAuth0 } from "@auth0/auth0-react";


const Guest = () => {
  // const { user, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="guest-wrapper">
        <div className="content-container">
          <img src='./logo1.png' />
          <h1>CyberMark Drag and Drop</h1>
          <LoginButton />
        </div>
      </div>
    </>
  )
}

export default Guest;