import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './whodunnit.css';

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

function Whodunnit() {
  const navigate = useNavigate(); // Hook to handle navigation
  const location = useLocation();
  const playerName = location.state?.playerName || ''; // Retrieve the player name from location state


  return (
    <div className="whodunnit">
      <div className="Suspect-item-box">
        <div className="TextBox">
          <h1>Who do you think is guilty?</h1>
        </div>
        <div className="Suspect-row">
          <div className="Suspect-item">
            <img src={bartender} className="Suspect-Img" alt="Bartender" />
            {/* Update the onClick to be a function */}
            <button style={buttonStyle} onClick={() => navigate('/badending', { state: { playerName } })}>Bartender</button>
          </div>

          <div className="Suspect-item">
            <img src={mayor} className="Suspect-Img" alt="Mayor" />
            {/* Update the onClick to be a function */}
            <button style={buttonStyle} onClick={() => navigate('/goodending',  { state: { playerName } })}>Mayor</button>
          </div>

          <div className="Suspect-item">
            <img src={sheriff} className="Suspect-Img" alt="Sheriff" />
            {/* Update the onClick to be a function */}
            <button style={buttonStyle} onClick={() => navigate('/badending', { state: { playerName } })}>Sheriff</button>
          </div>

          <div className="Suspect-item">
            <img src={neighbor} className="Suspect-Img" alt="Neighbor" />
            {/* Update the onClick to be a function */}
            <button style={buttonStyle} onClick={() => navigate('/badending', { state: { playerName } })}>Neighbor</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whodunnit;
