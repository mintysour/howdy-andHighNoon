import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './goodending.css';
import mayor from './assets/img/Mayor.png';
import sheriff from './assets/img/sherrif.png';

//import deadscene from './assets/img/deadscene.png';

// Associate each line with a speaker
const storyData = [
  { text: "Mayor Douglas: ...", speaker: "mayor" },
  { text: "Mayor Douglas: ...Me? What makes you think it's me?", speaker: "mayor"},
  { text: "{PlayerName}: Douglas, all evidence points to you!", speaker: "mayor"},
  { text: "Mayor Douglas: What are you talking about?! What about Sheriff Justin's gun? Bartender Alexa's quick escape? Neighbor Theodore and his creepy house?!", speaker: "mayor"},
  { text: "{PlayerName}: Sheriff Justin always has his gun on him, it has meaning. As for Alexa, she lives far away, so she leaves early so that she doesn't arrive late, and the sheriff confirmed she's always rushing. And Neighbor Theodore... has unique hobbies!", speaker: "mayor"},
  { text: "{PlayerName}: You weren't working last night were you. Detective Harper caught you and confronted you, didn't she?. She found out something you didn't want her to know, so you silenced her."},
  { text: "Mayor Douglas: ...", speaker: "mayor"},
  { text: "Mayor Douglas: I knew I should've gotten rid of you too.", speaker: "mayor"},
  { text: "Mayor Douglas: That detective was threatening to expose my embezzling! I mean, come ON. So many years of friendship and she can't just let something slide?", speaker: "mayor"},
  { text: "Mayor Douglas: I had to quiet her, but I should've known she wouldve taught you well, cause she was a damn good detective.", speaker: "mayor"},
  { text: "Mayor Douglas: She shouldn't have been so lenient with me though, look where it got her. Her trust was her most fatal--",  speaker: "mayor"},
  { text: "The sheriff tackles the mayor to the ground and puts handcuffs on him.", speaker: null},
  { text: "Sheriff Justin: Well, that's enough from him. Good work, {PlayerName}, Harper would be so proud to call you her successor.", speaker: "sheriff"},
  { text: ""}
];

// Map speakers to their images
const characterImages = {
  mayor: mayor,
  sheriff: sheriff,
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
          <p className="missiontext">Congratulations! You were able to find the culprit, protect the town, and avenge Detective Harper! Pat yourself on the back.</p>
          <p className="missiontext">CREDITS: Naomi Dao, Marci Van, Bhavana Venkatesh</p>
          <button className="missionButton" onClick={() => navigate('/')}>Play Again?</button>
        </div>
      )}
    </div>
  );
}

export default Goodending;