import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './goodending.css';
import mayor from './assets/img/Mayor.png';
//import deadscene from './assets/img/deadscene.png';

// Associate each line with a speaker
const storyData = [
  { text: "As you lock up the criminal, the town cheers your name.", speaker: null },
  { text: '"{PlayerName}! Thank you for saving us once again!"', speaker: null},
  { text: '"Safe once again thanks to {PlayerName}"', speaker: null},
  { text: "The crowd rejoices, thankful that the murderer on the loose was now where they belong. But even though the masses are rejoicing, you can't help but feel uneasy.", speaker:null},
  { text: "You go back to Detective Harper's office, feeling confused and empty", speaker: null},
  { text: "As you look back at the familiar room, basking in the nostalgia, you hear the door open.", speaker: null},
  { text: "Before you can turn around, you hear a loud bang and feel a sharp, stinging pain in your back", speaker:null},
  { text: "???: I really thought you had me, but it turns out you're just as bad of a detective as that Harper was. Shouldn't have been poking your nose around in other people's business."},
  { text: "As your vision fades to black, you're filled with sadness.", speaker:null},
  { text: "You couldn't avenge Harper, and her murderer is still walking free. Maybe in another life...", speaker:null},
  { text: ""}
];

// Map speakers to their images
const characterImages = {
  mayor: mayor,
  player: null // No image for the player character
};

function Badending() {
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
      {currentTextIndex < storyData.length -1 ? (
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
          <h2 className="mission">BAD ENDING</h2>
          <p className="missiontext">Oh no! You failed to catch the real culprit and let the real one get away! Try again, and read the clues carefully, detective!.</p>
          <p className="missiontext">Talk to the townspeople again to uncover more clues and complete your <b>TASKS</b> to fulfill your mission.</p>
          <p className="missiontext">CREDITS: Naomi Dao, Marci Van, Bhavana Venkatesh</p>
          <button className="missionButton" onClick={() => navigate('/')}>Restart?</button>
        </div>
      )}
    </div>
  );
}

export default Badending;