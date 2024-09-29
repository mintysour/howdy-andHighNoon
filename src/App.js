import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Prologue from './Prologue';
import './App.css';


const buttonStyle = {
  backgroundColor: '#613624', 
  color: 'white', 
  padding: '10px 20px', 
  border: 'none', 
  borderRadius: '5px', 
  cursor: 'pointer', 
  fontSize: '32px', 
};

function App() {
  return (
    <Router>
        <div className="App">
          <header className="App-header">
            <h1>Howdy and High Noon:</h1>
            <h2>A Western Whodunit</h2>
            <Link to="/prologue">
              <button style={buttonStyle}>
                Start Game
              </button>
            </Link>
          </header>

          {/* Define the Routes */}
          <Switch>
            <Route path="/prologue">
              <Prologue />
            </Route>
            {/* Add more routes here for other parts of the game as needed */}
          </Switch>
        </div>
      </Router>
    );
}

export default App;
