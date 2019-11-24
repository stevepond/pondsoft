import React from 'react';
import logo from './logo.png';
import resume from './resume-icon-16.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://drive.google.com/open?id=0B4YjDL0Rk3RYM1NZRkJCS0RTQ1NnNjNaMUNQYklYeGpNQnpz"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={resume} className="App-logo" alt="logo" />
        </a>
      </header>
    </div>
  );
}

export default App;
