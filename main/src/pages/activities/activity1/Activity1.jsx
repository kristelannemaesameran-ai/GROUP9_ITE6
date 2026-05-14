import React from 'react';
import './Activity1.css';

const Activity1 = () => {
  return (
    <div className="lp-container">

      <nav className="lp-nav">
        <div className="lp-logo">
          Instructor: <span>Charl Alvarado</span>
        </div>

        <ul className="lp-nav-links">
          <li><a href="#features">Group Number: 9</a></li>
          <li><a href="#about">Date: March 25, 2026</a></li>
          <li><a href="#contact" className="lp-nav-cta">First Laboratory</a></li>
        </ul>
      </nav>

      <header className="lp-hero">
        <div className="lp-hero-content">
          <span className="lp-badge">Creative Group Project 2026</span>

          <h1>
            Welcome to Our <br />
            <span>Activity 1 Landing Page</span>
          </h1>

          <p>
            A modern and creative landing page created by Group 9
            with a smooth and elegant design that combines colors suitable
            for both feminine and masculine aesthetics.
          </p>
        </div>
      </header>

      <section id="features" className="lp-features">
        <h2 className="lp-section-title">Group 9 Members</h2>

        <div className="lp-grid">

          <div className="lp-card">
            <div className="lp-icon">
              Caico, Ma Angelica G.
            </div>

            <div className="lp-icon">
              Daguman, Athena Jean L.
            </div>

            <div className="lp-icon">
              Salor, Stephine Carl R.
            </div>

            <div className="lp-icon">
              Sameran, Kristel Anne Mae T.
            </div>

            <h3>Skills & Knowledge</h3>

            <p>
              Our group continuously learns modern technologies,
              design concepts, and creative development through
              collaboration and practical activities.
            </p>
          </div>

          <div className="lp-card">
            <h3>Our Goal</h3>

            <p>
              To create a clean, beautiful, and responsive activity
              presentation with a unique visual identity and balanced
              color palette suitable for everyone.
            </p>
          </div>

          <div className="lp-card">
            <h3>About This Activity</h3>

            <p>
              This activity focuses on applying React fundamentals,
              component structure, responsive layouts, spacing,
              and modern UI styling techniques.
            </p>
          </div>

        </div>
      </section>

      <section id="contact" className="lp-cta-section">
        <div className="lp-cta-card">
          <h2>Thank You, Sir!</h2>

          <p>
            Thank you for helping us set up and complete this activity.
            We appreciate your guidance and support throughout the lesson.
          </p>
        </div>
      </section>

      <footer className="lp-footer">
        <p>© 2026 | Presented by Group 9</p>
      </footer>

    </div>
  );
};

export default Activity1;