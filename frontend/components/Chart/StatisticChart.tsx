"use client";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { getScoreByRangeStatistics } from "@/app/api/score";
import { GetScoreByRangeStatisticsOutputDTO } from "@/app/dto/score/getScoreByRangeStatistics";

// Register plugins for generating the chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface StatisticChartProps {
    subject: string;
}

const StatisticChart = ({subject} : StatisticChartProps) => {

    const [scoreStatistic, setScoreStatistics] = useState<GetScoreByRangeStatisticsOutputDTO>();

    useEffect(() => {
        async function fetchScoreStatistics() {
            const scoreStatisticData = await getScoreByRangeStatistics({subject: subject});
            setScoreStatistics(scoreStatisticData);
        }

        fetchScoreStatistics();
    }, [subject]);

  const data = {
    labels: ["<4", "4-6", "6-8", ">8"],
    datasets: [
      {
        label: subject,
        data: scoreStatistic && Object.values(scoreStatistic.data).map(value => parseInt(value)),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container text-secondary-color">
      <Bar data={data} />
    </div>
  );
};

export default StatisticChart;
