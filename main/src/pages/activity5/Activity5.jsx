import { useEffect, useState } from "react";
import "./Activity5.css";

const Activity5 = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.disneyapi.dev/character")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.data.filter((c) => c.films.length > 0);
        setCharacters(filtered.slice(0, 10));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="lp-container">
        <div className="lp-cta-card">
          <h2>Loading Magic ✨</h2>
          <p>Disney Characters...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lp-container">

      <nav className="lp-nav">
        <div className="lp-logo">Activity <span>5</span></div>
        <ul className="lp-nav-links">
          <li><a href="#features">Characters</a></li>
          <li><a href="#about">Gallery</a></li>
          <li><a className="lp-nav-cta">Disney Characters API</a></li>
        </ul>
      </nav>

      <header className="lp-hero">
        <div className="lp-hero-content">
          <span className="lp-badge">React useEffect + API</span>
          <h1>Disney <span>Character Gallery</span></h1>
          <p>Dynamic data rendered using React and consistent UI system.</p>
        </div>
      </header>

      <section className="lp-features" id="features">
        <h2 className="lp-section-title">Disney Characters</h2>

        <div className="lp-grid">
          {characters.map((char) => (
            <div className="lp-card" key={char._id}>

              <img className="lp-image" src={char.imageUrl} alt={char.name} />

              <h3>{char.name}</h3>

              <p><strong>Film:</strong> {char.films[0]}</p>

              <div className="lp-tags">
                {char.tvShows.length > 0 && <span>TV</span>}
                {char.videoGames.length > 0 && <span>Games</span>}
              </div>

              <a className="lp-button" href={char.url} target="_blank">
                View Profile
              </a>

            </div>
          ))}
        </div>
      </section>

      <section className="lp-cta-section" id="about">
        <div className="lp-cta-card">
          <h2>API Integration Activity</h2>
        </div>
      </section>

      <footer className="lp-footer">
        <p>© 2026 | Presented by Group 9</p>
      </footer>

    </div>
  );
};

export default Activity5;