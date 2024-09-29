import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './mayor.css';
import mayor from './assets/img/Mayor.png';

// Associate each line with a speaker
const storyData = [
  { text: "The Mayor is known for being ambitious and often in the public eye.", speaker: "mayor" },
  { text: "{PlayerName}: What can you tell me about Detective Harper?", speaker: "mayor" },
  { text: "Mayor: Harper was a respected officer. She had a lot of enemies, though.", speaker: "mayor" },
];

const characterImages = {
  mayor: mayor,
  player: null // No image for the player character
};

function Mayor() {
  const location = useLocation();
  const playerName = location.state?.playerName || ''; // Retrieve the player name from location state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [hasTalkedToMayor, setHasTalkedToMayor] = useState(false); // Boolean state

  const currentLine = storyData[currentTextIndex];
  const currentText = currentLine.text.replace("{PlayerName}", playerName);
  const speakerImage = characterImages[currentLine.speaker];

  // Handle click to progress the story or show choices
  const handleClick = () => {
    if (currentTextIndex < storyData.length - 1) {
      setCurrentTextIndex(currentTextIndex + 1);
    } else {
      setHasTalkedToMayor(true);
      navigate('/suspect', {
        state: { 
          playerName,
          hasTalkedToMayor: true // Update the state
        }
      });
    }
  };

  return (
    <div className="mayor" onClick={handleClick} style={{ cursor: 'pointer', padding: '20px' }}>
      <p className="thetext">{currentText}</p>
      {speakerImage && (
        <img src={speakerImage} className="Character" alt={currentLine.speaker} />
      )}
    </div>
  );
}

export default Mayor;

