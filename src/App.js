import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getAssignmentsStatus,
  getAssignmentsError,
  fetchAssignments,
} from "./features/assignments/assignmentsSlice";
import {
  getReviewsStatus,
  getReviewsError,
  fetchReviews,
} from "./features/reviews/reviewsSlice";
import {
  getStudentsStatus,
  getStudentsError,
  fetchStudents,
  setOnChartAllStudentsTrue,
} from "./features/students/studentsSlice";
import StudentsList from "./features/students/StudentsList";
import Home from "./components/Home";
import Student from "./components/Student";
import "./css/style.css";

function App() {
  const dispatch = useDispatch();

  const assignmentsStatus = useSelector(getAssignmentsStatus);
  const assignmentsError = useSelector(getAssignmentsError);

  const reviewsStatus = useSelector(getReviewsStatus);
  const reviewsError = useSelector(getReviewsError);

  const studentStatus = useSelector(getStudentsStatus);
  const studentError = useSelector(getStudentsError);

  /*useEffect(
    () => {
      
    }, [assignmentsStatus, reviewsStatus, studentStatus, dispatch]
  );*/

  if (studentStatus === "idle") dispatch(fetchStudents());
  if (assignmentsStatus === "idle") dispatch(fetchAssignments());
  if (reviewsStatus === "idle") dispatch(fetchReviews());

  let content;
  if (
    assignmentsStatus === "loading" &&
    reviewsStatus === "loading" &&
    studentStatus === "loading"
  ) {
    content = <p>"Loading students...."</p>;
  } else if (
    assignmentsStatus === "succeeded" &&
    reviewsStatus === "succeeded" &&
    studentStatus === "succeeded"
  ) {
    content = (
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/students" element={<StudentsList />} />
        </Routes>
      </main>
    );
  } else if (assignmentsStatus === "failed")
    content = <p>{assignmentsError}</p>;
  else if (reviewsStatus === "failed") content = <p>{reviewsError}</p>;
  else if (studentStatus === "failed") content = <p>{studentError}</p>;

  return (
    <Router>
      <div className="wrapper">
        <nav className="header-nav">
          <ul>
            <li onClick={() => dispatch(setOnChartAllStudentsTrue())}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/students">
                Students
              </Link>
            </li>
          </ul>
        </nav>
        {content}
      </div>
    </Router>
  );
}

export default App;
