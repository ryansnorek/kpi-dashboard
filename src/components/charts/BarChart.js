import { Bar, Line } from "react-chartjs-2";

function BarChart({ period }) {
  return (
    <div className="bar-chart">

      {period === "month" && <Bar height={"120%"} data={monthData} />}
      {period === "quarter" && <Bar height={"120%"} data={quarterData} />}
      {period === "year" && <Bar height={"120%"} data={yearData} />}
    </div>
  );
}
export default BarChart;
const monthData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Estimated",
      data: [350, 290, 100, 710],
      backgroundColor: "rgb(218, 218, 218)",
      tension: 0.1
    },
    {
      label: "Guaranteed",
      data: [350, 400, 570, 660],
      backgroundColor: "rgb(15, 54, 113)",
      tension: 0.1
    },
    {
      label: "Predicted",
      data: [400, 350, 580, 660],
      backgroundColor: "rgb(233, 204, 74)",
      tension: 0.1
    },
  ],
};
const quarterData = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Estimated",
      data: [650, 590, 800, 810],
      backgroundColor: "rgb(218, 218, 218)",
      tension: 0.1
    },
    {
      label: "Guaranteed",
      data: [550, 500, 670, 760],
      backgroundColor: "rgb(15, 54, 113)",
      tension: 0.1
    },
    {
      label: "Predicted",
      data: [500, 450, 680, 760],
      backgroundColor: "rgb(233, 204, 74)",
      tension: 0.1
    },
  ],
};
const yearData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Estimated",
      data: [883, 942, 712, 888, 1300, 1600, 1748, 2093, 1854, 1423, 1002, 932],
      backgroundColor: "rgb(218, 218, 218)",
      tension: 0.1
    },
    {
      label: "Guaranteed",
      data: [883, 942, 712, 888, 1300, 1600, 1748, 2093, 1854, 1423, 1002, 932],
      backgroundColor: "rgb(15, 54, 113)",
      tension: 0.1
    },
    {
      label: "Predicted",
      data: [883, 942, 712, 888, 1300, 1600, 1748, 2093, 1854, 1423, 1002, 932],
      backgroundColor: "rgb(233, 204, 74)",
      tension: 0.1
    },
  ],
};
