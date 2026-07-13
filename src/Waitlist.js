import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, FORM_ENDPOINT } from './config';

const isFormConfigured = (endpoint) =>
  endpoint && !endpoint.includes('YOUR_FORM_ID');

function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fallback, setFallback] = useState(null);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    setLoading(true);
    setFallback(null);

    if (isFormConfigured(FORM_ENDPOINT)) {
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: trimmed,
            message: 'Add me to the ZenZone waitlist.',
          }),
        });
        if (response.ok) {
          setSubmitted(true);
          setLoading(false);
          return;
        }
      } catch {
        // Fall through to the fallback path below.
      }
    }

    const copied = await copyToClipboard(trimmed);
    const mailto = `mailto:${CONTACT_EMAIL}?subject=ZenZone%20Waitlist&body=${encodeURIComponent(
      `Hi ZenZone team,\n\nPlease add me to the ZenZone waitlist.\n\nEmail: ${trimmed}\n\nThanks!`
    )}`;

    setLoading(false);
    setSubmitted(true);
    setFallback({
      copied,
      mailto,
      message: copied
        ? "We've copied your email to the clipboard. Tap the button below to send your request, or paste it into an email to us."
        : "We couldn't save your email automatically. Tap the button below to send your request.",
    });
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
            {fallback ? (
              <>
                <p>{fallback.message}</p>
                <a
                  href={fallback.mailto}
                  className="waitlist-button"
                  style={{ marginTop: '1rem', display: 'inline-block', textAlign: 'center' }}
                >
                  Send waitlist request
                </a>
              </>
            ) : (
              <p>Thanks! You're on the list. We'll email you at {email} as soon as ZenZone is available.</p>
            )}
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
              disabled={loading}
            />
            <button type="submit" className="waitlist-button" disabled={loading}>
              {loading ? 'Joining...' : 'Join the waitlist'}
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
