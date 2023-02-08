import { useSelector } from "react-redux";
import { getAllStudents } from "./studentsSlice";
import StudentsOverview from "./StudentsOverview";

const StudentsList = () => {
  const students = useSelector(getAllStudents);

  const content = students.map((student) => (
    <StudentsOverview
      className="students-container"
      key={student.id}
      student={student}
    />
  ));

  return <div className="students-container">{content}</div>;
};

export default StudentsList;
