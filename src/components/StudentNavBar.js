import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { oneStudentOnChart } from "../features/students/studentsSlice";

const StudentNavBar = ({ student, studentChecked }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="checkbox"
        checked={student.onChart}
        onChange={() => studentChecked(student.id)}
      />

      <Link
        className="student-link"
        onClick={() => dispatch(oneStudentOnChart(student.id))}
        to={`/student/${student.first_name}${student.last_name}`}
      >{`${student.first_name} ${student.last_name}`}</Link>
    </div>
  );
};

export default StudentNavBar;
