import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./Home"
import About from "./About"
import UserProfile from "./UserProfile"
import NoMatch from "./NoMatch";

//function Home() {
  //return <p>Home</p>;
//}

//function About() {
  //return <p>About</p>;
//}

function App() {
  return (
    <Router>
      <div className="App">
        <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        </div>
        {Array(10)
          .fill()
          .map((ignoredValue, index) => index + 1)
          .map((id) => (
            <div key={id}>
              <Link to={`/user/${id}`}>User {id}</Link>
            </div>
          ))}
        <Switch>
          // by convention `/` is listed first with exact={true}
          <Route exact={true} path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/user/:userId">
            <UserProfile />
          </Route>

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;