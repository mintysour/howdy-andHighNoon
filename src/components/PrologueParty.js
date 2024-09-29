import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PrologueParty.css';
import detective from './assets/img/Detective.png';
import sheriff from './assets/img/sherrif.png';
import bartender from './assets/img/Bartender.png';
import mayor from './assets/img/Mayor.png';
import neighbor from './assets/img/neighbor.png';

// Associate each line with a speaker
const storyData = [
  { text: "You walk into the town saloon with Detective Harper. Upon your arrival, the townsfolk gather around you with excitement and joy.", speaker: null },
  { text: "Theodore: Look who finally arrived! The heroes of this town!", speaker: "neighbor" },
  { text: "Bartender Alexa: Welcome to Prairie Moon Tavern! I heard about your case, congrats Harper and {PlayerName}.", speaker: "bartender" },
  { text: "{PlayerName}: Thank you! Does this mean my drinks are on you? ", speaker: "player" },
  { text: "Bartender Alexa: Haha, if you tell me what your next case is, all drinks are on me.", speaker: "bartender" },
  { text: "Detective Harper: Nice try, our next case is top secret. I can’t disclose any details to anyone.", speaker: "detective" },
  { text: "Mayor Douglas: Top secret? I’m the Mayor, nothing is a secret from me! Fill me in Harper.", speaker: "mayor" },
  { text: "Detective Harper: Haha, patience Mayor. I don’t have the details hashed out at this moment, but once I fill {PlayerName} in, I’ll be sure to send a case report to you, Douglas.", speaker: "detective" },
  { text: "Sheriff Justin: What are you kidding Douglas? Even if you didn’t know, I’m sure the town would be fine regardless.", speaker: "sheriff" },
  { text: "Mayor Douglas: Well, I can’t argue with you there, Justin. Anyways, congrats guys! It’s good that we have two detectives in our town to keep us nice and safe.", speaker: "mayor" },
  { text: "Detective Harper: Of course! Anything to keep our citizens safe! Now, shall we get drinking?", speaker: "detective" },
  { text: "The saloon erupts in joy and sounds of clinking glass echo throughout the town. The celebration runs long and minutes turn into hours, and before you know it, you’re saying goodbye to the townsfolk before heading home.", speaker: null },
  { text: "Finally in bed, you’re ready to get as much sleep as you can before work the next day…", speaker: null }
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
    <div className="PrologueParty" onClick={handleClick} style={{ cursor: 'pointer', padding: '20px' }}>
      <p className="thetext">{currentText}</p>

      {/* Render the character's image if available */}
      {speakerImage && (
        <img src={speakerImage} className="Character" alt={currentLine.speaker} />
      )}
    </div>
  );
}

export default PrologueParty;