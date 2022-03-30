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
      backgroundColor: "rgb(241, 210, 34)",
      tension: 0.1
    },
  ],
};
