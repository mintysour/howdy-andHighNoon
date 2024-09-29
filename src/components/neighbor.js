import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './neighbor.css';
import neighbor from './assets/img/neighbor.png';

// Associate each line with a speaker
const storyData = [
  { text: "The neighbor, Theodore, lives next door to Detective Harper. Age: 56.", speaker: "neighbor" },
  { text: "Sheriff Justin: Huff... huff... {PlayerName}! You must follow me quickly!", speaker: "sheriff"},
  { text: "{PlayerName}: Officer Justin? What's wrong?", speaker: "sheriff" },
  { text: "Sheriff Justin: There's no time to explain. Follow me!", speaker: "sheriff" },
  { text: "You follow Sheriff Justin, anxious and confused. It isn't until you get to the scene that your eyes widen.", speaker: null },
  { text: "{PlayerName}: ...", speaker: "player" },
  { text: "{PlayerName}: ...?!?", speaker: "player" },
  { text: "In front of you is the lifeless body of your mentor, who was alive just a few hours ago. The sight makes your blood run cold.", speaker: null },
  { text: "{PlayerName}: How could this happen? What do you know? How long was she here for?!", speaker: "sheriff" },
  { text: "Sheriff Justin: I'm sorry, {PlayerName}. I'm just as clueless as you are. The moment I saw this, I immediately ran to get you.", speaker: "sheriff" },
  { text: "Detective Harper: I know this is hard... but you're the only one who can solve this case now. Will you help uncover this mystery?", speaker: "sheriff" },
  { text: "... I can't believe it, but I know that I'm the only one in this town that knows what to do.", speaker: "player"},
  { text: "It's up to me to avenge my mentor.", speaker: "player"},
  { text: " ", speaker: null}
];

// Map speakers to their images
const characterImages = {
  sheriff: sheriff,
  player: null // No image for the player character
};

function neighbor() {
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
      className="neighbor"
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

export default neighbor;