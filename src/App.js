import React from 'react';
import './App.css';
import BottomBar from './Componentes/BottomBar';
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
        <h1>Hola</h1>
        <h2>Hola</h2>
        <h3>Hola</h3>
        <h4>Hola</h4>
        <p>HTML5 es el nuevo lenguaje de Internet, sin embargo hay 
          desarrolladores web que siguen usando lenguajes de hipertexto 
          anticuados, como HTML 4.01 o XHTML, que precisan de numerosos 
          plugins externos que ponen en peligro tanto la compatibilidad 
          como la seguridad de las páginas web. Al contrario, HTML5 hace 
          posible la directa integración de elementos multimed</p>
          <p>HTML5 es el nuevo lenguaje de Internet, sin embargo hay 
          desarrolladores web que siguen usando lenguajes de hipertexto 
          anticuados, como HTML 4.01 o XHTML, que precisan de numerosos 
          plugins externos que ponen en peligro tanto la compatibilidad 
          como la seguridad de las páginas web. Al contrario, HTML5 hace 
          posible la directa integración de elementos multimed</p>

      <BottomBar />
    </div>
  );
}

export default App;
