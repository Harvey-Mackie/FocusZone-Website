import React from 'react';
import './App.css';
import AppImage1 from './images/appimage1.jpg'
import AppImage2 from './images/appimage2.jpg'
import AppImage3 from './images/appimage3.jpg'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <header>
        <h1>⌛</h1>
        <h1>Welcome to FocusZone</h1>
        <h2 className="tagline">Become focused in a distracted world</h2>
        <p>
          FocusZone is a minimalistic productivity app designed to help you reduce distractions,
          enhance concentration, and achieve mindfulness through structured routines, screen time
          management, and personalized insights.
        </p>
        <button disabled={true} className="contact-button" onClick={() => window.location = 'mailto:Harveymackie@outlook.com'}>
          Download (Coming soon)
        </button>
        <Link to="/privacy">
          <button className="contact-button">
            View Privacy Policy
          </button>
        </Link>

      </header>

      <section className="features">
        <h2>Features</h2>
        <div className="alert-box">
          <strong>📊 View Your Screen Time Metrics:</strong> Monitor your daily usage across apps and understand where your time goes.
        </div>
        <div className="alert-box">
          <strong>🔄 Set Recurring Routines to Block Apps:</strong> Schedule focused time by blocking distracting apps during work, study, or rest periods.
        </div>
        <div className="alert-box">
          <strong>📚 Create Deep Work Blocks:</strong> When studying or working, create uninterrupted sessions to get the most out of your time.
        </div>
      </section>


      <section className="mockups">
        <div className="image-container">
          <img src={AppImage1}/>
          <img src={AppImage2}/>
          <img src={AppImage3}/>
        </div>
      </section>

      <footer>
        <button className="contact-button" onClick={() => window.location = 'mailto:Harveymackie@outlook.com'}>
          Contact Us
        </button>
      </footer>
    </div>
  );
}

export default App;
