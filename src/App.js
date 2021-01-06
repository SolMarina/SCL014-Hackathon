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

      <BottomBar />
    </div>
  );
}

export default App;
