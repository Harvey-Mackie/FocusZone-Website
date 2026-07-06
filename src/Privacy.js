import React from 'react';

function Privacy() {
  return (
    <div className="app">
      <header>
        <h1>🧘</h1>
        <h1>ZenZone — Privacy Policy</h1>
        <h2 className="tagline">Your focus, your data, your control</h2>
        <p>Thank you for using <strong>ZenZone</strong>. Your privacy is important to us. This Privacy Policy explains how we handle your data and your rights regarding it.</p>

        <h2>Data Collection and Storage</h2>
        <p><strong>ZenZone does not collect, store, or share your data with any external servers or third parties.</strong> All data, including your routines, app blocking preferences, and screen time metrics, is stored locally on your device. This ensures that you retain full control over your information.</p>

        <h2>How Your Data is Used</h2>
        <p>All data managed by ZenZone is used solely for the purpose of providing app functionality, including:</p>
        <ul>
          <li>Tracking and displaying your screen time metrics.</li>
          <li>Scheduling app blocking routines.</li>
          <li>Enabling deep work sessions and focus blocks.</li>
        </ul>
        <p>None of this data leaves your device or is accessible to us or any third party.</p>

        <h2>Third-Party Services</h2>
        <p>ZenZone does not integrate with third-party analytics, advertising platforms, or any external services that collect user data. All functionality is designed to operate exclusively on your device.</p>

        <h2>Your Privacy Rights</h2>
        <p>Since no data is collected or stored externally, there is no information to request, delete, or share. You have full control over your data within the app, and you can delete it at any time by uninstalling the app from your device.</p>

        <h2>Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy to reflect changes in the app or legal requirements. Any updates will be made available within the app or on our website, along with the effective date of the changes.</p>
      </header>

      <footer className="privacy-footer">
        <a className="contact-button" href="mailto:support@zenzone.app">Contact Us</a>
      </footer>
    </div>
  );
}

export default Privacy;
