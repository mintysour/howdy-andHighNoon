import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './mayor.css';
import mayor from './assets/img/Mayor.png';


// Associate each line with a speaker
const storyData = [
  { text: "<b>The mayor, Douglas, is in charge of the town and gave Detective Harper cases to work on. Age: 30.</b>", speaker: "mayor"},
  { text: "<b>{PlayerName}:</b> Thank you for meeting with me today, Mayor Douglas. I wanted to discuss with you the murder of Detective Harper.", speaker: "mayor"},
  { text: "<b>Mayor Douglas:</b> … Murder? … Of Harper? Are you telling the truth?", speaker: "mayor"}, 
  { text: "<b>{PlayerName}:</b> Yes, unfortunately.", speaker: "mayor"}, 
  { text: "<b>Mayor Douglas:</b> Wow… I can’t believe it. You know, we grew up together? It doesn’t seem that way now, but we were childhood friends… We were just together the other night… It can’t be true, she’s really dead?", speaker: "mayor"}, 
  { text: "<b>The mayor starts crying.</b>", speaker: "mayor"},
  { text: "<b>{PlayerName}:</b> Oh, yes, unfortunately it’s true. I need to ask you some questions regarding it.", speaker: "mayor"},
  { text: "<b>The mayors stops crying.</b>", speaker: "mayor"},
  { text: "<b>Mayor Douglas:</b> Oh, well I stayed back after the party a little to use the restroom, and when I made my way out of the tavern, I saw that she was the last guest to leave.", speaker: "mayor"}, 
  { text: "<b>{PlayerName}:</b> May I ask, why were you two not close anymore?", speaker: "mayor"}, 
  { text: "<b>Mayor Douglas:Oh, well… <b>I’d rather not talk about it.</b> It’s quite a sore subject, and I don’t want to badmouth someone who has passed on.", speaker: "mayor"},
  { text: "<b>{PlayerName}:</b> Oh, well, do you know anyone it could’ve been?", speaker: "mayor"}, 
  { text: "<b>Mayor Douglas:</b> … You know, I did find something weird. <b>I was at the Sheriff’s stables, looking at his horses when I found a scuffed up, dirty gun stashed in the hay bales.</b> I thought it was a weird place, and had chalked it up for a secret stash for safety precautions. But maybe, do you think that was his way of discarding the murder weapon? ", speaker: "mayor"},
  { text: "<b>{PlayerName}:</b> I can’t say, but I will note that down. Where were you after the party?", speaker: "mayor"},
  { text: "<b>Mayor Douglas: I was doing work in my office last night.</b> When I get focused, I tend to lose all sense of my surroundings. I don’t even know what time I went to sleep.", speaker: "mayor"},
  { text: "<b>{PlayerName}:</b> Alright, thank you for your time, and I’m sorry for your loss.", speaker: "mayor"}, 
  { text: "<b>Mayor Douglas:</b> Yes, please, put your everything into this investigation.", speaker: "mayor"}
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
      <p className="thetext" dangerouslySetInnerHTML={{ __html: currentText }}></p>
      {speakerImage && (
        <img src={speakerImage} className="Character" alt={currentLine.speaker} />
      )}
    </div>
  );
}

export default Mayor;

