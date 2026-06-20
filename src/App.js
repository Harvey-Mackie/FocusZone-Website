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
      {/* Navigation */}
      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-brand">
          <span className="nav-logo" aria-hidden="true">⌛</span>
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
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <Link to="/FocusZone-Website/privacy" onClick={() => setMobileMenuOpen(false)}>Privacy</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" role="banner">
        <div className="hero-badge">✨ Now on the App Store</div>
        <h1 className="hero-title">Block Distractions. Build Focus.</h1>
        <h2 className="tagline">The iOS app that actually blocks distracting apps — not just nudges you.</h2>
        <p className="hero-description">
          No "Ignore Limit" button. No guilt. Just focus. ZenZone uses iOS Screen Time API
          to enforce real blocks, so you can build the habits you actually want.
        </p>
        <div className="hero-buttons">
          <a
            className="app-store-link"
            href="https://apps.apple.com/app/zenzone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download ZenZone on the App Store"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="app-store-badge"
            />
          </a>
        </div>
        <div className="hero-mockups">
          <img src={AppImage1} alt="ZenZone app screenshot showing the main dashboard with screen time metrics" className="mockup-img" loading="lazy" />
          <img src={AppImage2} alt="ZenZone app screenshot showing routine scheduling and app blocking settings" className="mockup-img" loading="lazy" />
          <img src={AppImage3} alt="ZenZone app screenshot showing deep work session timer and progress" className="mockup-img" loading="lazy" />
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features" aria-labelledby="features-heading">
        <h2 id="features-heading" className="section-title">Why ZenZone?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true">🚫</div>
            <h3>Recurring Routines</h3>
            <p>Set daily or weekly routines to block distracting apps automatically. "No Instagram before noon" — set it once, never think about it again.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true">📊</div>
            <h3>Screen Time Reports</h3>
            <p>See exactly where your time goes. Daily breakdowns by app, category, and trend over weeks. Data that actually changes behavior.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true">⏱️</div>
            <h3>Timed Breaks</h3>
            <p>Need a quick break? Set a timer, unblock for 15 minutes, and the app re-blocks automatically when time's up. No willpower required.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true">🌙</div>
            <h3>Dark Mode</h3>
            <p>Easy on the eyes. ZenZone matches your system dark mode preference automatically. No jarring bright screens at night.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true">🔒</div>
            <h3>Privacy First</h3>
            <p>All data stays on your device. No accounts, no cloud sync, no tracking. Your screen time data is yours alone.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true">✅</div>
            <h3>Simple Setup</h3>
            <p>8-step onboarding gets you blocking in under 2 minutes. No complex configuration. No 47 settings to tune. Just works.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing" aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="section-title">Simple Pricing</h2>
        <p className="pricing-subtitle">No subscription trap. No auto-renew surprises. Just focus.</p>
        <div className="pricing-grid">
          <div className="pricing-card">
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
          <div className="pricing-card pricing-highlight">
            <div className="pricing-badge">Most Popular</div>
            <h3>Premium</h3>
            <div className="price">£2.99<span>/month</span></div>
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
              className="pricing-button pricing-button-primary"
            >
              Get Premium
            </a>
          </div>
          <div className="pricing-card">
            <h3>Lifetime</h3>
            <div className="price">£14.99<span> one-time</span></div>
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
      <section id="faq" className="faq" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          <details className="faq-item">
            <summary>Does it work with all apps?</summary>
            <p>ZenZone uses iOS Screen Time API — the same system Apple uses for Screen Time limits. It can block any app that appears in Screen Time, which covers virtually everything except system apps (Settings, Phone, etc.).</p>
          </details>
          <details className="faq-item">
            <summary>Can I bypass the block?</summary>
            <p>Unlike Apple's built-in Screen Time limits (which have an "Ignore Limit" button), ZenZone uses the device-level blocking API. There is no bypass within the app. You'd need to delete the app entirely to remove the block.</p>
          </details>
          <details className="faq-item">
            <summary>Is my data private?</summary>
            <p>Yes. All data stays on your device. ZenZone does not upload anything to the cloud, does not require an account, and does not track you. We literally cannot see your data because we never receive it.</p>
          </details>
          <details className="faq-item">
            <summary>What if I need a break?</summary>
            <p>Premium users can set timed breaks — unblock for 15, 30, or 60 minutes, and the app automatically re-blocks when time's up. Free users can manually disable a routine temporarily.</p>
          </details>
          <details className="faq-item">
            <summary>Does my subscription auto-renew?</summary>
            <p>Monthly subscriptions auto-renew through the App Store. You can cancel anytime in Settings → Apple ID → Subscriptions. Lifetime is one-time, no renewals. Free tier is forever free.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo" aria-hidden="true">⌛</span>
            <span>ZenZone</span>
          </div>
          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <Link to="/FocusZone-Website/privacy">Privacy Policy</Link>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">Terms of Use (EULA)</a>
            <a href="https://github.com/Harvey-Mackie/ZenZone" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:Harveymackie@outlook.com">Support</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ZenZone. Built with ❤️ in London.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
