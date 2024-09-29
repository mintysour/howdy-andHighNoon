import React, { useState } from 'react';
import './Prologue.css';

const storyData = {
    start: {
      text: "Welcome to the visual novel. What will you do?",
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

  const handleChoice = (nextNode) => {
    setCurrentNode(nextNode);
  };

  const { text, choices } = storyData[currentNode];

  return (
    <div>
      <h1>Visual Novel</h1>
      <p>{text}</p>
      {choices.map((choice, index) => (
        <button key={index} onClick={() => handleChoice(choice.next)}>
          {choice.text}
        </button>
      ))}
    </div>
  );
}

export default Prologue;