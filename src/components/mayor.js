import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './mayor.css';
import mayor from './assets/img/Mayor.png';

// Associate each line with a speaker
const storyData = [
  { text: "The mayor, Douglas, is in charge of the town and gave Detective Harper cases to work on. Age: 30.", speaker: null},
  { text: "{PlayerName}: Thank you for meeting with me today, Mayor Douglas. I wanted to discuss with you the murder of Detective Harper.", speaker: null},
  { text: "Mayor Douglas: … Murder? … Of Harper? Are you telling the truth?", speaker: "mayor"}, 
  { text: "{PlayerName}: Yes, unfortunately.", speaker: null}, 
  { text: "Mayor Douglas: Wow… I can’t believe it. You know, we grew up together? It doesn’t seem that way now, but we were childhood friends…We were just together the other night… It can’t be true, she’s really dead?", speaker: "mayor"}, 
  { text: "The mayor starts crying.", speaker: null},
  { text: "{PlayerName}: Oh, yes, unfortunately it’s true. I need to ask you some questions regarding it.", speaker: null},
  { text: "The mayors stops crying.", speaker: null},
  { text: "Mayor Douglas: Oh, well I stayed back after the party a little to use the restroom, and when I made my way out of the tavern, I saw that she was the last guest to leave.", speaker: "mayor"}, 
,
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
  const navigate = useNavigate(); // useNavigate for routing

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

