import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './mayor.css';
import mayor from './assets/img/Mayor.png';

// Associate each line with a speaker
const storyData = [
  { text: 'The mayor, Douglas, is in charge of the town and gave Detective Harper cases to work on. Find out what you can, and write them in your notes.'},
  { text: "Sheriff Justin: Huff... huff... {PlayerName}! You must follow me quickly!", speaker: "mayor"}
];

// Map speakers to their images
const characterImages = {
  mayor: mayor,
  player: null // No image for the player character
};

function Mayor() {
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

  const backgroundImage = currentTextIndex >= 5 ? deadscene : ''; // Change background after index 5

  return (
    <div
      className="mayor"
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        padding: '20px',
        backgroundImage: `url(${backgroundImage})`, // Apply background image
        backgroundSize: 'cover', // Ensure the background covers the whole div
        backgroundPosition: 'center', // Center the background image
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

export default Mayor;