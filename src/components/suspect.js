import { Link } from 'react-router-dom';
import './suspect.css'; // Optional: create a CSS file for styles

import bartender from './assets/img/Bartender.png';
import mayor from './assets/img/Mayor.png';
import sheriff from './assets/img/sherrif.png';
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

function Suspect() {
  return (
    <div className="Suspect">
        <img src={bartender} className="Suspect-Img" alt="Bartender" />
        <img src={mayor} className="Suspect-Img" alt="Mayor" />
        <img src={sheriff} className="Suspect-Img" alt="Sheriff" />
        <img src={neighbor} className="Suspect-Img" alt="Neighbor" />
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
        <Link to="/sheriff">
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

export default Suspect;