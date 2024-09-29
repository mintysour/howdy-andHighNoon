import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './suspect.css';

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

const culpritButtonStyle = {
  backgroundColor: '#8B0000', // A bold red color to emphasize the button
  color: 'white',
  padding: '15px 30px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '28px',
  marginTop: '20px',
};

function Suspect() {
  const [hasTalkedToBartender, setHasTalkedToBartender] = useState(false);
  const [hasTalkedToMayor, setHasTalkedToMayor] = useState(false);
  const [hasTalkedToSheriff, setHasTalkedToSheriff] = useState(false);
  const [hasTalkedToNeighbor, setHasTalkedToNeighbor] = useState(false);
  
  const navigate = useNavigate(); // Hook to handle navigation
  const location = useLocation();
  const playerName = location.state?.playerName || ''; // Retrieve the player name from location state

  // Check the state on mount
  useEffect(() => {
    const state = location.state;
    if (state) {
      if (state.hasTalkedToBartender) setHasTalkedToBartender(true);
      if (state.hasTalkedToMayor) setHasTalkedToMayor(true);
      if (state.hasTalkedToSheriff) setHasTalkedToSheriff(true);
      if (state.hasTalkedToNeighbor) setHasTalkedToNeighbor(true);
    }
  }, [location.state]);

  // Function to check if the player has talked to all characters
  const checkIfAllTalked = () => {
    if (hasTalkedToBartender && hasTalkedToMayor && hasTalkedToSheriff && hasTalkedToNeighbor) {
      navigate('/whodunnit'); // Navigate to Whodunnit page
    }
  };

  // Monitor state changes to check if all characters have been talked to
  useEffect(() => {
    checkIfAllTalked();
  }, [hasTalkedToBartender, hasTalkedToMayor, hasTalkedToSheriff, hasTalkedToNeighbor]); // Run this when any hasTalkedTo state changes

  // Common function to handle talking to characters and navigating
  const handleTalkTo = (setFunction, path) => {
    setFunction(true); // Mark the character as talked to
    navigate(path, {
      state: {
        playerName, // Pass the playerName to the next component
        hasTalkedToBartender,
        hasTalkedToMayor,
        hasTalkedToSheriff,
        hasTalkedToNeighbor,
      },
    });
  };

  // Navigate to Whodunnit when the player clicks "I know the culprit!"
  const handleCulpritButton = () => {
    navigate('/whodunnit', {
      state: {
        playerName, // Pass the playerName to the next component
        hasTalkedToBartender,
        hasTalkedToMayor,
        hasTalkedToSheriff,
        hasTalkedToNeighbor,
      },
    });
  };

  return (
    <div className="Suspect">
        <div className="Suspect-item-box">
            <div className="TextBox">
                <h1>Who do you want to talk to?</h1>
            </div>
            <div className="Suspect-row">
                <div className="Suspect-item">
                    <img src={bartender} className="Suspect-Img" alt="Bartender" />
                    <button style={buttonStyle} onClick={() => handleTalkTo(setHasTalkedToBartender, '/bartender')}>Bartender</button>
                </div>

                <div className="Suspect-item">
                    <img src={mayor} className="Suspect-Img" alt="Mayor" />
                    <button style={buttonStyle} onClick={() => handleTalkTo(setHasTalkedToMayor, '/mayor')}>Mayor</button>
                </div>

                <div className="Suspect-item">
                    <img src={sheriff} className="Suspect-Img" alt="Sheriff" />
                    <button style={buttonStyle} onClick={() => handleTalkTo(setHasTalkedToSheriff, '/sheriff')}>Sheriff</button>
                </div>

                <div className="Suspect-item">
                    <img src={neighbor} className="Suspect-Img" alt="Neighbor" />
                    <button style={buttonStyle} onClick={() => handleTalkTo(setHasTalkedToNeighbor, '/neighbor')}>Neighbor</button>
                </div>
            </div>

            {/* "I know the culprit!" button */}
            <div className="CulpritButton">
                <button style={culpritButtonStyle} onClick={handleCulpritButton}>
                    I know the culprit!
                </button>
            </div>
        </div>
    </div>
  );
}

export default Suspect;
