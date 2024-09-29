import { Link } from 'react-router-dom';
import './Start.css'; // Optional: create a CSS file for styles

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

function Start() {
  return (
    <header className="App-header">
      <img src = {logo} className = "Start-logo"></img>
      <Link to="/prologue">
        <button style={buttonStyle}>
          Start Game
        </button>
      </Link>
    </header>
  );
}

export default Start;