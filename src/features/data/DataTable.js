import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAssignments } from "../assignments/assignmentsSlice";
import { getAllReviews } from "../reviews/reviewsSlice";
import { getAllStudents } from "../students/studentsSlice";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import {
  getAllData,
  storeAllData,
  sortAllDataDifficultLowToHigh,
  sortAllDataDifficultHighToLow,
  sortAllDataFunLowToHigh,
  sortAllDataFunHighToLow,
  sortAllDataAssignmentNameLowToHigh,
  sortAllDataAssignmentNameHighToLow,
} from "./dataSlice";
import TableRow from "./TableRow";

const DataTable = () => {
  const dispatch = useDispatch();

  const assignments = useSelector(getAllAssignments);
  const reviews = useSelector(getAllReviews);
  const students = useSelector(getAllStudents);
  const allData = useSelector(getAllData);

  const data = [];
  reviews.forEach((review) => {
    const assignmentData = assignments.find(
      (assignment) => assignment.id === review.assignmentId
    );
    const studentData = students
      .filter((student) => student.onChart === true)
      .find((student) => student.id === review.studentId);

    if (studentData) {
      data.push({
        studentFirstName: studentData.first_name,
        studentLastName: studentData.last_name,
        studentAge: studentData.age,
        studentPhone: studentData.phone,
        studentEmail: studentData.email,
        assignmentName: assignmentData.name,
        difficultyValue: review.difficultyLevel,
        funValue: review.funLevel,
      });
    }
  });

  useEffect(() => {
    dispatch(storeAllData(data));
  }, [dispatch]);

  const allDataJSX = allData.map((elem, index) => (
    <TableRow data={elem} key={index} />
  ));

  return (
    <div className="data-view">
      <div className="data-page">
        <div className="pair-1">
          <button
            onClick={() => dispatch(sortAllDataAssignmentNameLowToHigh())}
          >
            <MdArrowUpward />
          </button>
          <button
            onClick={() => dispatch(sortAllDataAssignmentNameHighToLow())}
          >
            <MdArrowDownward />
          </button>
        </div>
        <div className="pair-2">
          <button onClick={() => dispatch(sortAllDataDifficultLowToHigh())}>
            <MdArrowUpward />
          </button>
          <button
            className="pair-2"
            onClick={() => dispatch(sortAllDataDifficultHighToLow())}
          >
            <MdArrowDownward />
          </button>
        </div>
        <div className="pair-3">
          <button onClick={() => dispatch(sortAllDataFunLowToHigh())}>
            <MdArrowUpward />
          </button>
          <button onClick={() => dispatch(sortAllDataFunHighToLow())}>
            <MdArrowDownward />
          </button>
        </div>
      </div>
      <div className="table-header">
        <div>Student first name</div>
        <div>Student last name</div>
        <div>Age</div>
        <div>Phone</div>
        <div>Email</div>
        <div>Assignment name</div>
        <div>Difficulty level</div>
        <div>Fun level</div>
      </div>
      <div className="table">{allDataJSX}</div>
    </div>
  );
};

export default DataTable;
