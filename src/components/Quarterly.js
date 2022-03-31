import Meter from "./charts/Meter";
import { getQuarterlyPeriods } from "../helper";
import { useState } from "react";

function Quarterly() {
  const [currentQuarter, labels] = getQuarterlyPeriods();
  const [quarter, setQuarter] = useState(currentQuarter);
  const qtrID = (qtr) => `${quarter === qtr && "highlight"}`;
  const handleClickQtr = (e) => setQuarter(e.target.name);

  return (
    <section className="quarterly">
      <div className="period">
        <button id={qtrID("1")} name="1" onClick={handleClickQtr}>
          {labels[0]}
        </button>
        <button id={qtrID("2")} name="2" onClick={handleClickQtr}>
          {labels[1]}
        </button>
        <button id={qtrID("3")} name="3" onClick={handleClickQtr}>
          {labels[2]}
        </button>
        <button id={qtrID("4")} name="4" onClick={handleClickQtr}>
          {labels[3]}
        </button>
      </div>
      <div className="meters">
        <Meter title="Estimated" meterValue={69} color={"rgb(218, 218, 218)"} />
        <Meter title="Guaranteed" meterValue={80} color={"rgb(15, 54, 113)"} />
        <Meter title="Predicted" meterValue={106} color={"rgb(233, 204, 74)"} />
      </div>
    </section>
  );
}
export default Quarterly;
