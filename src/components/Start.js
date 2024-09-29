import { Link } from 'react-router-dom';
import './Start.css'; // Optional: create a CSS file for styles

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
      <h1>Howdy and High Noon:</h1>
      <h2>A Western Whodunit </h2>
      <Link to="/prologue">
        <button style={buttonStyle}>
          Start Game
        </button>
      </Link>
    </header>
  );
}

export default Start;