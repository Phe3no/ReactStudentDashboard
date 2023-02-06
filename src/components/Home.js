import BarChart from "./BarChart";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { storeAverages } from "../features/data/dataSlice";

import { getAllAssignments } from "../features/assignments/assignmentsSlice";
import { getAllReviews } from "../features/reviews/reviewsSlice";
import { getAllStudents } from "../features/students/studentsSlice";

import { onChart, oneStudentOnChart } from "../features/students/studentsSlice";

import StudentNavBar from "./StudentNavBar";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [averageRatingBasedOn, setAverageRatingBasedOn] = useState("");

  const assignments = useSelector(getAllAssignments);
  const reviews = useSelector(getAllReviews);
  const students = useSelector(getAllStudents);

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
  }, [dispatch, students]);

  return (
    <article>
      <nav className="main-nav">{renderStudents}</nav>
      <BarChart text={averageRatingBasedOn} />
    </article>
  );
};

export default Home;

/*React.useEffect(() => {
  if (publicTypeIndex) {
    (async () => {
      const notesListIndex = publicTypeIndex.findSubject(
        solid.forClass,
        schema.TextDigitalDocument
      );

      if (!notesListIndex) {
        // If no notes document is listed in the public type index, create one:
        const notesList = await initialiseNotesList();

        if (notesList !== null) {
          setNotesList(notesList);
        }
      } else {
        // If the public type index does list a notes document, fetch it:
        const notesListUrl = notesListIndex.getRef(solid.instance);

        if (typeof notesListUrl === "string") {
          const document = await fetchDocument(notesListUrl);
          setNotesList(document);
        }
      }
    })();
  }
}, [publicTypeIndex]);*/
