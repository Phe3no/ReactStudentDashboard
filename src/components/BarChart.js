import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";
import { getAverages } from "../features/data/dataSlice";

const BarChart = () => {
  const averages = useSelector(getAverages);

  const names = averages.map((elem) => elem.name);
  const difficulties = averages.map((elem) => elem.diffAverage);
  const funs = averages.map((elem) => elem.funAverage);

  const data = {
    labels: names,
    datasets: [
      {
        data: difficulties,
        label: "difficult",
        backgroundColor: ["#3B6B38"],
      },
      {
        data: funs,
        label: "fun",
        backgroundColor: ["#AF2121"],
      },
    ],
  };

  return (
    <div style={{ width: "90%", margin: "0 auto", height: "700px" }}>
      <h2>Average rating based on checked student(s)</h2>
      {<Bar data={data} options={{ maintainAspectRatio: false }} />}
    </div>
  );
};

export default BarChart;

/*
  datasetIdKey="id"
  data={{
    labels: ["juni", "juli", "augustus"],
    datasets: [
      {
        id: 1,
        label: "",
        data: [5, 6, 7],
        backgroundColor: "red",
      },
      {
        id: 2,
        label: "",
        data: [4, 7, 5],
        backgroundColor: "blue",
      },
    ],
  }}
  width={100}
  height={150}
  options={{ maintainAspectRatio: false }}
*/
