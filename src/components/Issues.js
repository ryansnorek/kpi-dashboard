import { useState } from "react";
import { issues } from "../data";

function Issues() {
  const [issueType, setIssueType] = useState("open");
  const handleClickType = (e) => setIssueType(e.target.name);
  const toggleID = (name) => `${issueType === name && "highlight"}`;

  const openIssues = issues.length;
  const resolutionTime = 4.2;
  return (
    <section className="issues">
      <div className="header">
        <h2>Issues</h2>
        <div className="right">
          <div className="metric">
            <h4>Open Issues: </h4>
            <h4 id="dark">{openIssues}</h4>
          </div>
          <div className="metric">
            <h4>Ave. Resolution Time: </h4>
            <h4 id="dark">{resolutionTime} days</h4>
          </div>
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
