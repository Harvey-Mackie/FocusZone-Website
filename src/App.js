import React from 'react';
import './App.css';
import AppImage1 from './images/appimage1.jpg'
import AppImage2 from './images/appimage2.jpg'
import AppImage3 from './images/appimage3.jpg'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
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
        </div>
      </header>

      {/* Features Section */}
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
          </div>
        </div>
      </section>

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
        </div>
      </footer>
    </div>
  );
}

export default App;
