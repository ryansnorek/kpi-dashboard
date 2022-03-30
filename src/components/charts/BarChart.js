import { Bar } from "react-chartjs-2";

function BarChart() {
  return (
    <div className="bar-chart">
      <Bar height={"120%"} data={data} />
    </div>
  );
}
export default BarChart;

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Estimated",
      data: [65, 59, 80, 81],
      backgroundColor: "rgb(218, 218, 218, .6)",
      tension: 0.1
    },
    {
      label: "Guaranteed",
      data: [55, 50, 67, 76],
      backgroundColor: "rgb(15, 54, 113)",
      tension: 0.1
    },
    {
      label: "Predicted",
      data: [50, 45, 68, 76],
      backgroundColor: "rgb(241, 210, 34)",
      tension: 0.1
    },
  ],
};
