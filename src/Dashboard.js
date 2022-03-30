import Header from "./components/Header";
import Status from "./components/Status";
import Performance from "./components/Performance";
import Quarterly from "./components/Quarterly";
import Issues from "./components/Issues";
import IssuesAssignee from "./components/IssuesAssignee";

function Dashboard() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <main>
          <div className="top">
            <div className="left">
              <Status />
              <Performance />
            </div>
            <div className="right">
              <Quarterly />
            </div>
          </div>
          <div className="bottom">
            <Issues />
            <IssuesAssignee />
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
