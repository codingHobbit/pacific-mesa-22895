import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <p style={{marginLeft: '20px', fontFamily: 'sans-serif'}}>
            Trap Water
          </p>
        </header>
        <div style={{textAlign: 'center'}}>
        <Home />
        </div>
        <footer className="App-footer">
          <p>
            2019-2010 |  TrapWater.com
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
