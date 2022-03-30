// import { useState } from "react";

import BarChart from "./charts/BarChart";

// const initialValues = {
//   period: "",
// };

function Performance() {
//   const [values, setValues] = useState(initialValues);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };
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
          <button>Day</button>
          <button>Month</button>
          <button>Quarter</button>
          <button>Year</button>
          <button>All-time</button>
        </div>
          <BarChart />
      </div>
    </section>
  );
}
export default Performance;

