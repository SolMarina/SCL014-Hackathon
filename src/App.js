import React from 'react';
import './App.css';
import NavBar from './Componentes/NavBar.js';

function App() {
  return (
    <div className="App">
      
        <NavBar />
        
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
      
    </div>
  );
}

export default App;
