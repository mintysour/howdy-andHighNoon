import React, { useState } from 'react';
import './Prologue.css';

const storyData = {
    start: {
      text: "Detective Harper: What a success! I’m proud to say that we can finally close this case. Thank you for working with me...",
      choices: [
        { text: "Go left", next: "leftPath" },
        { text: "Go right", next: "rightPath" },
      ],
    },
    leftPath: {
      text: "You went left and found a treasure!",
      choices: [{ text: "Take the treasure", next: "end" }],
    },
    rightPath: {
      text: "You went right and fell into a trap!",
      choices: [{ text: "Try to escape", next: "end" }],
    },
    end: {
      text: "The game has ended.",
      choices: [],
    },
  };

  function Prologue() {
    const [currentNode, setCurrentNode] = useState('start');
    const [playerName, setPlayerName] = useState('');
    const [isNameEntered, setIsNameEntered] = useState(false);
  
    const handleChoice = (nextNode) => {
      setCurrentNode(nextNode);
    };
  
    const handleNameSubmit = (e) => {
      e.preventDefault();
      setIsNameEntered(true);
    };
  
    const { text, choices } = storyData[currentNode];
  
    return (
      <div>
        {/* Display the initial text */}
        <p>{text}</p>
  
        {!isNameEntered ? (
          <form onSubmit={handleNameSubmit}>
            <label>
              Enter your name:
              <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            {/* Display the text with the player's name */}
            <p>Detective Harper: I’m glad to have you on board, {playerName}!</p>
            {choices.map((choice, index) => (
              <button key={index} onClick={() => handleChoice(choice.next)}>
                {choice.text}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default Prologue;