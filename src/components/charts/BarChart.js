import { Bar, Line } from "react-chartjs-2";

function BarChart({ period }) {
  return (
    <div className="bar-chart">
      {period === "day" && <Line height={"120%"} data={dayData} />}
      {period === "month" && <Bar height={"120%"} data={monthData} />}
      {period === "quarter" && <Bar height={"120%"} data={quarterData} />}
      {period === "year" && <Bar height={"120%"} data={yearData} />}
    </div>
  );
}
export default BarChart;
const dayData = {
  labels: ["6", "12", "18", "24"],
  datasets: [
    {
      label: "Prod/Estimated%",
      data: [52, 42, 58, 70],
      fill: true,
      borderColor: "rgb(218, 218, 218)",
      backgroundColor: "rgb(218, 218, 218, .5)",
      tension: 0.1,
    },
    {
      label: "Prod/Predicted%",
      data: [65, 59, 80, 81],
      fill: true,
      borderColor: "rgb(233, 204, 74)",
      backgroundColor: "rgb(233, 204, 74, .5)",
      tension: 0.1,
    },
    {
      label: "Prod/Guaranteed%",
      data: [40, 38, 51, 49],
      fill: true,
      borderColor: "rgb(15, 54, 113)",
      backgroundColor: "rgb(15, 54, 113, .5)",
      tension: 0.1,
    }
  ],
};
const monthData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Prod/Estimated%",
      data: [350, 290, 100, 710],
      backgroundColor: "rgb(218, 218, 218)",
      tension: 0.1,
      maxBarThickness: 20,
    },
    {
      label: "Prod/Guaranteed%",
      data: [350, 400, 570, 660],
      backgroundColor: "rgb(15, 54, 113)",
      tension: 0.1,
      maxBarThickness: 20
    },
    {
      label: "Prod/Predicted%",
      data: [400, 350, 580, 660],
      backgroundColor: "rgb(233, 204, 74)",
      tension: 0.1,
      maxBarThickness: 20
    },
  ],
};
const quarterData = {
  labels: ["Jan", "Feb", "Mar"],
  datasets: [
    {
      label: "Prod/Estimated%",
      data: [650, 590, 800],
      backgroundColor: "rgb(218, 218, 218)",
      tension: 0.1,
      maxBarThickness: 30
    },
    {
      label: "Prod/Guaranteed%",
      data: [550, 500, 670],
      backgroundColor: "rgb(15, 54, 113)",
      tension: 0.1,
      maxBarThickness: 30
    },
    {
      label: "Prod/Predicted%",
      data: [500, 450, 680],
      backgroundColor: "rgb(233, 204, 74)",
      tension: 0.1,
      maxBarThickness: 30
    },
  ],
};
const yearData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Prod/Estimated%",
      data: [883, 942, 712, 888, 1300, 1600, 1748, 2093, 1854, 1423, 1002, 932],
      backgroundColor: "rgb(218, 218, 218)",
      tension: 0.1,
      maxBarThickness: 6
    },
    {
      label: "Prod/Guaranteed%",
      data: [883, 942, 712, 888, 1300, 1600, 1748, 2093, 1854, 1423, 1002, 932],
      backgroundColor: "rgb(15, 54, 113)",
      tension: 0.1,
      maxBarThickness: 6
    },
    {
      label: "Prod/Predicted%",
      data: [883, 942, 712, 888, 1300, 1600, 1748, 2093, 1854, 1423, 1002, 932],
      backgroundColor: "rgb(233, 204, 74)",
      tension: 0.1,
      maxBarThickness: 6
    },
  ],
};
