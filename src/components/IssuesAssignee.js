import { useState } from "react";
import { issues } from "../data";

const initialValues = {
    assignee: ""
  };

function Issues() {
    const [values, setValues] = useState(initialValues);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    };
  return (
    <section className="issues">
      <div className="header">
      <select name="assignee" value={values.assignee} onChange={handleChange}>
          <option value={0}>Jarin</option>
        </select>
        <div className="right">
          <h4>Open Issues: 1</h4>
          <h4>Ave. Resolution Time: 7 days</h4>
        </div>
      </div>
      <div className="buttons">
        <button>Open</button>
        <button>Closed</button>
      </div>
      <div className="grid">
        <h4>Name</h4>
        <h4>Type</h4>
        <h4>Priority</h4>
        <h4>Assigned By</h4>
        <h4>Assigned To</h4>
        <h4>Running Clock (days)</h4>
      </div>
      {issues.map((issue) => {
            return (
                <div className="grid-items">
                    <p>{issue.name}</p>
                    <p>{issue.type}</p>
                    <p>{issue.priority}</p>
                    <p>{issue.assigned_by}</p>
                    <p>{issue.assigned_to}</p>
                    <p>{issue.running_clock}</p>
                </div>
            )
        })}
     
    </section>
  );
}
export default Issues;
