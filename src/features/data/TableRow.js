import React from "react";

const TableRow = ({ data }) => {
  return (
    <div className="table-row">
      <div>{data.studentFirstName}</div>
      <div>{data.studentLastName}</div>
      <div>{data.studentAge}</div>
      <div>{data.studentPhone}</div>
      <div>{data.studentEmail}</div>
      <div>{data.assignmentName}</div>
      <div>{data.difficultyValue}</div>
      <div>{data.funValue}</div>
    </div>
  );
};

export default TableRow;
