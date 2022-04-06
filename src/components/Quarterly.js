import Meter from "./charts/Meter";
import { getQuarterlyPeriods } from "../helper";
import { useState } from "react";
import useHighlight from "../hooks/useHighlight";

function Quarterly() {
  const [currentQuarter, labels] = getQuarterlyPeriods();

  // const [handleClickTarget, toggleID, targetType] = useHighlight(() => {
  //   if (currentQuarter === 1) {
  //     return 4;
  //   }
  //   return currentQuarter - 1;
  // });

  const [quarter, setQuarter] = useState(() => {
    if (currentQuarter === 1) {
      return 4;
    }
    return currentQuarter - 1;
  });
  const qtrID = (qtr) => `${quarter === qtr && "highlight"}`;
  const handleClickQtr = (e) => setQuarter(Number(e.target.name));

  return (
    <section className="quarterly">
      <div className="period">
        <button id={qtrID(1)} name={1} onClick={handleClickQtr}>
          {labels[0]}
        </button>
        <button id={qtrID(2)} name={2} onClick={handleClickQtr}>
          {labels[1]}
        </button>
        <button id={qtrID(3)} name={3} onClick={handleClickQtr}>
          {labels[2]}
        </button>
        <button id={qtrID(4)} name={4} onClick={handleClickQtr}>
          {labels[3]}
        </button>
      </div>
      <div className="meters">
        <Meter
          title="Estimated"
          meterValue={data[quarter][0]}
          color={"rgb(218, 218, 218)"}
          quarter={quarter}
        />
        <Meter
          title="Guaranteed"
          meterValue={data[quarter][1]}
          color={"rgb(15, 54, 113)"}
          quarter={quarter}
        />
        <Meter
          title="Predicted"
          meterValue={data[quarter][2]}
          color={"rgb(233, 204, 74)"}
          quarter={quarter}
        />
      </div>
    </section>
  );
}
export default Quarterly;

const data = {
  1: [69, 80, 106],
  2: [55, 67, 98],
  3: [89, 88, 99],
  4: [76, 43, 55]
}