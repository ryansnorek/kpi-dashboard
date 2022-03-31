import DoughnutChart from "./charts/Doughnut";

function Status() {
  const uptime = 2.4;
  const sites = 10;
  const online = 9;
  const offline = 1;
  return (
    <section className="status">
      <div className="left">
        <h2>Status</h2>
        <div className="metrics">
          <div className="metric uptime">
            <h3>Uptime: </h3>
            <h3 id="dark">{uptime} years</h3>
          </div>
          <div className="metric">
            <h3>Sites: </h3>
            <h3 id="dark">{sites}</h3>
          </div>
          <div className="metric">
            <h3>Online: </h3>
            <h3 id="dark">{online}</h3>
          </div>
          <div className="metric">
            <h3>Offline: </h3>
            <h3 id="dark">{offline}</h3>
          </div>
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
