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
      {<Bar data={data} options={{ maintainAspectRatio: false }} />}
    </div>
  );
};

export default BarChart;
