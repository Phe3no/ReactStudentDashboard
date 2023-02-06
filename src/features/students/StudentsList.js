import { useSelector } from "react-redux";
import { getAllStudents } from "./studentsSlice";
import StudentsOverview from "./StudentsOverview";

const StudentsList = () => {
  const students = useSelector(getAllStudents);

  const content = students.map((student) => (
    <StudentsOverview key={student.id} student={student} />
  ));

  return <div>{content}</div>;
};

export default StudentsList;
