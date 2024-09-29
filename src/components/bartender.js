import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './bartender.css';
import bartender from './assets/img/Bartender.png';

// Associate each line with a speaker
const storyData = [
  { text: "<b>The bartender, Alexa, runs the town’s saloon and was in charge of hosting the party last night. Age: 26</b>", speaker: null},
  { text: "<b>Bartender Alexa:</b> Welcome back {PlayerName}! What brings you to my tavern so early in the day?", speaker: "bartender"},
  { text: "<b>{PlayerName}:</b> This morning we found Detective Harper shot dead in the town. I need your cooperation in the investigation. ", speaker: "bartender"},
  { text: "<b>Bartender Alexa:</b> No… It can’t be…", speaker: "bartender"},
  { text: "<b>{PlayerName}:</b> Do you have any information?", speaker: "bartender"},
  { text: "<b>Bartender Alexa:</b> Hmm… now that I think about it… you know Theodore, the neighbor, right? Well last night, <b>I could’ve sworn I heard the weirdest sounds from inside his house.</b> It gave me a terrible feeling… ", speaker: "bartender"},
  { text: "<b>Bartender Alexa:</b> I know the only people in this town that have a gun are the sheriff and the mayor, <b>and the Sheriff always has his gun on him, if that’s useful.</b> Other than that I’m not particularly sure, as I’m not super close to the town folk around here. You’re the first one I really talk with. ", speaker: "bartender"},
  { text: "<b>{PlayerName}:</b> And why is that?", speaker: "bartender"},
  { text: "<b>Bartender Alexa:</b> Well, I live pretty far from town, <b>so I always try to hurry up so that I don't get home so late,</b> rather than linger around. Last night even, I finished cleaning around 1 am and must’ve gotten home back around an hour later.", speaker: "bartender"}, 
  { text: "<b>{PlayerName}:</b> Alright, well that accounts for your location. Was anyone there to see you?", speaker: "bartender"}, 
  { text: "<b>Bartender Alexa:</b> No, but I was just cleaning up the tavern. All my staff had already left as they weren’t available for the party.", speaker: "bartender"}, 
  { text: "<b>{PlayerName}:</b> Alright, thank you for your time.", speaker: "bartender"},
  { text: "<b>Bartender Alexa:</b> Of course, I hope the truth comes to light.", speaker: "bartender"}
];

const characterImages = {
  bartender: bartender,
  player: null // No image for the player character
};

function Bartender() {
  const location = useLocation();
  const playerName = location.state?.playerName || ''; // Retrieve the player name from location state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [hasTalkedToBartender, setHasTalkedToBartender] = useState(false); // Boolean state
  const navigate = useNavigate(); // useNavigate for routing

  const currentLine = storyData[currentTextIndex];
  const currentText = currentLine.text.replace("{PlayerName}", playerName);
  const speakerImage = characterImages[currentLine.speaker];

  // Handle click to progress the story or show choices
  const handleClick = () => {
    if (currentTextIndex < storyData.length - 1) {
      setCurrentTextIndex(currentTextIndex + 1);
    } else {
      setHasTalkedToBartender(true);
      navigate('/suspect', {
        state: { 
          playerName,
          hasTalkedToBartender: true // Update the state
        }
      });
    }
  };

  return (
    <div className="bartender" onClick={handleClick} style={{ cursor: 'pointer', padding: '20px' }}>
      <p className="thetext" dangerouslySetInnerHTML={{ __html: currentText }}></p>
      {speakerImage && (
        <img src={speakerImage} className="Character" alt={currentLine.speaker} />
      )}
    </div>
  );
}

export default Bartender;
