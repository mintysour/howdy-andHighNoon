import { React, useEffect, useState } from "react";
import './App.css';
import logo from './assets/img/logo.png';

const buttonStyle = {
  backgroundColor: '#613624', 
  color: 'white', 
  padding: '10px 20px', 
  border: 'none', 
  borderRadius: '5px', 
  cursor: 'pointer', 
  fontSize: '32px', 
};

const handleClick = () => {
  window.location.href = '/start'; // navigates to beginning of game
};


function App() {
  return (
      <div className="App">
        <header className="App-header">
        <img src = {logo} className = "App-logo"></img>
        <button style = {buttonStyle} onClick = {handleClick}>
          Start Game
        </button>
        </header>
      </div>
  );
}
export default App;