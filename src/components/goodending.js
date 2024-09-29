import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './goodending.css';
import mayor from './assets/img/Mayor.png';
//import deadscene from './assets/img/deadscene.png';

// Associate each line with a speaker
const storyData = [
  { text: "Mayor Douglass: ...", speaker: "mayor" },
  { text: "Mayor Douglass: ...Me? What makes you think it's me?", speaker: "mayor"},
  { text: "{PlayerName}: Douglass, all evidence points to you!", speaker: "mayor"},
  { text: "Mayor Douglass: What are you talking about?! What about Sheriff Justin's gun? Bartender Alexa's quick escape? Neighbor Theodore and his creepy house?!", speaker: "mayor"},
  { text: "{PlayerName}: Sheriff Justin always has his gun on him. Bartender Alexa lives far away, so she leaves early so that she doesn't arrive late. And Neighbor Theodore... has unique hobbies!", speaker: "mayor"},
  { text: "{PlayerName}: You weren't working last night. Detective Harper caught you and confronted you, didn't see"}
];

// Map speakers to their images
const characterImages = {
  mayor: mayor,
  player: null // No image for the player character
};

function Goodending() {
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
  };

  return (
    <div
      className="ending"
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        padding: '20px',
        height: '100vh' // Full height
      }}
    >
      {currentTextIndex < storyData.length - 1? (
        // Render the dialogue box if we haven't reached the last index
        <>
          <p className="thetext">{currentText}</p>

          {/* Render the character's image if available */}
          {speakerImage && (
            <img src={speakerImage} className="Character" alt={currentLine.speaker} />
          )}
        </>
      ) : (
        // Render the mission box once the last line of dialogue is done
        <div className="text-box">
          <h2 className="mission">GOOD ENDING</h2>
          <p className="missiontext">You were able to find the culprit, protect the town, and avenge Detective Harper!.</p>
          <p className="missiontext">CREDITS: Naomi Dao, Marci Van, Bhavana Venkatesh</p>
          <button className="missionButton" onClick={() => navigate('/')}>Restart?</button>
        </div>
      )}
    </div>
  );
}

export default Goodending;