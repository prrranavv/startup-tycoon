import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import SetupScreen from './components/SetupScreen';
import IntroductionScreen from './components/IntroductionScreen';
import Day1Screen from './components/Day1Screen';
import './App.css';

function App() {
  console.log('App component loaded');
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" replace />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/start-up" element={<SetupScreen />} />
          <Route path="/introduction" element={<IntroductionScreen />} />
          <Route path="/day-1" element={<Day1Screen />} />
          <Route path="*" element={
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              fontSize: '24px',
              fontFamily: 'Arial, sans-serif'
            }}>
              <div>
                <h1>Startup Tycoon</h1>
                <p>Loading... If you see this, the app is working!</p>
                <p>Current path: {window.location.pathname}</p>
                <a href="/welcome" style={{color: 'blue', textDecoration: 'underline'}}>
                  Go to Welcome Page
                </a>
              </div>
            </div>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App; 