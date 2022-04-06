import { useState } from "react";

import Header from "./components/Header";
import Status from "./components/Status";
import Performance from "./components/Performance";
import Quarterly from "./components/Quarterly";
import Issues from "./components/Issues";
import IssuesAssignee from "./components/IssuesAssignee";
import Login from "./components/Login";

function Dashboard() {
  const [scrollBreakPoint, setScrollBreakPoint] = useState(false);
  
  const handleScroll = () => {
    const element = document.querySelector(".wrapper");
    if (element.scrollTop > 60) {
      setScrollBreakPoint(true);
    } else {
      setScrollBreakPoint(false);
    }
  };
  const [loggedIn, setLoggedIn] = useState(false);
  
  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} />;
  }

  return (
    <>
      <Header scrollBreakPoint={scrollBreakPoint}/>
      <div
        className={`wrapper ${scrollBreakPoint && "scrolled-landing"}`}
        onScroll={handleScroll}
      >
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
      </div>
    </>
  );
}

export default Dashboard;
