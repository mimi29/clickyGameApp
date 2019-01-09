//import React, { Component } from 'react';
import React from 'react';
import Game from "./components/Game";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Game />
      </div>
    );
  }
}

export default App;
