import ReactSpeedometer from "react-d3-speedometer";

function Meter({ title, meterValue, color }) {

  return (
    <div className="meter">
      <ReactSpeedometer
        value={meterValue}
        segments={6}
        fluidWidth={true}
        minValue={0}
        maxValue={120}
        needleTransitionDuration={1000}
        needleColor="black"
        needleHeightRatio={.85}
        ringWidth={20}
        labelFontSize=".6rem"
        currentValueText={`Produced/${title}: ${meterValue}%`}
        textColor="rgb(15, 54, 113)"
        valueTextFontSize=".8rem"
        segmentColors={[color]}
      />
    </div>
  );
}
export default Meter;
