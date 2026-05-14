import { useEffect, useState } from "react";
import "./Activity4.css";
import StudentInformation from "../../../components/character-card/student-information/StudentInformation";

const Activity4 = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    fetch("/students.json")
      .then((res) => res.json())
      .then((data) => setStudents(data.student_information))
      .catch(() => setStudents([]));
  }, []);

  const filteredStudents = students
    .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "age") return a.age - b.age;
      if (sortBy === "degree") return a.degree.localeCompare(b.degree);
      return 0;
    });

  return (
    <div className="lp-container">
      <nav className="lp-nav">
        <div className="lp-logo">
          Activity <span>4</span>
        </div>

        <ul className="lp-nav-links">
          <li><a className="lp-nav-cta" href="#">Academic</a></li>
        </ul>
      </nav>

      <header className="lp-hero">
        <h1>
          Academic <br />
          <span>Student Inforation</span>
        </h1>
      </header>

      <div className="students-controls">
        <input
          className="search-input"
          placeholder="Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="age">Sort by Age</option>
          <option value="degree">Sort by Degree</option>
        </select>
      </div>

      <div className="students-grid">
        {filteredStudents.map((student) => (
          <StudentInformation key={student.id} student={student} />
        ))}
      </div>

      <footer className="lp-footer">
        © 2026 | Presented by Group 9
      </footer>
    </div>
  );
};

export default Activity4;