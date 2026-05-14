import React, { useState, useRef, useEffect } from 'react';
import './Activity2.css';

function Activity2() {
  const [name, setName] = useState("");
  const [timeGreeting, setTimeGreeting] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();

    const hour = new Date().getHours();

    if (hour < 12) setTimeGreeting("Good Morning");
    else if (hour < 18) setTimeGreeting("Good Afternoon");
    else setTimeGreeting("Good Evening");
  }, []);

  return (
    <div className="lp-container">

      <nav className="lp-nav">
        <div className="lp-logo">
          Activity <span>2</span>
        </div>

        <ul className="lp-nav-links">
          <li><a href="#features">Interactive</a></li>
          <li><a href="#about">Greeting App</a></li>
          <li><a className="lp-nav-cta" href="#contact">React Activity</a></li>
        </ul>
      </nav>

      <header className="lp-hero">
        <div className="lp-hero-content">

          <span className="lp-badge">useState + useRef + useEffect</span>

          <h1>
            Greeting <br />
            <span>Machine App</span>
          </h1>

          <p>
            Type your name below and receive a dynamic greeting based on time of day.
          </p>

          <input
            ref={inputRef}
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="lp-input"
          />

          {name && (
            <div className="lp-greeting">
              <h2>
                {timeGreeting}, <span>{name}</span> ✨
              </h2>
            </div>
          )}

        </div>
      </header>

      <section id="features" className="lp-features">
        <h2 className="lp-section-title">React Concepts Used</h2>

        <div className="lp-grid">

          <div className="lp-card">
            <h3>useState</h3>
            <p>Handles dynamic input value.</p>
          </div>

          <div className="lp-card">
            <h3>useRef</h3>
            <p>Auto-focuses input on load.</p>
          </div>

          <div className="lp-card">
            <h3>useEffect</h3>
            <p>Sets greeting based on time.</p>
          </div>

        </div>
      </section>

      <section id="contact" className="lp-cta-section">
        <div className="lp-cta-card">
          <h2>Interactive React Activity</h2>
          <p>Simple real-time user interaction using React hooks.</p>
        </div>
      </section>

      <footer className="lp-footer">
        <p>© 2026 | Presented by Group 9</p>
      </footer>

    </div>
  );
}

export default Activity2;