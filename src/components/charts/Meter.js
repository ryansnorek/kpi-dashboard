import ReactSpeedometer from "react-d3-speedometer";

function Meter({ meterValue, color }) {
  return (
    <div className="meter">
      <ReactSpeedometer
        value={meterValue}
        height={100}
        fluidWidth={true}
        minValue={0}
        maxValue={120}
        needleTransitionDuration={1000}
        needleColor="black"
        segmentColors={[color]}
      />
    </div>
  );
}
export default Meter;
