import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Copy from "../../Copy";
import Guest from "../Guest/Guest"

const Home = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <>
            {isAuthenticated ? <Copy user={user}/> : <Guest />}
        </>
    );
};

export default Home;