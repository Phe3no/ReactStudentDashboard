import React from "react";

const StudentsOverview = ({ student }) => {
  return (
    <article>
      <h3>{`${student.first_name} ${student.last_name}`}</h3>
      <p>{student.age}</p>
      <p>{student.phone}</p>
      <p>{student.email}</p>
    </article>
  );
};

export default StudentsOverview;
