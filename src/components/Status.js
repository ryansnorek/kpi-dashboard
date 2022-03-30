import DoughnutChart from "./charts/Doughnut";

function Status() {
  const sites = 10;
  const online = 9;
  const offline = 1;
  return (
    <section className="status">
      <div className="left">
        <h2>Status</h2>
        <div className="metrics">
          <h3 className="uptime">Uptime: 2.4 years</h3>
          <h3>Sites: {sites}</h3>
          <h3>Online: {online}</h3>
          <h3>Offline: {offline}</h3>
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
