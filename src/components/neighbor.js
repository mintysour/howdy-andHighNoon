import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './neighbor.css';
import neighbor from './assets/img/neighbor.png';

// Associate each line with a speaker
const storyData = [
  { text: "<b>The neighbor, Theodore lives next door to Detective Harper. Age: 56 years old.</b>" , speaker : "neighbor"},
  { text: "<b>{PlayerName}:</b> Howdy Neighbor! I’m investigating the murder of Detective Harper.", speaker: "neighbor"},
  { text: "<b>Neighbor Theodore:</b> What?? She’s… dead? We were all just together last night having a Party… I saw her just last night…", speaker: "neighbor"},
  { text: "<b>{PlayerName}:</b> I know, it’s all very sudden, but as her apprentice I’m trying to get to the bottom of it as soon as possible. Do you have any information at all?", speaker: "neighbor"},
  { text: "<b>Neighbor Theodore:</b> Hmm… Well last night, I thought I might’ve heard something really late – <b>a loud bang sound maybe sometime around 3 AM.</b> I’ve been having real trouble going to sleep lately, and I thought maybe my mind were playin’ tricks on me.", speaker: "neighbor"},
  { text: "<b>Neighbor Theodore:</b> But now that I think about it… you don’t think it could’ve been a gunshot do ya…?", speaker: "neighbor"},
  { text: "<b>{PlayerName}:</b> Who do you think it could be? ", speaker: "neighbor"},
  { text: "<b>Neighbor Theodore:</b> I’m not really sure… I mean when I think of Harper, the first thing to come to mind ought to be the mayor, I mean them being childhood friends and all.", speaker: "neighbor"},
  { text: "<b>{PlayerName}:</b> Childhood friends?", speaker: "neighbor"},
  { text: "<b>Neighbor Theodore:</b> Oh, you don’t know? Douglas and Harper grew up together. Wow, I remember when they were wee little kids, running around the square… and now here we are. Oh, but I’m just reminiscing.", speaker: "neighbor"},
  { text: "<b>Neighbor Theodore:</b> They’ve grown apart in recent years, though I can’t recall the reason why. <b>You’ll probably hear from the Mayor about it if you haven’t already.</b>", speaker: "neighbor"},
  { text: "<b>{PlayerName}:</b> Wow, I had no clue… Do you have any other information for me?", speaker: "neighbor"},
  { text: "<b>Neighbor Theodore:</b> Yeah, actually. I remember late one night recently, I went on a walk and saw Harper working by candlelight. She seemed really concerned, and it looked as though <b>there was another figure in there with her.</b> I couldn’t make out much, though, with my poor eyesight.", speaker: "neighbor"},
  { text: "<b>{PlayerName}:</b> Alright, this is good information thank you. However, what were you doing last night?", speaker: "neighbor"},
  { text: "<b>Neighbor Theodore:</b> Well, I got escorted home by the sheriff after the party, and then <b>I was watching TV. I’ve been a real big fan of true crime documentaries lately, but I’ve gotta watch myself because I’ve been getting some complaints about noise.</b> I’ve been having a hard time hearing so it’s hard these days to hear the telly.", speaker: "neighbor"}, 
  { text: "<b>{PlayerName}:</b> Was there anyone able to account for your location?", speaker: "neighbor"},
  { text: "<b>Neighbor Theodore:</b> Not that I am aware of at the time, but the sheriff walked me home. I swear to you, though, that Harper was like a daughter to me.", speaker: "neighbor"},
  { text: "<b>{PlayerName}:</b> Okay, thank you. This will all be really helpful.", speaker: "neighbor"},
  { text: "<b>Neighbor Theodore:</b> I’m glad to be of use, I hope you’re able to catch them quick.", speaker: "neighbor"}

];

const characterImages = {
  neighbor: neighbor,
  player: null // No image for the player character
};

function Neighbor() {
  const location = useLocation();
  const playerName = location.state?.playerName || ''; // Retrieve the player name from location state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [hasTalkedToNeighbor, setHasTalkedToNeighbor] = useState(false); // Boolean state
  const navigate = useNavigate(); // useNavigate for routing

  const currentLine = storyData[currentTextIndex];
  const currentText = currentLine.text.replace("{PlayerName}", playerName);
  const speakerImage = characterImages[currentLine.speaker];

  // Handle click to progress the story or show choices
  const handleClick = () => {
    if (currentTextIndex < storyData.length - 1) {
      setCurrentTextIndex(currentTextIndex + 1);
    } else {
      setHasTalkedToNeighbor(true);
      navigate('/suspect', {
        state: { 
          playerName,
          hasTalkedToNeighbor: true // Update the state
        }
      });
    }
  };

  return (
    <div className="neighbor" onClick={handleClick} style={{ cursor: 'pointer', padding: '20px' }}>
      <p className="thetext" dangerouslySetInnerHTML={{ __html: currentText }}></p>

      {speakerImage && (
        <img src={speakerImage} className="Character" alt={currentLine.speaker} />
      )}
    </div>
  );
}

export default Neighbor;
