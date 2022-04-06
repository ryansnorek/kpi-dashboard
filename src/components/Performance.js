import useHighlight from "../hooks/useHighlight";
import BarChart from "./charts/BarChart";

function Performance() {
  const [handleClickTarget, toggleID, targetType] = useHighlight("quarter");

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
          <button id={toggleID("day")} onClick={handleClickTarget} name="day">
            Day
          </button>
          <button
            id={toggleID("month")}
            onClick={handleClickTarget}
            name="month"
          >
            Month
          </button>
          <button
            id={toggleID("quarter")}
            onClick={handleClickTarget}
            name="quarter"
          >
            Quarter
          </button>
          <button id={toggleID("year")} onClick={handleClickTarget} name="year">
            Year
          </button>
          <button id={toggleID("all")} onClick={handleClickTarget} name="all">
            All-time
          </button>
        </div>
        <BarChart period={targetType} />
      </div>
    </section>
  );
}
export default Performance;
