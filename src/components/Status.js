import DoughnutChart from "./charts/Doughnut";

function Status() {
  return (
    <section className="status">
      <div className="left">
        <h2>Status</h2>
        <div className="metrics">
          <h3>Uptime: 2.4 years</h3>
          <h3>Sites: 10</h3>
          <h3>Online: 9</h3>
          <h3>Offline: 1</h3>
        </div>
      </div>
      <div className="right">
        <h4>Total % of uptime</h4>
        <DoughnutChart />
      </div>
    </section>
  );
}
export default Status;
