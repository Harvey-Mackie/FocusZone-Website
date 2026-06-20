import React, { useState } from 'react';
import './App.css';
import AppImage1 from './images/appimage1.jpg';
import AppImage2 from './images/appimage2.jpg';
import AppImage3 from './images/appimage3.jpg';
import { Link } from 'react-router-dom';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="app">
<<<<<<< HEAD
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">⌛ ZenZone</h1>
          <h2 className="hero-tagline">Block Distractions. Build Focus.</h2>
          <p className="hero-description">
            The iOS app that actually blocks distracting apps — not just nudges you.
            No "Ignore Limit" button. No guilt. Just focus.
          </p>
          <div className="hero-buttons">
            <a 
              href="https://apps.apple.com/app/zenzone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="app-store-button"
            >
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="Download on the App Store"
                className="app-store-badge"
              />
            </a>
            <Link to="/FocusZone-Website/privacy" className="privacy-link">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="hero-mockups">
          <img src={AppImage1} alt="ZenZone app screenshot" className="mockup-img" />
          <img src={AppImage2} alt="ZenZone app screenshot" className="mockup-img" />
          <img src={AppImage3} alt="ZenZone app screenshot" className="mockup-img" />
=======
      {/* Navigation */}
      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-brand">
          <span className="nav-logo" aria-hidden="true">🧘</span>
          <span className="nav-title">ZenZone</span>
        </div>
        <button
          className="mobile-menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <Link to="/privacy" onClick={() => setMobileMenuOpen(false)}>Privacy</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" role="banner">
        <div className="hero-badge">✨ Now on the App Store</div>
        <h1 className="hero-title">
          <span className="hero-emoji" aria-hidden="true">🧘</span>
          <br />
          Find Focus with ZenZone
        </h1>
        <h2 className="tagline">Reduce screen time. Build mindful routines. Reclaim your day.</h2>
        <p className="hero-description">
          ZenZone is a minimalistic iOS productivity app designed to help you reduce distractions,
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
            <svg className="app-store-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.5 1.3-.02 2.52.87 3.31.87.79 0 2.27-1.08 3.83-.92.65.03 2.48.26 3.65 1.98-.09.06-2.18 1.28-2.16 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.22-1.97 1.08-3.11-1.05.05-2.31.7-3.06 1.53-.67.74-1.26 1.93-1.1 3.1 1.17.09 2.36-.66 3.08-1.52z"/>
            </svg>
            Download on the App Store
          </a>
          <span className="coming-soon-badge">Coming soon</span>
>>>>>>> origin/main
        </div>
      </header>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="features">
        <h2 className="section-title">Why ZenZone?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚫</div>
            <h3>Recurring Routines</h3>
            <p>Set daily or weekly routines to block distracting apps automatically. "No Instagram before noon" — set it once, never think about it again.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Screen Time Reports</h3>
            <p>See exactly where your time goes. Daily breakdowns by app, category, and trend over weeks. Data that actually changes behavior.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏱️</div>
            <h3>Timed Breaks</h3>
            <p>Need a quick break? Set a timer, unblock for 15 minutes, and the app re-blocks automatically when time's up. No willpower required.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌙</div>
            <h3>Dark Mode</h3>
            <p>Easy on the eyes. ZenZone matches your system dark mode preference automatically. No jarring bright screens at night.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Privacy First</h3>
            <p>All data stays on your device. No accounts, no cloud sync, no tracking. Your screen time data is yours alone.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✅</div>
            <h3>Simple Setup</h3>
            <p>8-step onboarding gets you blocking in under 2 minutes. No complex configuration. No 47 settings to tune. Just works.</p>
=======
      <section id="features" className="features" aria-labelledby="features-heading">
        <h2 id="features-heading">Features</h2>
        <p className="section-subtitle">Everything you need to stay focused and productive.</p>
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
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true">🛡️</div>
            <h3>App Blocking</h3>
            <p>Choose which apps to block during focus sessions. You are always in control.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true">📈</div>
            <h3>Progress Tracking</h3>
            <p>Visualize your focus streaks and screen time trends over weeks and months.</p>
>>>>>>> origin/main
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Pricing Section */}
      <section className="pricing">
        <h2 className="section-title">Simple Pricing</h2>
        <p className="pricing-subtitle">No subscription trap. No auto-renew surprises. Just focus.</p>
        <div className="pricing-grid">
          <div className="pricing-card free">
            <h3>Free</h3>
            <div className="price">£0</div>
            <ul className="pricing-features">
              <li>1 routine</li>
              <li>Full screen time reports</li>
              <li>Dark mode</li>
              <li>Privacy-first</li>
            </ul>
            <a 
              href="https://apps.apple.com/app/zenzone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pricing-button"
            >
              Download Free
            </a>
          </div>
          <div className="pricing-card premium">
            <div className="badge">Most Popular</div>
            <h3>Premium</h3>
            <div className="price">£2.99<span class="period">/month</span></div>
            <ul className="pricing-features">
              <li>Unlimited routines</li>
              <li>Timed breaks</li>
              <li>Full screen time reports</li>
              <li>Dark mode</li>
              <li>Privacy-first</li>
            </ul>
            <a 
              href="https://apps.apple.com/app/zenzone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pricing-button primary"
            >
              Get Premium
            </a>
          </div>
          <div className="pricing-card lifetime">
            <h3>Lifetime</h3>
            <div className="price">£14.99<span class="period">one-time</span></div>
            <ul className="pricing-features">
              <li>Everything in Premium</li>
              <li>Pay once, own forever</li>
              <li>No auto-renewals</li>
              <li>All future updates</li>
            </ul>
            <a 
              href="https://apps.apple.com/app/zenzone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pricing-button"
            >
              Get Lifetime
            </a>
          </div>
        </div>
        <p className="pricing-note">
          Competitor apps charge £4.99–£6.99/month. We think focus shouldn't cost more than a coffee.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Does it work with all apps?</h3>
            <p>ZenZone uses iOS Screen Time API — the same system Apple uses for Screen Time limits. It can block any app that appears in Screen Time, which covers virtually everything except system apps (Settings, Phone, etc.).</p>
          </div>
          <div className="faq-item">
            <h3>Can I bypass the block?</h3>
            <p>Unlike Apple's built-in Screen Time limits (which have an "Ignore Limit" button), ZenZone uses the device-level blocking API. There is no bypass within the app. You'd need to delete the app entirely to remove the block.</p>
          </div>
          <div className="faq-item">
            <h3>Is my data private?</h3>
            <p>Yes. All data stays on your device. ZenZone does not upload anything to the cloud, does not require an account, and does not track you. We literally cannot see your data because we never receive it.</p>
          </div>
          <div className="faq-item">
            <h3>What if I need a break?</h3>
            <p>Premium users can set timed breaks — unblock for 15, 30, or 60 minutes, and the app automatically re-blocks when time's up. Free users can manually disable a routine temporarily.</p>
          </div>
          <div className="faq-item">
            <h3>Does my subscription auto-renew?</h3>
            <p>Monthly subscriptions auto-renew through the App Store. You can cancel anytime in Settings → Apple ID → Subscriptions. Lifetime is one-time, no renewals. Free tier is forever free.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>⌛ ZenZone</h3>
            <p>Block distractions. Build focus.</p>
          </div>
          <div className="footer-links">
            <h4>Links</h4>
            <Link to="/FocusZone-Website/privacy">Privacy Policy</Link>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">Terms of Use (EULA)</a>
          </div>
          <div className="footer-links">
            <h4>Connect</h4>
            <a href="https://github.com/Harvey-Mackie/ZenZone" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:Harveymackie@outlook.com">Support</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 ZenZone. Built with ❤️ in London.</p>
=======
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
        <p className="section-subtitle">Get started in three simple steps.</p>
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
        <p className="section-subtitle">Join thousands who have transformed their productivity.</p>
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
        <p className="section-subtitle">Start free. Upgrade when you are ready.</p>
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
>>>>>>> origin/main
        </div>
      </footer>
    </div>
  );
}

export default App;
