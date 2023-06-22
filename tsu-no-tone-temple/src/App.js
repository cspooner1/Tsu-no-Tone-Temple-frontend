import React from 'react';
import Homepage from './Homepage';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './About';
import Workout from './Workout';
import AnimeWorkout from './AnimeWorkout';

function App() {

  return (
    <div className="App" id='all'>
      <img src='./images/logo-title.png' id='logo' style={{ borderStyle: 'hidden hidden solid hidden' }}
        />
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/anime-workout' element={<AnimeWorkout />} />
            <Route path='/workout' element={<Workout />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;