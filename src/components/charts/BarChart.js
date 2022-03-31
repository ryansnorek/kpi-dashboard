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
      data: [72, 62, 78, 80],
      fill: true,
      borderColor: "rgb(218, 218, 218)",
      backgroundColor: "rgb(218, 218, 218, .5)",
      tension: 0.1,
    },
    {
      label: "Prod/Predicted%",
      data: [85, 79, 90, 91],
      fill: true,
      borderColor: "rgb(233, 204, 74)",
      backgroundColor: "rgb(233, 204, 74, .5)",
      tension: 0.1,
    },
    {
      label: "Prod/Guaranteed%",
      data: [110, 98, 102, 99],
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
      data: [90, 92, 103, 87],
      backgroundColor: "rgb(218, 218, 218)",
      tension: 0.1,
      maxBarThickness: 20,
    },
    {
      label: "Prod/Guaranteed%",
      data: [100, 103, 99, 110],
      backgroundColor: "rgb(15, 54, 113)",
      tension: 0.1,
      maxBarThickness: 20
    },
    {
      label: "Prod/Predicted%",
      data: [104, 97, 88, 99],
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
      data: [110, 92, 88],
      backgroundColor: "rgb(218, 218, 218)",
      tension: 0.1,
      maxBarThickness: 30
    },
    {
      label: "Prod/Guaranteed%",
      data: [98, 89, 103],
      backgroundColor: "rgb(15, 54, 113)",
      tension: 0.1,
      maxBarThickness: 30
    },
    {
      label: "Prod/Predicted%",
      data: [111, 98, 87],
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
      data: [83, 82, 92, 84, 88, 98, 103, 112, 120, 109, 92, 84],
      backgroundColor: "rgb(218, 218, 218)",
      tension: 0.1,
      maxBarThickness: 6
    },
    {
      label: "Prod/Guaranteed%",
      data: [103, 97, 92, 99, 100, 113, 103, 112, 120, 109, 92, 84],
      backgroundColor: "rgb(15, 54, 113)",
      tension: 0.1,
      maxBarThickness: 6
    },
    {
      label: "Prod/Predicted%",
      data: [108, 100, 92, 84, 88, 88, 114, 99, 94, 102, 92, 84],
      backgroundColor: "rgb(233, 204, 74)",
      tension: 0.1,
      maxBarThickness: 6
    },
  ],
};
