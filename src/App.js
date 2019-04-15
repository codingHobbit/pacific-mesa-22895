import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ textAlign: "center" }}>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
