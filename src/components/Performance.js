// import { useState } from "react";

import { useState } from "react";
import BarChart from "./charts/BarChart";

function Performance() {
  const [period, setPeriod] = useState("quarter");
  const handleClickPeriod = (e) => setPeriod(e.target.name);
  const toggleID = (name) => `${period === name && "highlight"}`;
  const produced = 324254;
  const value = 9341;
  return (
    <section className="performance">
      <div className="left">
        <h2>Performance</h2>
        <div className="metrics">
          <div className="metric">
            <h3>Produced: </h3>
            <h3 id="dark">{produced.toLocaleString()} kWh</h3>
          </div>
          <div className="metric">
            <h3>Value: </h3>
            <h3 id="dark">${value.toLocaleString()}</h3>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="period">
          <button id={toggleID("day")} onClick={handleClickPeriod} name="day">
            Day
          </button>
          <button
            id={toggleID("month")}
            onClick={handleClickPeriod}
            name="month"
          >
            Month
          </button>
          <button
            id={toggleID("quarter")}
            onClick={handleClickPeriod}
            name="quarter"
          >
            Quarter
          </button>
          <button id={toggleID("year")} onClick={handleClickPeriod} name="year">
            Year
          </button>
          <button id={toggleID("all")} onClick={handleClickPeriod} name="all">
            All-time
          </button>
        </div>
        <BarChart period={period} />
      </div>
    </section>
  );
}
export default Performance;
