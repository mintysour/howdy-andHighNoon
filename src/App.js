import { React, useEffect, useState } from "react";
import './App.css';

const buttonStyle = {
  backgroundColor: '#613624', 
  color: 'white', 
  padding: '10px 20px', 
  border: 'none', 
  borderRadius: '5px', 
  cursor: 'pointer', 
  fontSize: '32px', 
};

function App() {
  const[gameStarted, getGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
      <div className="App">
        <header className="App-header">
        <h1>Howdy and High Noon:</h1>
        <h2>A Western Whodunit </h2>

       {/* Conditional rendering based on game state */}
        {!gameStarted ? (
          <button style={buttonStyle} onClick={handleStartGame}>
            Start Game
          </button>
        ) : (
          <div>
            <h2>The game has started!</h2>
            {/* Add more game content here */}

          </div>
        )}
        </header>
      </div>
  );
}
export default App;
