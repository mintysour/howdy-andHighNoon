import { Link } from 'react-router-dom';
import './Start.css'; // Optional: create a CSS file for styles

import bartender from './assets/img/Bartender.png';
import mayor from './assets/img/Mayor.png';
import sherrif from './assets/img/sheriff.png';
import neighbor from './assets/img/neighbor.png';

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
    <div className="Prologue">
        <img src = {bartender} className = "Suspect-Img"></img>
        <img src = {mayor} className = "Suspect-Img"></img>
        <img src = {sherrif} className = "Suspect-Img"></img>
        <img src = {neighbor} className = "Suspect-Img"></img>
        <Link to="/bartender">
            <button style={buttonStyle}>
                Bartender
            </button>
        </Link>
        <Link to="/mayor">
            <button style={buttonStyle}>
                Mayor
            </button>
        </Link>
        <Link to="/sherrif">
        <button style={buttonStyle}>
                Sheriff
            </button>
        </Link>
        <Link to="/neighbor">
            <button style={buttonStyle}>
                Neighbor
            </button>
        </Link>
    </div>
  );
}