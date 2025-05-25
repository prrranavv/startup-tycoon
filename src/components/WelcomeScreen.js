import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeScreen.css';

function WelcomeScreen() {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/start-up');
  };

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/welcome-background.png)`
  };

  return (
    <div className="app">
      <div className="welcome-container" style={backgroundStyle}>
        <div className="content">
          <h1 className="title handjet-font">Startup Tycoon</h1>
          <h2 className="subtitle cabin-sketch-font">Can you build the next unicorn? 🦄</h2>
          <button className="start-button handjet-font" onClick={handleStartGame}>
            Start hustlin'
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen; 