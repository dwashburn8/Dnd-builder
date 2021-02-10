import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";
import { BrowserRouter } from 'react-router-dom';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname
  );
};



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={"dwashburn8.us.auth0.com"}
        clientId={"CKNHRdIkQDWCEFZBYB67G1A6r6Ci1pes"}
        // audience={process.env.REACT_APP_AUDIENCE}
        redirectUri={window.location.origin}
        onRedirectCallback={onRedirectCallback}>
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
