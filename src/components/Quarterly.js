import Meter from "./charts/Meter";
import { getQuarter } from "../helper";
import { useState } from "react";

function Quarterly() {
  const currentQuarter = getQuarter();
  const [quarter, setQuarter] = useState(currentQuarter);
  const qtrID = (qtr) => `${quarter === qtr && "highlight"}`;
  const handleClickQtr = (e) => setQuarter(e.target.name);

  return (
    <section className="quarterly">
      <div className="period">
        <button id={qtrID("1")} name="1" onClick={handleClickQtr}>
          1Q22
        </button>
        <button id={qtrID("2")} name="2" onClick={handleClickQtr}>
          2Q22
        </button>
        <button id={qtrID("3")} name="3" onClick={handleClickQtr}>
          3Q22
        </button>
        <button id={qtrID("4")} name="4" onClick={handleClickQtr}>
          4Q22
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
