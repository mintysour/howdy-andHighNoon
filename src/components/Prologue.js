import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Prologue.css';
import detective from './assets/img/Detective.png';

const storyData = [
  "Detective Harper: What a success! I’m proud to say that we can finally close this case. Thank you for working with me, my apprentice...",
  "{PlayerName}: It was my pleasure! We finally stopped the cowboys who have been terrorizing the townsfolk.",  
  "Detective Harper: Good riddance. The town is throwing us a celebration for finally putting them behind bars. Let’s celebrate our success with everyone at the saloon!"
];

function Prologue() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [isNameInputVisible, setIsNameInputVisible] = useState(false);
  const navigate = useNavigate(); // useNavigate for routing

  const handleClick = () => {
    // Show name input after the first line
    if (currentTextIndex === 0) {
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

  const currentText = storyData[currentTextIndex].replace("{PlayerName}", playerName);

  return (
    <div className="Prologue">
      <div onClick={handleClick} style={{ cursor: 'pointer', padding: '20px' }}>
        <p className="thetext">{currentText}</p>

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
        <img src = {detective} className = "Detective"></img>
      </div>
    </div>
  );
}

export default Prologue;