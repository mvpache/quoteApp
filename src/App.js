import React, { Component } from 'react';
import QuoteDisplay from './quote.js' ;
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Hello World
        </p>
        <QuoteDisplay />
      </div>
    );
  }
}

export default App;
