import React, { useState, useEffect } from 'react';
import './Prologue.css';
import detective from './assets/img/Detective.png';

const storyData = [
  "Detective Harper: What a success! I’m proud to say that we can finally close this case. Thank you for working with me, my apprentice...",
  "{PlayerName}: It was my pleasure! We finally get to see those cowboys behind bars after they stole $2000 worth of supplies from our farmers.",  
  "Detective Harper: Let’s celebrate our success with everyone at the saloon!"
];

function Prologue() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [isNameInputVisible, setIsNameInputVisible] = useState(false);

  const handleClick = () => {
    if (currentTextIndex === 0) {
      // Show the name input after the first text
      setIsNameInputVisible(true);
    } else if (currentTextIndex < storyData.length - 1) {
      // Advance the text
      setCurrentTextIndex(currentTextIndex + 1);
    }
  };

  const handleNameSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    setIsNameInputVisible(false); // Hide the input field
    setCurrentTextIndex(currentTextIndex + 1); // Move to the next text
  };

  // Replace {PlayerName} with the actual player's name
  const currentText = storyData[currentTextIndex].replace("{PlayerName}", playerName);

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer', padding: '20px' }}>
      
      <p class = "thetext">{currentText}</p>

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
  );
}

export default Prologue;