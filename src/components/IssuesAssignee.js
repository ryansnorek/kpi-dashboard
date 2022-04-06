import { issues } from "../data";
import useForm from "../hooks/useForm";
import useHighlight from "../hooks/useHighlight";

const initialValues = {
  assignee: "",
};

function Issues() {
  const [values, handleChange] = useForm(initialValues);

  const [handleClickTarget, toggleID] = useHighlight("open");

  const openIssues = issues.length;
  const resolutionTime = 8.9;

  return (
    <section className="issues">
      <div className="header">
        <select name="assignee" value={values.assignee} onChange={handleChange}>
          <option value={0}>Jarin</option>
        </select>
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
        <button id={toggleID("open")} onClick={handleClickTarget} name="open">
          Open
        </button>
        <button id={toggleID("closed")} onClick={handleClickTarget} name="closed">
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
