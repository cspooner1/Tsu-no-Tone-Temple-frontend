import React from 'react';
import Homepage from './Homepage';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='./images/logo-title.png' id='logo'/>
        <Homepage />
      </header>
    </div>
  );
}

export default App;