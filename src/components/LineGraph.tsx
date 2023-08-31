import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  TimeScale,
  TimeSeriesScale,
} from "chart.js";
import "chartjs-adapter-moment";
Chart.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  TimeScale,
  TimeSeriesScale
);

interface CasesData {
  [date: string]: number;
}

interface CasesLineGraphProps {
  data: CasesData;
}

const LineGraph: React.FC<CasesLineGraphProps> = ({ data }) => {
  const dates = Object.keys(data);
  const caseCounts = Object.values(data);

  const Casesdata = {
    labels: dates,
    datasets: [
      {
        label: "Cases",
        data: caseCounts,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
        },
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Cases",
        },
      },
    },
  };

  return (
    <div className="lg:w-[70%] md:w-[90%] sm:w-[90%]  ml-auto mr-9 mb-auto items-top items-center flex flex-col">
      <h1 className="mb-9 font-bold font-serif">
        <span className="">COVID-19 </span>Cases Worldwide
      </h1>

      <Line data={Casesdata} options={options as any} />
    </div>
  );
};

export default LineGraph;
