import Header from "./components/Header";
import Status from "./components/Status";
import Performance from "./components/Performance";
import Quarterly from "./components/Quarterly";

function Dashboard() {
  return (
    <>
      <Header />
    <div className="wrapper">
      <main>
        <div className="left">
          <Status />
          <Performance />
        </div>
        <div className="right">
          <Quarterly />
        </div>
      </main>
    </div>
    </>
  );
}

export default Dashboard;
