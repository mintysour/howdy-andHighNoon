import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './mayor.css';
import mayor from './assets/img/Mayor.png';

// Associate each line with a speaker
const storyData = [
  { text: "The mayor, Douglas, is in charge of the town and gave Detective Harper cases to work on. Age: 30.", speaker: "mayor"},
  { text: "{PlayerName}: Thank you for meeting with me today, Mayor Douglas. I wanted to discuss with you the murder of Detective Harper.", speaker: "mayor"},
  { text: "Mayor Douglas: … Murder? … Of Harper? Are you telling the truth?", speaker: "mayor"}, 
  { text: "{PlayerName}: Yes, unfortunately.", speaker: "mayor"}, 
  { text: "Mayor Douglas: Wow… I can’t believe it. You know, we grew up together? It doesn’t seem that way now, but we were childhood friends…We were just together the other night… It can’t be true, she’s really dead?", speaker: "mayor"}, 
  { text: "The mayor starts crying.", speaker: "mayor"},
  { text: "{PlayerName}: Oh, yes, unfortunately it’s true. I need to ask you some questions regarding it.", speaker: "mayor"},
  { text: "The mayors stops crying.", speaker: "mayor"},
  { text: "Mayor Douglas: Oh, well I stayed back after the party a little to use the restroom, and when I made my way out of the tavern, I saw that she was the last guest to leave.", speaker: "mayor"}, 
  { text: "{PlayerName}: May I ask, why were you two not close anymore?", speaker: "mayor"}, 
  { text: "Mayor Douglas: Oh, well… I’d rather not talk about it. It’s quite a sore subject, and I don’t want to badmouth someone who has passed on.", speaker: "mayor"},
  { text: "{PlayerName}: Oh, well, do you know anyone it could’ve been?", speaker: "mayor"}, 
  { text: "Mayor Douglas: … You know, I did find something weird. I was at the Sheriff’s stables, looking at his horses when I found a gun stashed in the hay bales. I thought it was a weird place, and had chalked it up for a secret stash for safety precautions. But maybe, do you think that was his way of discarding the murder weapon? ", speaker: "mayor"},
  { text: "{PlayerName}: I can’t say, but I will note that down. Where were you after the party?", speaker: "mayor"},
  { text: "Mayor Douglas: I was doing work in my office last night. When I get focused, I tend to lose all sense of my surroundings. I don’t even know what time I went to sleep.", speaker: "mayor"},
  { text: "{PlayerName}: Alright, thank you for your time, and I’m sorry for your loss.", speaker: "mayor"}, 
  { text: "Mayor Douglas: Yes, please, put your everything into this investigation.", speaker: "mayor"}
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

