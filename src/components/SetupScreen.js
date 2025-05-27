import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SetupScreen.css';

function SetupScreen() {
  const navigate = useNavigate();
  const [founderName, setFounderName] = useState('');
  const [industry, setIndustry] = useState('');
  const [startupName, setStartupName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (founderName && industry && startupName) {
      const gameData = {
        founderName,
        industry,
        startupName
      };
      console.log('Game setup completed:', gameData);
      // Navigate to introduction page with game data
      navigate('/introduction', { state: gameData });
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/generic-background.png)`
  };

  return (
    <div className="setup-screen" style={backgroundStyle}>
      <div className="logo-top-left">
        <img 
          src={`${process.env.PUBLIC_URL}/logo.png`} 
          alt="Logo" 
          className="top-left-logo"
        />
      </div>
      
      <div className="setup-container">
        <div className="setup-left">
          <div className="character-section">
            <img 
              src={`${process.env.PUBLIC_URL}/set-up.png`} 
              alt="Startup founder character" 
              className="character-image"
            />
          </div>
        </div>

        <div className="setup-right">
          <div className="form-container">
            <div className="form-header">
              <h2 className="form-title handjet-font">Your Billion $ Idea Starts Here..</h2>
            </div>

            <form onSubmit={handleSubmit} className="setup-form">
              <div className="form-group">
                <label className="form-label handjet-font">What's your name, founder?</label>
                <input
                  type="text"
                  value={founderName}
                  onChange={(e) => setFounderName(e.target.value)}
                  placeholder="Steve Jobs"
                  className="form-input handjet-font"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label handjet-font">What industry will you disrupt?</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="form-select handjet-font"
                  required
                >
                  <option value="" disabled>Technology</option>
                  <option value="Education">Education</option>
                  <option value="AI">AI</option>
                  <option value="Social Network">Social Network</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label handjet-font">What's your startup called?</label>
                <input
                  type="text"
                  value={startupName}
                  onChange={(e) => setStartupName(e.target.value)}
                  placeholder="Apple"
                  className="form-input handjet-font"
                  required
                />
              </div>

              <button type="submit" className="register-button handjet-font">
                Register my company
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetupScreen; 