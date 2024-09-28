import { React, useEffect, useState } from "react";
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
      <div className="App">
        <header className="App-header">
        <h1>Howdy and High Noon:</h1>
        <h2>A Western Whodunit </h2>
        <button style = {buttonStyle}>
          Start Game
        </button>
        </header>
      </div>
  );
}
export default App;
