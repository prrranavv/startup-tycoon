import React, { useState } from 'react';
import './Day1Screen.css';

function Day1Screen() {
  const [isMetricsExpanded, setIsMetricsExpanded] = useState(false);
  const [selectedAction, setSelectedAction] = useState('market-research');
  const [hoveredAction, setHoveredAction] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const toggleMetrics = () => {
    setIsMetricsExpanded(!isMetricsExpanded);
  };

  const handleActionSelect = (actionId) => {
    setSelectedAction(actionId);
  };

  const handleActionHover = (actionId) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    
    const timeout = setTimeout(() => {
      setHoveredAction(actionId);
    }, 2000);
    
    setHoverTimeout(timeout);
  };

  const handleActionLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setHoveredAction(null);
  };

  const gameMetrics = {
    cash: '$1000',
    morale: 'Motivated',
    mediaTraction: '05/100',
    equitySplit: '100% with you',
    dreamersCount: '01',
    daysPassed: 'Day 1'
  };

  const actions = {
    'market-research': {
      title: 'Market Research',
      icon: '🔍',
      effects: {
        cash: -200,
        days: 5,
        insights: '+10/100'
      },
      description: 'Aliqua nisl nostrud est qui. Aliqua exercitation id culpa sint sint dolore.'
    },
    'investors-vcs': {
      title: 'Investors & VCs',
      icon: '💰',
      effects: {
        cash: +1000,
        equity: '-10%',
        days: 5
      },
      description: 'Aliqua nisl nostrud est qui. Aliqua exercitation id culpa sint sint dolore.'
    },
    'hire-founding-team': {
      title: 'Hire Founding Team',
      icon: '👥',
      effects: {
        cash: -200,
        equity: '-6%',
        days: 5,
        dreamers: '+3/5'
      },
      description: 'Aliqua nisl nostrud est qui. Aliqua exercitation id culpa sint sint dolore.'
    },
    'release-media-pr': {
      title: 'Release media PR',
      icon: '📢',
      effects: {
        cash: -100,
        morale: 'Tired',
        days: 5,
        media: '+10/100'
      },
      description: 'Aliqua nisl nostrud est qui. Aliqua exercitation id culpa sint sint dolore.'
    }
  };

  return (
    <div className="day1-screen">
      <div className="day1-container">
        <div className="game-header">
          <img 
            src={`${process.env.PUBLIC_URL}/logo.png`} 
            alt="Logo" 
            className="logo"
          />
        </div>

        {/* Main Game Content */}
        <div className="game-content">
          {/* Left Side - Character */}
          <div className="character-section">
            <img 
              src={`${process.env.PUBLIC_URL}/girl-illustration.png`} 
              alt="Character" 
              className="character-image"
            />
          </div>

          {/* Right Side - Scenario and Actions */}
          <div className="scenario-section">
            <div className="scenario-header">
              <h2 className="scenario-title handjet-font">
                Scenario: Proldent tempor tempor cillum et. Ipsum ullamco voluptate adipisicing. Irure ad dolore dolor fugiat proldent ipsum commodo amet fugiat.
              </h2>
            </div>

            <div className="actions-container">
              {/* Action Cards Grid */}
              <div className="action-cards">
                {Object.entries(actions).map(([actionId, action]) => (
                  <div 
                    key={actionId}
                    className={`action-card ${selectedAction === actionId ? 'selected' : ''}`}
                    onClick={() => handleActionSelect(actionId)}
                    onMouseEnter={() => handleActionHover(actionId)}
                    onMouseLeave={handleActionLeave}
                  >
                    <div className="action-icon">{action.icon}</div>
                    <div className="action-title handjet-font">{action.title}</div>
                  </div>
                ))}
              </div>

              {/* Action Preview */}
              <div className={`action-preview ${hoveredAction ? 'show' : ''}`}>
                <div className="preview-header">
                  <span className="preview-icon">{actions[hoveredAction || selectedAction].icon}</span>
                  <span className="preview-title handjet-font">{actions[hoveredAction || selectedAction].title}</span>
                </div>
                
                <div className="preview-effects">
                  {actions[hoveredAction || selectedAction].effects.cash && (
                    <div className="effect-item">
                      <span className="effect-icon">💰</span>
                      <span className="effect-label handjet-font">Cash in the bank</span>
                      <span className={`effect-value handjet-font ${actions[hoveredAction || selectedAction].effects.cash > 0 ? 'positive' : 'negative'}`}>
                        {actions[hoveredAction || selectedAction].effects.cash > 0 ? '+' : ''}{actions[hoveredAction || selectedAction].effects.cash}
                      </span>
                    </div>
                  )}
                  
                  {actions[hoveredAction || selectedAction].effects.days && (
                    <div className="effect-item">
                      <span className="effect-icon">📅</span>
                      <span className="effect-label handjet-font">Days passed</span>
                      <span className="effect-value handjet-font positive">+{actions[hoveredAction || selectedAction].effects.days} days</span>
                    </div>
                  )}

                  {actions[hoveredAction || selectedAction].effects.insights && (
                    <div className="effect-item">
                      <span className="effect-icon">🧠</span>
                      <span className="effect-label handjet-font">Insights</span>
                      <span className="effect-value handjet-font positive">{actions[hoveredAction || selectedAction].effects.insights}</span>
                    </div>
                  )}

                  {actions[hoveredAction || selectedAction].effects.equity && (
                    <div className="effect-item">
                      <span className="effect-icon">💎</span>
                      <span className="effect-label handjet-font">Equity split</span>
                      <span className="effect-value handjet-font negative">{actions[hoveredAction || selectedAction].effects.equity}</span>
                    </div>
                  )}

                  {actions[hoveredAction || selectedAction].effects.dreamers && (
                    <div className="effect-item">
                      <span className="effect-icon">👥</span>
                      <span className="effect-label handjet-font">Dreamers count</span>
                      <span className="effect-value handjet-font positive">{actions[hoveredAction || selectedAction].effects.dreamers}</span>
                    </div>
                  )}

                  {actions[hoveredAction || selectedAction].effects.morale && (
                    <div className="effect-item">
                      <span className="effect-icon">😊</span>
                      <span className="effect-label handjet-font">Your morale</span>
                      <span className="effect-value handjet-font negative">{actions[hoveredAction || selectedAction].effects.morale}</span>
                    </div>
                  )}

                  {actions[hoveredAction || selectedAction].effects.media && (
                    <div className="effect-item">
                      <span className="effect-icon">🔍</span>
                      <span className="effect-label handjet-font">Media traction</span>
                      <span className="effect-value handjet-font positive">{actions[hoveredAction || selectedAction].effects.media}</span>
                    </div>
                  )}
                </div>

                <div className="preview-description">
                  <p className="handjet-font">{actions[hoveredAction || selectedAction].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Metrics Container */}
        <div className={`metrics-container ${isMetricsExpanded ? 'expanded' : 'collapsed'}`}>
          <div className="metrics-toggle" onClick={toggleMetrics}>
            <span className="metrics-label handjet-font">
              L0 metrics {isMetricsExpanded ? '↓' : '↑'}
            </span>
          </div>
          
          {isMetricsExpanded && (
            <div className="metrics-content">
              <div className="metric-item">
                <span className="metric-icon">💰</span>
                <span className="metric-label handjet-font">Cash in the bank</span>
                <span className="metric-value handjet-font">{gameMetrics.cash}</span>
              </div>
              
              <div className="metric-item">
                <span className="metric-icon">😊</span>
                <span className="metric-label handjet-font">Your morale</span>
                <span className="metric-value handjet-font">{gameMetrics.morale}</span>
              </div>
              
              <div className="metric-item">
                <span className="metric-icon">🔍</span>
                <span className="metric-label handjet-font">Media traction</span>
                <span className="metric-value handjet-font">{gameMetrics.mediaTraction}</span>
              </div>
              
              <div className="metric-item">
                <span className="metric-icon">🤝</span>
                <span className="metric-label handjet-font">Equity split</span>
                <span className="metric-value handjet-font">{gameMetrics.equitySplit}</span>
              </div>
              
              <div className="metric-item">
                <span className="metric-icon">👥</span>
                <span className="metric-label handjet-font">Dreamers count</span>
                <span className="metric-value handjet-font">{gameMetrics.dreamersCount}</span>
              </div>
              
              <div className="metric-item">
                <span className="metric-icon">🗓️</span>
                <span className="metric-label handjet-font">Days passed</span>
                <span className="metric-value handjet-font">{gameMetrics.daysPassed}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Day1Screen; 