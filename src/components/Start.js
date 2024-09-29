import { Link } from 'react-router-dom';
import './Start.css'; // Optional: create a CSS file for styles

import logo from './assets/img/logo.png';

const buttonStyle = {
  backgroundColor: '#613624', 
  color: 'white', 
  padding: '40px 50px', 
  border: 'none', 
  borderRadius: '18px', 
  cursor: 'pointer', 
  fontSize: '52px', 
};

function Start() {
  return (
    <header className="App-header">
      <img src = {logo} className = "Start-logo"></img>
      <Link to="/prologue">
        <button style={buttonStyle}>
          Start Investigating
        </button>
      </Link>
    </header>
  );
}

export default Start;