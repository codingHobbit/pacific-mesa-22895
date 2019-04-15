import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Button from "@material-ui/core/Button";
import History from "./components/History.js";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div>
      <header className="App-header">
        <p style={{ margin: "15px", fontFamily: "sans-serif" }}>Trap Water</p>

        <Link to="/" style={{ textDecoration: "none" }}>
          <Button style={{ margin: "15px" }} variant="outlined" color="primary">
            Home
          </Button>
        </Link>

        <Link to="/history" style={{ textDecoration: "none" }}>
          <Button style={{ margin: "15px" }} color="primary" variant="outlined">
            History
          </Button>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/history" component={History} />
      </Switch>
      <footer className="App-footer">
        <p>2019-2020 | TrapWater.com</p>
      </footer>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
