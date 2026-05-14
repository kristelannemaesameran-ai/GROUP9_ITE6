import React, { useState } from "react";
import "./Mco.css";

import Activity1 from "../activities/activity1/Activity1";
import Activity2 from "../activities/activity2/Activity2";
import Activity3 from "../activities/activity3/Activity3";
import Activity4 from "../activities/activity4/Activity4";
import Activity5 from "../activity5/Activity5";

const Mco = () => {
  const [page, setPage] = useState("home");
  const [activeActivity, setActiveActivity] = useState(null);

  return (
    <div className="mco-container">

      {/* NAVIGATION */}
      <nav className="mco-nav">
        <h2 className="mco-logo">
          Group 9 <span>ITE6 MAJOR COURSE OUTPUT</span>
        </h2>

        <div className="mco-nav-buttons">
          <button onClick={() => { setPage("home"); setActiveActivity(null); }}>
            Home
          </button>

          <button onClick={() => { setPage("about"); setActiveActivity(null); }}>
            About
          </button>

          <button onClick={() => { setPage("activities"); setActiveActivity(null); }}>
            Activities
          </button>
        </div>
      </nav>

      {/* HOME */}
      {page === "home" && (
        <div className="mco-hero">
          <h1>Welcome to our Creative Design</h1>

          <p>
            A unified system that connects all Group 9 React Activities with
            consistent UI, smooth navigation, and modern design.
          </p>

          <div className="mco-card">
            <h3>Total Members</h3>
            <h2>4</h2>
          </div>
        </div>
      )}

      {/* ABOUT (PURE <p> ONLY) */}
      {page === "about" && (
        <div className="mco-section">
          <h2>About the Members</h2>

          <p className="mco-description">
            Group 9 members information list.
          </p>

          <div className="mco-grid">

            <div className="mco-student-card">
              <p><strong>Name:</strong> Kristel Anne Mae T. Sameran</p>
              <p><strong>Age:</strong> 19</p>
              <p><strong>Address:</strong> Brgy. Carayman, Calbayog City</p>
              <p><strong>Course:</strong> BS Information Technology</p>
              <p><strong>Year Level:</strong> 2nd Year</p>
            </div>

            <div className="mco-student-card">
              <p><strong>Name:</strong> Maria Angelica Colico</p>
              <p><strong>Age:</strong> 19</p>
              <p><strong>Address:</strong> Brgy. Obrero, Calbayog City</p>
              <p><strong>Course:</strong> BS Information Technology</p>
              <p><strong>Year Level:</strong> 2nd Year</p>
            </div>

            <div className="mco-student-card">
              <p><strong>Name:</strong> Athena Jean Daguman</p>
              <p><strong>Age:</strong> 19</p>
              <p><strong>Address:</strong> Brgy. Obrero, Calbayog City</p>
              <p><strong>Course:</strong> BS Information Technology</p>
              <p><strong>Year Level:</strong> 2nd Year</p>
            </div>

            <div className="mco-student-card">
              <p><strong>Name:</strong> Stephen Carl Salor</p>
              <p><strong>Age:</strong> 19</p>
              <p><strong>Address:</strong> Calbayog City, Samar</p>
              <p><strong>Course:</strong> BS Information Technology</p>
              <p><strong>Year Level:</strong> 2nd Year</p>
            </div>

          </div>
        </div>
      )}

      {/* ACTIVITIES */}
      {page === "activities" && (
        <div className="mco-section">
          <h2>Activities</h2>

          {!activeActivity ? (
            <div className="mco-activity-grid">

              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  className="mco-activity-btn"
                  onClick={() => setActiveActivity(num)}
                >
                  Activity {num}
                  <span>Click Me</span>
                </button>
              ))}

            </div>
          ) : (
            <div>
              <button
                className="mco-back"
                onClick={() => setActiveActivity(null)}
              >
                ← Back to Activities
              </button>

              <div className="mco-activity-view">
                {activeActivity === 1 && <Activity1 />}
                {activeActivity === 2 && <Activity2 />}
                {activeActivity === 3 && <Activity3 />}
                {activeActivity === 4 && <Activity4 />}
                {activeActivity === 5 && <Activity5 />}
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default Mco;