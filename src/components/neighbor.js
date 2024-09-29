import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './neighbor.css';
import neighbor from './assets/img/neighbor.png';

// Associate each line with a speaker
const storyData = [
  { text: "The Neighbor is often quiet but knows a lot about the community.", speaker: "neighbor" },
  { text: "{PlayerName}: Have you seen anything unusual lately?", speaker: "neighbor" },
  { text: "Neighbor: I noticed some strange activity near Harper's house recently.", speaker: "neighbor" },
];

const characterImages = {
  neighbor: neighbor,
  player: null // No image for the player character
};

function Neighbor() {
  const location = useLocation();
  const playerName = location.state?.playerName || ''; // Retrieve the player name from location state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [hasTalkedToNeighbor, setHasTalkedToNeighbor] = useState(false); // Boolean state
  const navigate = useNavigate(); // useNavigate for routing

  const currentLine = storyData[currentTextIndex];
  const currentText = currentLine.text.replace("{PlayerName}", playerName);
  const speakerImage = characterImages[currentLine.speaker];

  // Handle click to progress the story or show choices
  const handleClick = () => {
    if (currentTextIndex < storyData.length - 1) {
      setCurrentTextIndex(currentTextIndex + 1);
    } else {
      setHasTalkedToNeighbor(true);
      navigate('/suspect', {
        state: { 
          playerName,
          hasTalkedToNeighbor: true // Update the state
        }
      });
    }
  };

  return (
    <div className="neighbor" onClick={handleClick} style={{ cursor: 'pointer', padding: '20px' }}>
      <p className="thetext">{currentText}</p>
      {speakerImage && (
        <img src={speakerImage} className="Character" alt={currentLine.speaker} />
      )}
    </div>
  );
}

export default Neighbor;
