import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home.js";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div>
      <header className="App-header">
        <p style={{ marginLeft: "20px", fontFamily: "sans-serif" }}>
          Trap Water
        </p>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/list">History</Link>
            </li>
          </ul>
        </nav> */}
      </header>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/list" component={History} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
