import React from 'react';
import logo from './logo.svg';
import './App.css';

import product, { numbers } from './math.js'

console.log(numbers.reduce(product));

// import * as math from './math.js' // combine all exports into a math object
// can be named however we like, doesn't have to be math

// console.log(math.numbers.reduce(math.sum));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
