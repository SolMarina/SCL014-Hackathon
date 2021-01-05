import React from 'react';
import './App.css';
import BottomBar from './Components/BottomBar';
import NavBar from './Components/NavBar.js';
import GanaView from './Views/GanaView';

function App() {
  return (
    <div className="App">
      
        <NavBar />
        <GanaView />
        <p>
          Winner Team!
        </p>
        <a
          className="App-link"
          href="https://www.somosmach.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Too MACH.
        </a>
        <h1>Hola</h1>
        <h2>Hola</h2>
        <h3>Hola</h3>
        <h4>Hola</h4>
        
      <BottomBar />
    </div>
  );
}

export default App;
