import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="sing-in" onClick={() => loginWithRedirect()}>Sign In</button>;
};

export default LoginButton;