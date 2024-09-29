import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './mayor.css';
import mayor from './assets/img/Mayor.png';

// Associate each line with a speaker
const storyData = [
  { text: "The neighbor, Theodore, lives next door to Detective Harper. Age: 56.", speaker: "mayor" },
  { text: "{PlayerName}: Howdy Neighbor! I’m investigating the murder of Detective Harper.", speaker: "mayor"},
  { text: " Neighbor Theodore: Harper?! Dead?! This can’t be… she was alive just a few days ago…", speaker: "mayor"}
];

// Choices and responses
//const choicesData = [
//  { question: "What information do you have?", response: "Theodore: I saw Detective Harper arguing with someone late last night, but I couldn’t see who it was." },
//  { question: "Who do you think did it?", response: "Theodore: I don't want to point fingers, but I’ve had my suspicions about the Mayor. They didn’t always get along." },
//  { question: "What were you doing after the party?", response: "Theodore: I went home after the party and stayed in. I was in bed by midnight, I swear." }
//];

// Map speakers to their images
const characterImages = {
  mayor: mayor,
  player: null // No image for the player character
};

function Mayor() {
  const location = useLocation();
  const playerName = location.state?.playerName || ''; // Retrieve the player name from location state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  //const [selectedResponse, setSelectedResponse] = useState(null); // Track selected dialog choice
  const [hasTalkedToMayor, setHasTalkedToMayor] = useState(false); // Boolean state
  const navigate = useNavigate(); // useNavigate for routing

  const currentLine = storyData[currentTextIndex];
  const currentText = currentLine.text.replace("{PlayerName}", playerName);
  const speakerImage = characterImages[currentLine.speaker];

  // Handle dialog choice selection
  //const handleChoiceClick = (response) => {
  //  setSelectedResponse(response); // Set the selected response to show it
  //};

  // Handle click to progress the story or show choices
  const handleClick = () => {
    if (currentTextIndex < storyData.length - 1) {
      setCurrentTextIndex(currentTextIndex + 1);
    }
    else {
        // If it's the last line, navigate to PrologueParty
        setHasTalkedToMayor(true);
        navigate('/suspect', { state: { playerName } });
    }
  };

  return (
    <div
      className="mayor"
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        padding: '20px',
      }}
    >
      <p className="thetext">{currentText}</p>

      {/* Render the character's image if available */}
      {speakerImage && (
        <img src={speakerImage} className="Character" alt={currentLine.speaker} />
      )}

      {/* Render choices if the player hasn't selected one yet
      {!selectedResponse && (
        <div className="choices">
          {choicesData.map((choice, index) => (
            <button
              key={index}
              className="choice-button"
              onClick={() => handleChoiceClick(choice.response)}
            >
              {choice.question}
            </button>
          ))}
        </div>
      )} */}

      {/* Render the response once a choice is selected
      {selectedResponse && (
        <div className="response-box">
          <p>{selectedResponse}</p>
        </div>
      )} */}
    </div>
  );
}

export default Mayor;