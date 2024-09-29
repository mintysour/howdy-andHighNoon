import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './PrologueParty.css';
import detective from './assets/img/Detective.png';
import sheriff from './assets/img/sherrif.png';
import bartender from './assets/img/Bartender.png';
import mayor from './assets/img/Mayor.png';
import neighbor from './assets/img/neighbor.png';

// Associate each line with a speaker
const storyData = [
  { text: "<b>You walk into the town saloon with Detective Harper. Upon your arrival, the townsfolk gather around you with excitement and joy.</b>", speaker: null },
  { text: "<b>Neighbor Theodore:</b> Look who finally arrived! The heroes of this town!", speaker: "neighbor" },
  { text: "<b>Bartender Alexa:</b> Welcome to Prairie Moon Tavern! I heard about your case, congrats Harper and {PlayerName}.", speaker: "bartender" },
  { text: "<b>{PlayerName}:</b> Thank you! Does this mean my drinks are on you? ", speaker: "bartender" },
  { text: "<b>Bartender Alexa:</b> Haha, if you tell me what your next case is, all drinks are on me.", speaker: "bartender" },
  { text: "<b>Detective Harper:</b> Nice try, our next case is top secret. I can’t disclose any details to anyone.", speaker: "detective" },
  { text: "<b>Mayor Douglas:</b> Top secret? I’m the Mayor, nothing is a secret from me! Fill me in Harper.", speaker: "mayor" },
  { text: "<b>Detective Harper:</b> Haha, patience Mayor. I don’t have the details hashed out at this moment, but once I fill {PlayerName} in, I’ll be sure to send a case report to you, Douglas.", speaker: "detective" },
  { text: "<b>Sheriff Justin:</b> What are you kidding Douglas? Even if you didn’t know, I’m sure the town would be fine regardless.", speaker: "sheriff" },
  { text: "<b>Mayor Douglas:</b> Well, I can’t argue with you there, Justin. Anyways, congrats guys! It’s good that we have two detectives in our town to keep us nice and safe.", speaker: "mayor" },
  { text: "<b>Detective Harper:</b> Ahaha, you guys are too much! Anything to keep our citizens safe! Now, shall we get drinking?", speaker: "detective" },
  { text: "<b>The saloon erupts in joy and sounds of clinking glass echo throughout the town. The celebration runs long and minutes turn into hours, and before you know it, you’re saying goodbye to the townsfolk before heading home.</b>", speaker: null },
  { text: "<b>Finally in bed, you’re ready to get as much sleep as you can before work the next day…</b>", speaker: null }
];

// Map speakers to their images
const characterImages = {
  detective: detective,
  bartender: bartender,
  mayor: mayor,
  neighbor: neighbor,
  sheriff: sheriff,
  player: null // No image for the player character
};

function PrologueParty() {
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
    navigate('/prologuemorning', { state: { playerName } });
    }
  };

  return (
    <div className="PrologueParty" onClick={handleClick} style={{ cursor: 'pointer', padding: '20px' }}>
      <p className="thetext" dangerouslySetInnerHTML={{ __html: currentText }}></p>

      {/* Render the character's image if available */}
      {speakerImage && (
        <img src={speakerImage} className="Character" alt={currentLine.speaker} />
      )}
    </div>
  );
}

export default PrologueParty;