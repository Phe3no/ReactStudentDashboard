import React from "react";
import { Link } from "react-router-dom";

const StudentNavBar = ({ student, studentChecked, onStudentClicked }) => {
  return (
    <span>
      <input
        type="checkbox"
        checked={student.onChart}
        onChange={() => studentChecked(student.id)}
      />

      <button
        className="student-link"
        onClick={() => onStudentClicked(student.id)}
      >{`${student.first_name} ${student.last_name}`}</button>
    </span>
  );
};

export default StudentNavBar;
