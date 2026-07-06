import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, WAITLIST_MAILTO } from './config';

function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    const mailto = `${WAITLIST_MAILTO}&body=${encodeURIComponent(
      `Hi ZenZone team,\n\nPlease add me to the ZenZone waitlist.\n\nEmail: ${trimmed}\n\nThanks!`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="app">
      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-brand">
          <span className="nav-logo" aria-hidden="true">🧘</span>
          <Link to="/" className="nav-title">ZenZone</Link>
        </div>
      </nav>

      <main className="waitlist-main">
        <div className="hero-badge">Coming soon to the App Store</div>
        <h1 className="waitlist-title">Be the first to find focus.</h1>
        <p className="waitlist-description">
          ZenZone is launching soon. Leave your email and we'll let you know the moment it's available on the App Store.
        </p>

        {submitted ? (
          <div className="waitlist-success" role="status">
            <p>Thanks! Your email client should open with a pre-filled message. If it doesn't, contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
          </div>
        ) : (
          <form className="waitlist-form" onSubmit={handleSubmit} aria-label="Waitlist signup form">
            <label htmlFor="waitlist-email" className="visually-hidden">Email address</label>
            <input
              id="waitlist-email"
              type="email"
              className="waitlist-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />
            <button type="submit" className="waitlist-button">
              Join the waitlist
            </button>
          </form>
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ZenZone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Waitlist;
