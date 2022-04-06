import { getQuarterlyPeriods, getQuarterNumber } from "../helper";
import useHighlight from "../hooks/useHighlight";

import Meter from "./charts/Meter";

function Quarterly() {
  const [currentQuarter, labels] = getQuarterlyPeriods();

  const quarterNumber = getQuarterNumber(currentQuarter);

  const [handleClickTarget, toggleID, targetType] = useHighlight(quarterNumber, "qtr");

  return (
    <section className="quarterly">
      <div className="period">
        <button id={toggleID(1)} name={1} onClick={handleClickTarget}>
          {labels[0]}
        </button>
        <button id={toggleID(2)} name={2} onClick={handleClickTarget}>
          {labels[1]}
        </button>
        <button id={toggleID(3)} name={3} onClick={handleClickTarget}>
          {labels[2]}
        </button>
        <button id={toggleID(4)} name={4} onClick={handleClickTarget}>
          {labels[3]}
        </button>
      </div>
      <div className="meters">
        <Meter
          title="Estimated"
          meterValue={data[targetType][0]}
          color={"rgb(218, 218, 218)"}
        />
        <Meter
          title="Guaranteed"
          meterValue={data[targetType][1]}
          color={"rgb(15, 54, 113)"}
        />
        <Meter
          title="Predicted"
          meterValue={data[targetType][2]}
          color={"rgb(233, 204, 74)"}
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
  4: [76, 43, 55],
};
