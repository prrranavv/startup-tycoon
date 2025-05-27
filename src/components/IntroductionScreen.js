import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import './IntroductionScreen.css';

function IntroductionScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const gameData = location.state || { startupName: 'Your Company', founderName: 'Founder', industry: 'Technology' };
  
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    
    // Play confetti sound
    const playConfettiSound = () => {
      try {
        const audio = new Audio(`${process.env.PUBLIC_URL}/confetti-sound.mp3`);
        audio.volume = 0.6; // Set volume to 60%
        audio.play().catch(error => {
          console.log('Audio play failed:', error);
        });
      } catch (error) {
        console.log('Audio creation failed:', error);
      }
    };

    // Play sound immediately when component mounts
    playConfettiSound();
    
    // Stop confetti after 6 seconds (increased duration for more impact)
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 6000);

    return () => {
      window.removeEventListener('resize', detectSize);
      clearTimeout(timer);
    };
  }, []);

  const handleGetKicking = () => {
    // Navigate to Day 1 screen
    navigate('/day-1', { state: gameData });
  };

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/office-background.png)`
  };

  return (
    <div className="introduction-screen" style={backgroundStyle}>
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={400}
          gravity={0.3}
          initialVelocityY={20}
          initialVelocityX={5}
          wind={0.02}
          friction={0.99}
          run={showConfetti}
        />
      )}

      <div className="introduction-container">
        <div className="company-title-section">
          <h1 className="company-title handjet-font">{gameData.startupName} HQ</h1>
        </div>

        <div className="content-section">
          <div className="letter-background-container">
            <img 
              src={`${process.env.PUBLIC_URL}/letter.png`} 
              alt="Letter background" 
              className="letter-background"
            />
            <div className="letter-content">
              <h2 className="welcome-title handjet-font">
                Welcome to your new office space of 5 dreamers! 🎉
              </h2>
              
              <p className="message-text handjet-font">
                They say your firsts are always special! I hope this marks the beginning of a roller-coaster journey.
              </p>
              
              <div className="vitals-section">
                <h3 className="vitals-title handjet-font">Here are your vitals:</h3>
                
                <div className="vitals-grid">
                  <div className="vital-item">
                    <span className="vital-icon">💰</span>
                    <span className="vital-label handjet-font">Cash in the bank</span>
                  </div>
                  
                  <div className="vital-item">
                    <span className="vital-icon">💎</span>
                    <span className="vital-label handjet-font">Equity split</span>
                  </div>
                  
                  <div className="vital-item">
                    <span className="vital-icon">😊</span>
                    <span className="vital-label handjet-font">Your morale</span>
                  </div>
                  
                  <div className="vital-item">
                    <span className="vital-icon">👥</span>
                    <span className="vital-label handjet-font">Dreamers count</span>
                  </div>
                  
                  <div className="vital-item">
                    <span className="vital-icon">🔍</span>
                    <span className="vital-label handjet-font">Media traction</span>
                  </div>
                  
                  <div className="vital-item">
                    <span className="vital-icon">📅</span>
                    <span className="vital-label handjet-font">Days passed</span>
                  </div>
                </div>
              </div>
              
              <button className="get-kicking-button handjet-font" onClick={handleGetKicking}>
                Get kicking!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroductionScreen; 