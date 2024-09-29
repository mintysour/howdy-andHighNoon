import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './neighbor.css';
import neighbor from './assets/img/neighbor.png';

// Associate each line with a speaker
const storyData = [
  { text: "The neighbor, Theodore, lives next door to Detective Harper. Age: 56.", speaker: "neighbor" },
  { text: "Sheriff Justin: Huff... huff... {PlayerName}! You must follow me quickly!", speaker: "neighbor"}
];

// Map speakers to their images
const characterImages = {
  neighbor: neighbor,
  player: null // No image for the player character
};

function Neighbor() {
  const location = useLocation();
  const playerName = location.state?.playerName || ''; // Retrieve the player name from location state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const navigate = useNavigate(); // useNavigate for routing

  const currentLine = storyData[currentTextIndex];
  const currentText = currentLine.text.replace("{PlayerName}", playerName);
  const speakerImage = characterImages[currentLine.speaker];

  // Handle click to progress the story
  const handleClick = () => {
    if (currentTextIndex < storyData.length - 1) {
      setCurrentTextIndex(currentTextIndex + 1);
    }
    else {
        // If it's the last line, navigate to PrologueParty
        navigate('/suspect', { state: { playerName } });
    }
  };

  return (
    <div
      className="neighbor"
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        padding: '20px',
        height: '100vh' // Full height
      }}
    >
        <>
          <p className="thetext">{currentText}</p>

          {/* Render the character's image if available */}
          {speakerImage && (
            <img src={speakerImage} className="Character" alt={currentLine.speaker} />
          )}
        </>
    </div>
  );
}

export default Neighbor;