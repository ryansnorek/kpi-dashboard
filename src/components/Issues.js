import { useState } from "react";
import { issues } from "../data";

function Issues() {
  const [issueType, setIssueType] = useState("open");
  const handleClickType = (e) => setIssueType(e.target.name);
  const toggleID = (name) => `${issueType === name && "highlight"}`;

  return (
    <section className="issues">
      <div className="header">
        <h2>Issues</h2>
        <div className="right">
          <h4>Open Issues: 1</h4>
          <h4>Ave. Resolution Time: 7 days</h4>
        </div>
      </div>
      <div className="buttons">
        <button id={toggleID("open")} onClick={handleClickType} name="open">
          Open
        </button>
        <button id={toggleID("closed")} onClick={handleClickType} name="closed">
          Closed
        </button>
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
        );
      })}
    </section>
  );
}
export default Issues;
