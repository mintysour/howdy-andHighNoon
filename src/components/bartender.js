import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './bartender.css';
import bartender from './assets/img/Bartender.png';

// Associate each line with a speaker
const storyData = [
  { text: "The neighbor, Theodore, lives next door to Detective Harper. Age: 56.", speaker: "bartender" },
  { text: "{PlayerName}: Howdy Neighbor! I’m investigating the murder of Detective Harper.", speaker: "bartender"},
  { text: "Neighbor Theodore: Harper?! Dead?! This can’t be… she was alive just a few days ago…", speaker: "bartender" }
];

const characterImages = {
  bartender: bartender,
  player: null // No image for the player character
};

function Bartender() {
  const location = useLocation();
  const playerName = location.state?.playerName || ''; // Retrieve the player name from location state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [hasTalkedToBartender, setHasTalkedToBartender] = useState(false); // Boolean state
  const navigate = useNavigate(); // useNavigate for routing

  const currentLine = storyData[currentTextIndex];
  const currentText = currentLine.text.replace("{PlayerName}", playerName);
  const speakerImage = characterImages[currentLine.speaker];

  // Handle click to progress the story or show choices
  const handleClick = () => {
    if (currentTextIndex < storyData.length - 1) {
      setCurrentTextIndex(currentTextIndex + 1);
    } else {
      setHasTalkedToBartender(true);
      navigate('/suspect', {
        state: { 
          playerName,
          hasTalkedToBartender: true // Update the state
        }
      });
    }
  };

  return (
    <div className="bartender" onClick={handleClick} style={{ cursor: 'pointer', padding: '20px' }}>
      <p className="thetext">{currentText}</p>
      {speakerImage && (
        <img src={speakerImage} className="Character" alt={currentLine.speaker} />
      )}
    </div>
  );
}

export default Bartender;
