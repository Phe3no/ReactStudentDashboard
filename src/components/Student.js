import BarChart from "./BarChart";
import LineChart from "./LineChart";
import StudentsOverview from "../features/students/StudentsOverview";
import { useSelector, useDispatch } from "react-redux";
import { getAllAssignments } from "../features/assignments/assignmentsSlice";
import { getAllReviews } from "../features/reviews/reviewsSlice";
import { getSelectedStudent } from "../features/students/studentsSlice";
import { getChartType, storeAverages } from "../features/data/dataSlice";
import {
  storeChartType,
  sortDifficultLowToHigh,
  sortDifficultHighToLow,
  sortFunLowToHigh,
  sortFunHighToLow,
} from "../features/data/dataSlice";
import {
  MdShowChart,
  MdBarChart,
  MdArrowDownward,
  MdArrowUpward,
} from "react-icons/md";
import { useEffect } from "react";

const Student = () => {
  const dispatch = useDispatch();

  const assignments = useSelector(getAllAssignments);
  const reviews = useSelector(getAllReviews);
  const student = useSelector(getSelectedStudent);
  const chartType = useSelector(getChartType);

  const reviewBasedOnSelectedStudent = () =>
    reviews.filter((review) => review.studentId === student.id);

  const reviewOfOneStudent = () => {
    const result = [];
    assignments.forEach((assignment) => {
      reviewBasedOnSelectedStudent().forEach((review) => {
        if (assignment.id === review.assignmentId) {
          result.push({
            id: assignment.id,
            name: assignment.name,
            diffAverage: review.difficultyLevel,
            funAverage: review.funLevel,
          });
        }
      });
    });
    return result;
  };

  useEffect(() => {
    dispatch(storeAverages(reviewOfOneStudent()));
  });

  return (
    <>
      <div className="student-chart-menu">
        <StudentsOverview student={student} />
        <div className="sort-data-container">
          <button onClick={() => dispatch(sortDifficultLowToHigh())}>
            <MdArrowUpward />
          </button>
          <button onClick={() => dispatch(sortDifficultHighToLow())}>
            <MdArrowDownward />
          </button>
          <button onClick={() => dispatch(sortFunLowToHigh())}>
            <MdArrowUpward />
          </button>
          <button onClick={() => dispatch(sortFunHighToLow())}>
            <MdArrowDownward />
          </button>
          <button onClick={() => dispatch(storeChartType("bar"))}>
            <MdBarChart />
          </button>
          <button onClick={() => dispatch(storeChartType("line"))}>
            <MdShowChart />
          </button>
        </div>
      </div>
      {chartType === "bar" ? <BarChart /> : <LineChart />}
    </>
  );
};

export default Student;
