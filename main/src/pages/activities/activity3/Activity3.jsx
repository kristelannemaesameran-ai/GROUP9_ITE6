import React, { useState, useEffect } from 'react';
import './Activity3.css';

const Activity3 = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.title = isDark
      ? "Activity 3 - Dark Mode"
      : "Activity 3 - Light Mode";
  }, [isDark]);

  return (
    <div className={`lp-container ${isDark ? "dark" : "light"}`}>

      <nav className="lp-nav">
        <div className="lp-logo">
          Activity <span>3</span>
        </div>

        <ul className="lp-nav-links">
          <li><a href="#features">Theme</a></li>
          <li><a href="#about">About</a></li>
          <li>
            <button className="lp-nav-cta" onClick={() => setIsDark(!isDark)}>
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </li>
        </ul>
      </nav>

      <header className="lp-hero">

        <div className="lp-hero-content">

          <span className="lp-badge">
            React Theme Switcher
          </span>

          <h1>
            Theme <br />
            <span>Switcher</span>
          </h1>

          <p>
            Toggle between light and dark mode with proper brightness control.
          </p>

          <div className="lp-card theme-card">

            <div className="lp-icon">
              {isDark ? "🌙 Dark Mode Active" : "💡 Light Mode Active"}
            </div>

            <h3>
              {isDark ? "Dark Interface" : "Light Interface"}
            </h3>

            <p>
              {isDark
                ? "Low brightness for focus and night use."
                : "Bright and clean interface for daytime use."
              }
            </p>

            <button className="lp-button" onClick={() => setIsDark(!isDark)}>
              Switch to {isDark ? "Light" : "Dark"}
            </button>

          </div>

        </div>

      </header>

      <section id="features" className="lp-features">

        <h2 className="lp-section-title">React Concepts Used</h2>

        <div className="lp-grid">

          <div className="lp-card">
            <h3>useState</h3>
            <p>Controls theme state switching.</p>
          </div>

          <div className="lp-card">
            <h3>Conditional Styling</h3>
            <p>Changes UI brightness based on mode.</p>
          </div>

          <div className="lp-card">
            <h3>UI Theme System</h3>
            <p>Applies light and dark visual system properly.</p>
          </div>

        </div>

      </section>

      <section id="about" className="lp-cta-section">

        <div className="lp-cta-card">
          <h2>Activity 3 Complete</h2>
          <p>Proper light and dark mode implementation with real visual contrast.</p>
        </div>

      </section>

      <footer className="lp-footer">
        <p>© 2026 | Presented by Group 9</p>
      </footer>

    </div>
  );
};

export default Activity3;