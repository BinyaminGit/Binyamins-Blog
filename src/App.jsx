// https://binyamingit.github.io/Binyamins-Blog/

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Policy from "./Policy";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import "./design/App.css";
import axios from "axios";
import Feedback from "./Feedback";
import GamingStore from "./GamingStore";
import LandingPage from "./LandingPage";
import TaskManager from "./Task/TaskManager";

function Nav() {
  return (
    <nav className="nav1">
      {/* <Link to="/header"> Header</Link> */}
      <Link to="mainContent">על עצמי</Link>
      <Link to="tasks">מנהל משימות</Link>
      <Link to="myGamingStore">חנות הגיימינג שלי</Link>
      <Link to="landingPage">דף נחיתה למנעולן</Link>
      {/* <Link to="feedback">פידבק</Link> */}
      

      {/* <Link to="footer">Footer</Link> */}
    </nav>
  );
}

function AppWrapper() {
  // כאןז זה שהעמוד מיין יופיע אוטומטית בהתחלה
  const [showMain, setShowMain] = useState(true); // הגדרת המצב ההתחלתי ל-true
  const location = useLocation();

  useEffect(() => {
    // אם הנתיב אינו '/'
    if (location.pathname !== "/") {
      setShowMain(false); // לא להציג את ה-Main
    } else {
      setShowMain(true); // להציג את ה-Main
    }
  }, [location]);

  return (
    <div dir="rtl" className="bgcolor">
      {/* <div style={{ textAlign: "center" }}>
        <h6>{data ? data : "Loading..."}</h6>
      </div> */}

      <Header />
      <Nav />
      {showMain && <MainContent />}
      <Routes>
        {/* 3 props: objectName, size like h1-h6, and the key = idx */}
        <Route path="/mainContent" element={<MainContent />} />
        {/* <Route path="/feedback" element={<Feedback />} /> */}
        <Route path="/myGamingStore" element={<GamingStore />} />
        <Route path="/myGamingStore/policy" element={<Policy />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/tasks/*" element={<TaskManager />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;

// const [data, setData] = useState(null);

// useEffect(() => {
//   axios
//     .get("/api/data")
//     .then((response) => {
//       setData(response.data.message);
//     })
//     .catch((error) => {
//       console.error("There was an error fetching the data!", error);
//     });
// }, []);
