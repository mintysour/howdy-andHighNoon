import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Prologue.css';
import detective from './assets/img/Detective.png';

const storyData = [
  { text: "<b>After a grueling few weeks, you and your mentor, Detective Harper, finally closed your last case. Which means, its time to celebrate!</b>", speaker: null},
  { text: "<b>Detective Harper:</b> What a success! I’m proud to say that we can finally close this case. Thank you for working with me, my apprentice...", speaker: "detective" },
  { text: "<b>{PlayerName}:</b> It was my pleasure! We finally stopped the cowboys who have been terrorizing the townsfolk.", speaker: "detective" }, 
  { text: "<b>Detective Harper:</b> Good riddance. The town is throwing us a celebration for finally putting them behind bars. Let’s celebrate our success with everyone at the saloon!", speaker: "detective"}
];

const characterImages = {
  detective: detective
}

function Prologue() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [isNameInputVisible, setIsNameInputVisible] = useState(false);
  const navigate = useNavigate(); // useNavigate for routing

  const handleClick = () => {
    // Show name input after the first line
    if (currentTextIndex === 1) {
      setIsNameInputVisible(true);
    } else if (currentTextIndex < storyData.length - 1) {
      // Progress the story text
      setCurrentTextIndex(currentTextIndex + 1);
    } else {
      // If it's the last line, navigate to PrologueParty
      navigate('/prologueparty', { state: { playerName } });
    }
  };

  const handleNameSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    setIsNameInputVisible(false); // Hide name input
    setCurrentTextIndex(currentTextIndex + 1); // Progress to the next line after name is submitted
  };

  const currentLine = storyData[currentTextIndex];
  const currentText = currentLine.text.replace("{PlayerName}", playerName);
  const speakerImage = characterImages[currentLine.speaker];

  return (
    <div className="Prologue">
      <div onClick={handleClick} style={{ cursor: 'pointer', padding: '20px' }}>
        <p className="thetext" dangerouslySetInnerHTML={{ __html: currentText }}></p>

        {isNameInputVisible && (
          <form onSubmit={handleNameSubmit}>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Enter your first name"
              required
            />
            <button type="submit">Submit</button>
          </form>
        )}
        {speakerImage && (
        <img src={speakerImage} className="Character" alt={currentLine.speaker} />
      )}
      </div>
    </div>
  );
}

export default Prologue;