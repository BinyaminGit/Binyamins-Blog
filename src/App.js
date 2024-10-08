// https://binyamingit.github.io/Binyamins-Blog/

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import "./App.css";
import axios from "axios";
import Feedback from "./Feedback";
import GamingStore from "./GamingStore";



function Nav() {
  return (
    <nav className="nav1">
      {/* <Link to="/header"> Header</Link> */}
      <Link to="maincontent">על עצמי</Link>
      <Link to="myGamingStore">חנות הגיימינג שלי</Link>
      <Link to="feedback">פידבק</Link>
      <a
        href="https://www.yydevelopment.co.il/portfolio-examples/landing-page-examples/rd-plumbing/"
        target="_blank"
        rel="noopener noreferrer"
      >
        (בהקמה)אתר הנחיתה שלי
      </a>
      {/* <Link to="footer">Footer</Link> */}
    </nav>
  );
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div dir="rtl" className="bgcolor">
      <div style={{ textAlign: "center" }}>
        <h6>{data ? data : "Loading..."}</h6>
      </div>
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route path="/maincontent" element={<MainContent />} />
          {/* 3 props: objectName, size like h1-h6, and the key = idx */}
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/myGamingStore" element={<GamingStore />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
