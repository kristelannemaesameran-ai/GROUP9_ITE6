import "./StudentInformation.css";

const StudentInformation = ({ student, className = "" }) => {
  return (
    <div className={`student-information ${className}`}>
      <div className="student-top">
        <h2 className="student-name">{student.name}</h2>
        <span className="badge">ID #{student.id}</span>
      </div>

      <div className="student-body">
        <p><strong>Edad:</strong> {student.age}</p>
        <p><strong>Address:</strong> {student.address}</p>
        <p><strong>College Degree:</strong> {student.degree}</p>
      </div>

      <div className="student-footer">
        <span className="status-tag">Enrolled</span>
      </div>
    </div>
  );
};

export default StudentInformation;