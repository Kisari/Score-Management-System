"use client";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

//register plugins for generating chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = () => {

  //mock data set
  const data = {
    labels: ["Math", "Literature", "Chemistry", "Biology", "History", "Geography", "Civic Education", "Foreign Language"],
    datasets: [
      {
        label: "Class A",
        data: [8, 7, 9, 7, 6, 8, 7, 9],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: "Class B",
        data: [6, 8, 7, 6, 7, 6, 8, 7],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2 className="text-center text-2xl font-semibold">Student Score Management</h2>
      <Line data={data} />
    </div>
  );
};

export default Chart;
