import Copy from "./Copy"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home"

// import UserProvided from "./providers/UserProvider"
// import Application from "./Application";


function App() {
  return (

    <Router>

      <Route exact path="/" component={Home} />
      <Route exact path="/react" component={Copy} />



    </Router>  );
}

export default App;
