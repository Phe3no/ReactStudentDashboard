import BarChart from "./BarChart";
import LineChart from "./LineChart";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllAssignments } from "../features/assignments/assignmentsSlice";
import { getAllReviews } from "../features/reviews/reviewsSlice";
import {
  getAllStudents,
  onChart,
  oneStudentOnChart,
} from "../features/students/studentsSlice";
import {
  getChartType,
  storeAverages,
  storeChartType,
  sortDifficultLowToHigh,
  sortDifficultHighToLow,
  sortFunLowToHigh,
  sortFunHighToLow,
} from "../features/data/dataSlice";
import StudentNavBar from "./StudentNavBar";
import {
  MdShowChart,
  MdBarChart,
  MdArrowDownward,
  MdArrowUpward,
} from "react-icons/md";

const Home = () => {
  const dispatch = useDispatch();

  const assignments = useSelector(getAllAssignments);
  const reviews = useSelector(getAllReviews);
  const students = useSelector(getAllStudents);
  const chartType = useSelector(getChartType);

  const filteredStudents = () =>
    students
      .filter((student) => student.onChart === true)
      .map((student) => student.id);

  const reviewsBasedOnFilteredStudents = () =>
    reviews.filter((review) => filteredStudents().includes(review.studentId));

  const calculateAveragesAllStudentsIncluded = () => {
    const averages = [];
    assignments.forEach((assignment) => {
      let counter = 0;
      let totalOfDiffGrades = 0;
      let totalOfFunGrades = 0;

      reviewsBasedOnFilteredStudents().forEach((review) => {
        if (assignment.id === review.assignmentId) {
          totalOfDiffGrades =
            totalOfDiffGrades + parseInt(review.difficultyLevel);
          totalOfFunGrades = totalOfFunGrades + parseInt(review.funLevel);
          counter++;
        }
      });

      let averageDifficulty = totalOfDiffGrades / counter;
      let averageFun = totalOfFunGrades / counter;

      averages.push({
        id: assignment.id,
        name: assignment.name,
        diffAverage: averageDifficulty,
        funAverage: averageFun,
      });
    });
    return averages;
  };

  const studentChecked = (id) => dispatch(onChart(id));

  const onStudentClicked = (id) => {
    dispatch(oneStudentOnChart(id));
  };

  const renderStudents = students.map((student) => (
    <StudentNavBar
      key={student.id}
      student={student}
      studentChecked={studentChecked}
      onStudentClicked={onStudentClicked}
    />
  ));

  useEffect(() => {
    const result = calculateAveragesAllStudentsIncluded();
    dispatch(storeAverages(result));
  }, [dispatch, students /*, /*calculateAveragesAllStudentsIncluded*/]);

  return (
    <article>
      <nav className="main-nav">{renderStudents}</nav>
      <div className="average-chart-menu">
        <h2>Average rating based on checked student(s)</h2>
        <div className="sort-data-container">
          <div>
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
      </div>
      {chartType === "bar" ? <BarChart /> : <LineChart />}
    </article>
  );
};

export default Home;
