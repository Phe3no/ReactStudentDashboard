import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const StudentsOverview = ({ student }) => {
  return (
    <article className="student-overview">
      <h3>{`${student.first_name} ${student.last_name}`}</h3>
      <p className="student-age">Age: {student.age}</p>
      <span>
        <MdOutlinePhone />
        <p>{student.phone}</p>
      </span>
      <span>
        <MdOutlineEmail />
        <p>{student.email}</p>
      </span>
    </article>
  );
};

export default StudentsOverview;
