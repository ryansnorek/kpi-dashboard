import Meter from "./charts/Meter";

function Quarterly() {
  return (
    <section className="quarterly">
      <div className="period">
        <h3>1Q22</h3>
        <h3>2Q22</h3>
        <h3>3Q22</h3>
        <h3>4Q22</h3>
      </div>
      <div className="meters">
        <Meter title="Estimated" meterValue={69} color={"rgb(218, 218, 218)"} />
        <Meter title="Guaranteed" meterValue={80} color={"rgb(15, 54, 113)"} />
        <Meter title="Predicted" meterValue={106} color={"rgb(241, 210, 34)"} />
      </div>
    </section>
  );
}
export default Quarterly;
