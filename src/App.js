import React from 'react';
import './App.css';
import AppImage1 from './images/appimage1.jpg';
import AppImage2 from './images/appimage2.jpg';
import AppImage3 from './images/appimage3.jpg';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-brand">
          <span className="nav-logo" aria-hidden="true">🧘</span>
          <span className="nav-title">ZenZone</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <Link to="/privacy">Privacy</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" role="banner">
        <h1 className="hero-title">
          <span className="hero-emoji" aria-hidden="true">🧘</span>
          <br />
          Welcome to ZenZone
        </h1>
        <h2 className="tagline">Find focus in a distracted world</h2>
        <p className="hero-description">
          ZenZone is a minimalistic productivity app designed to help you reduce distractions,
          enhance concentration, and achieve mindfulness through structured routines, screen time
          management, and personalized insights.
        </p>
        <div className="hero-buttons">
          <a
            className="app-store-button"
            href="https://apps.apple.com/app/zenzone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download ZenZone on the App Store"
          >
            <span className="app-store-icon" aria-hidden="true">📱</span>
            Download on the App Store
          </a>
          <span className="coming-soon-badge">Coming soon</span>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features" aria-labelledby="features-heading">
        <h2 id="features-heading">Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true">📊</div>
            <h3>Screen Time Insights</h3>
            <p>Monitor your daily usage across apps and understand where your time goes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true">🔄</div>
            <h3>Recurring Routines</h3>
            <p>Schedule focused time by blocking distracting apps during work, study, or rest periods.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true">📚</div>
            <h3>Deep Work Blocks</h3>
            <p>Create uninterrupted sessions to get the most out of your study and work time.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true">🧘</div>
            <h3>Mindful Breaks</h3>
            <p>Guided break reminders to keep you refreshed and prevent burnout.</p>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="screenshots" aria-labelledby="screenshots-heading">
        <h2 id="screenshots-heading">See ZenZone in Action</h2>
        <div className="screenshots-grid">
          <img src={AppImage1} alt="ZenZone app screenshot showing the main dashboard with screen time metrics" loading="lazy" />
          <img src={AppImage2} alt="ZenZone app screenshot showing routine scheduling and app blocking settings" loading="lazy" />
          <img src={AppImage3} alt="ZenZone app screenshot showing deep work session timer and progress" loading="lazy" />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works" aria-labelledby="how-it-works-heading">
        <h2 id="how-it-works-heading">How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number" aria-hidden="true">1</div>
            <h3>Create Your Routine</h3>
            <p>Set up recurring focus blocks that match your daily schedule.</p>
          </div>
          <div className="step">
            <div className="step-number" aria-hidden="true">2</div>
            <h3>Block Distracting Apps</h3>
            <p>ZenZone gently blocks apps you choose during focus time.</p>
          </div>
          <div className="step">
            <div className="step-number" aria-hidden="true">3</div>
            <h3>Take Mindful Breaks</h3>
            <p>Get reminded to rest and reflect between deep work sessions.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" aria-labelledby="testimonials-heading">
        <h2 id="testimonials-heading">What Users Say</h2>
        <div className="testimonials-grid">
          <blockquote className="testimonial">
            <p>"ZenZone helped me cut my screen time in half. I finally feel in control of my day."</p>
            <footer>— Alex M.</footer>
          </blockquote>
          <blockquote className="testimonial">
            <p>"The deep work blocks are a game changer. My productivity has never been higher."</p>
            <footer>— Jamie R.</footer>
          </blockquote>
          <blockquote className="testimonial">
            <p>"Simple, beautiful, and effective. ZenZone is the focus app I have been looking for."</p>
            <footer>— Taylor S.</footer>
          </blockquote>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing" aria-labelledby="pricing-heading">
        <h2 id="pricing-heading">Pricing</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Free</h3>
            <div className="price">$0<span>/month</span></div>
            <ul>
              <li>Screen time tracking</li>
              <li>1 focus routine</li>
              <li>Basic app blocking</li>
              <li>Daily insights</li>
            </ul>
          </div>
          <div className="pricing-card pricing-highlight">
            <div className="pricing-badge">Most Popular</div>
            <h3>Premium</h3>
            <div className="price">$4.99<span>/month</span></div>
            <ul>
              <li>Unlimited routines</li>
              <li>Advanced app blocking</li>
              <li>Deep work analytics</li>
              <li>Custom break reminders</li>
              <li>Priority support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq" aria-labelledby="faq-heading">
        <h2 id="faq-heading">Frequently Asked Questions</h2>
        <div className="faq-list">
          <details className="faq-item">
            <summary>Is ZenZone free to use?</summary>
            <p>Yes! ZenZone offers a free tier with core features. Premium unlocks unlimited routines and advanced analytics.</p>
          </details>
          <details className="faq-item">
            <summary>Does ZenZone collect my data?</summary>
            <p>No. All your data stays on your device. We do not collect, store, or share any personal information.</p>
          </details>
          <details className="faq-item">
            <summary>Which apps can ZenZone block?</summary>
            <p>You can choose any apps on your iPhone to block during focus sessions. You are always in control.</p>
          </details>
          <details className="faq-item">
            <summary>Can I cancel Premium anytime?</summary>
            <p>Yes, you can cancel your Premium subscription at any time through your App Store settings.</p>
          </details>
          <details className="faq-item">
            <summary>Will ZenZone work on iPad?</summary>
            <p>ZenZone is optimized for iPhone. iPad support is on our roadmap.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo" aria-hidden="true">🧘</span>
            <span>ZenZone</span>
          </div>
          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <Link to="/privacy">Privacy Policy</Link>
            <a href="mailto:Harveymackie@outlook.com">Contact</a>
          </div>
          <div className="footer-social" aria-label="Social links">
            <a href="https://twitter.com/zenzoneapp" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
            <a href="https://instagram.com/zenzoneapp" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ZenZone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
