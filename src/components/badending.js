    import React, { useState } from 'react';
    import { useLocation } from 'react-router-dom';
    import { useNavigate } from 'react-router-dom';
    //import './goodending.css';
    import mayor from './assets/img/Mayor.png';
    //import deadscene from './assets/img/deadscene.png';

    // Associate each line with a speaker
    const storyData = [
    { text: "Walking towards the detective's office, you see the sheriff running towards you in a hasty manner.", speaker: null },
    { text: "Sheriff Justin: Huff... huff... {PlayerName}! You must follow me quickly!", speaker: "mayor"},
    { text: " ohh", speaker: null}
    ];

    // Map speakers to their images
    const characterImages = {
    mayor: mayor,
    player: null // No image for the player character
    };

    function Badending() {
    const location = useLocation();
    const playerName = location.state?.playerName || ''; // Retrieve the player name from location state
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const navigate = useNavigate(); // useNavigate for routing

    const currentLine = storyData[currentTextIndex];
    const currentText = currentLine.text.replace("{PlayerName}", playerName);
    const speakerImage = characterImages[currentLine.speaker];

    // Handle click to progress the story
    const handleClick = () => {
        if (currentTextIndex < storyData.length - 1) {
        setCurrentTextIndex(currentTextIndex + 1);
        }
    };

    return (
        <div
        className="badending"
        onClick={handleClick}
        style={{
            cursor: 'pointer',
            padding: '20px',
            height: '100vh' // Full height
        }}
        >
        {currentTextIndex < storyData.length - 1? (
            // Render the dialogue box if we haven't reached the last index
            <>
            <p className="thetext">{currentText}</p>

            {/* Render the character's image if available */}
            {speakerImage && (
                <img src={speakerImage} className="Character" alt={currentLine.speaker} />
            )}
            </>
        ) : (
            // Render the mission box once the last line of dialogue is done
            <div className="text-box">
            <h2 className="mission">BAD ENDING</h2>
            <p className="missiontext">Detective Harper has been murdered! It's your mission to discover the culprit and uncover the case Harper was working on right before her death.</p>
            <p className="missiontext">Talk to the townspeople to uncover clues and complete your <b>TASKS</b> to fulfill your mission.</p>
            <button className="missionButton" onClick={() => navigate('/')}>Restart?</button>
            </div>
        )}
        </div>
    );
    }

    export default Badending;