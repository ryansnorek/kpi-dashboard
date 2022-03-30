// import { useState } from "react";

import { useState } from "react";
import BarChart from "./charts/BarChart";

function Performance() {
  const [period, setPeriod] = useState("quarter");
const handleClickPeriod = (e) => setPeriod(e.target.name);
const toggleID = (name) => `${period === name && "highlight"}`;
  return (
    <section className="performance">
      <div className="left">
        <h2>Performance</h2>
        <div className="metrics">
          <h3>Energy Produced: 324,254 kWh</h3>
          <h3>Energy Value: $9,341</h3>
        </div>
      </div>
      <div className="right">
        <div className="period">
          <button id={toggleID("day")} onClick={handleClickPeriod} name="day">Day</button>
          <button id={toggleID("month")} onClick={handleClickPeriod} name="month">Month</button>
          <button id={toggleID("quarter")} onClick={handleClickPeriod} name="quarter">Quarter</button>
          <button id={toggleID("year")} onClick={handleClickPeriod} name="year">Year</button>
          <button id={toggleID("all")} onClick={handleClickPeriod} name="all">All-time</button>
        </div>
          <BarChart />
      </div>
    </section>
  );
}
export default Performance;

