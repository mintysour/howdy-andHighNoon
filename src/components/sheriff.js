import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './sheriff.css';
import sheriff from './assets/img/sherrif.png';

// Associate each line with a speaker
const storyData = [
  { text: "The Sheriff is a tough but fair officer in charge of the investigation.", speaker: "sheriff" },
  { text: "{PlayerName}: What can you tell me about the case?", speaker: "sheriff" },
  { text: "Sheriff: We're doing everything we can. Harper had some shady dealings.", speaker: "sheriff" },
];

const characterImages = {
  sheriff: sheriff,
  player: null // No image for the player character
};

function Sheriff() {
  const location = useLocation();
  const playerName = location.state?.playerName || ''; // Retrieve the player name from location state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [hasTalkedToSheriff, setHasTalkedToSheriff] = useState(false); // Boolean state
  const navigate = useNavigate(); // useNavigate for routing

  const currentLine = storyData[currentTextIndex];
  const currentText = currentLine.text.replace("{PlayerName}", playerName);
  const speakerImage = characterImages[currentLine.speaker];

  // Handle click to progress the story or show choices
  const handleClick = () => {
    if (currentTextIndex < storyData.length - 1) {
      setCurrentTextIndex(currentTextIndex + 1);
    } else {
      setHasTalkedToSheriff(true);
      navigate('/suspect', {
        state: { 
          playerName,
          hasTalkedToSheriff: true // Update the state
        }
      });
    }
  };

  return (
    <div className="sheriff" onClick={handleClick} style={{ cursor: 'pointer', padding: '20px' }}>
      <p className="thetext">{currentText}</p>
      {speakerImage && (
        <img src={speakerImage} className="Character" alt={currentLine.speaker} />
      )}
    </div>
  );
}

export default Sheriff;
