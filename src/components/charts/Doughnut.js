import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: [],
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ["rgb(233, 204, 74)", "rgb(15, 54, 113)"],
      borderColor: "transparent",
    },
    
  
  ],
};

function DoughnutChart() {
  return (
    <div className="doughnut">
      <Doughnut data={data} />
    </div>
  );
}
export default DoughnutChart;
