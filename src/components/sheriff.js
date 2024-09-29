import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './sheriff.css';
import sheriff from './assets/img/sherrif.png';

// Associate each line with a speaker
const storyData = [
  { text: "<b>The Sheriff, Justin, works hard for a law-abiding and safe town. Age: 24.</b>", speaker: null}, 
  { text: "<b>Sheriff Justin:</b> Any progress on the investigation?", speaker: "sheriff"},
  { text: "<b>{PlayerName}:</b> I have to keep that to myself, as unfortunately you are also a suspect sheriff.", speaker: "sheriff"}, 
  { text: "<b>Sheriff Justin:</b> Ah, yes of course I understand.", speaker: "sheriff"},
  { text: "<b>{PlayerName}:</b> Alright, so I have a couple questions for you, if that’s alright. Where were you last night?", speaker: "sheriff"},
  { text: "<b>Sheriff Justin:</b> I stayed back after the party a little to use the restroom, and when I exited out of the tavern around 12, <b>I saw that she was the last guest to leave, and with a real serious look on her face, like she was about to go somewhere important.</b> I should’ve asked her what it was. Other than that, I was doing nightly patrols. Last night was particularly busy, since I had to escort many of the townsfolk to their homes.", speaker: "sheriff"},
  { text: "<b>{PlayerName}:</b> Who do you think it could be?", speaker: "sheriff"},
  { text: "<b>Sheriff Justin:</b> Well, to be honest, I’d been raising some sorts of suspicions towards the bartender, Alexa. <b>She always seems like she’s in a rush to be somewhere, and she’s not really close with any of us townsfolk.</b>", speaker: "sheriff"},
  { text: "<b>{PlayerName}:</b> Do you think I could see your gun? For inspection.", speaker: "sheriff"},
  { text: "<b>Sheriff Justin:</b> Of course, {PlayerName}. I’ve got it right here.", speaker: "sheriff"},
  { text: "<b>The sheriff hands you his gun from his holster. It isn’t loaded, and it has his name engraved in the handle.</b>", speaker: "sheriff"},
  { text: "<b>Sheriff Justin:</b> My father got that for me when I got promoted to sheriff. It’s my prized possession.", speaker: "sheriff"},
  { text: "You hand back that gun, and he puts it back in his holster.", speaker: "sheriff"}, 
  { text: "<b>{PlayerName}:</b> Alright, thank you for your help.", speaker: "sheriff"},
  { text: "<b>Sheriff Justin:</b> Of course, and good luck.", speaker: "sheriff"},
];

const characterImages = {
  sheriff: sheriff,
  player: null // No image for the player character
};

function Sheriff() {
  const location = useLocation();
  const playerName = location.state?.playerName || ''; // Retrieve the player name from location state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [hasTalkedToSheriff, setHasTalkedToSheriff] = useState(false); // Boolean state
  const navigate = useNavigate(); // useNavigate for routing

  const currentLine = storyData[currentTextIndex];
  const currentText = currentLine.text.replace("{PlayerName}", playerName);
  const speakerImage = characterImages[currentLine.speaker];

  // Handle click to progress the story or show choices
  const handleClick = () => {
    if (currentTextIndex < storyData.length - 1) {
      setCurrentTextIndex(currentTextIndex + 1);
    } else {
      setHasTalkedToSheriff(true);
      navigate('/suspect', {
        state: { 
          playerName,
          hasTalkedToSheriff: true // Update the state
        }
      });
    }
  };

  return (
    <div className="sheriff" onClick={handleClick} style={{ cursor: 'pointer', padding: '20px' }}>
      <p className="thetext" dangerouslySetInnerHTML={{ __html: currentText }}></p>
      {speakerImage && (
        <img src={speakerImage} className="Character" alt={currentLine.speaker} />
      )}
    </div>
  );
}

export default Sheriff;
