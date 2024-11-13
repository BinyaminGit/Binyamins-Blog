import React from "react";
import "./design/LandingPage.css";
import manulan from "./images/manulan.jpg";
import manulan1 from "./images/manulan1.png";

// same function:
// const WellDone = () => <h2>Welcome to the Landing Site</h2>;

const LandingPage = () => {
  return (
    <div id="container1">
      {/* לוגו ושם מנעולן */}
      <header className="header1">
        <div>
          <img className="logo1" src={manulan1} alt="לוגו מנעולן" />
        </div>
        <div className="contact-info">
          <h1 style={{ color: "lightcyan", font: " georgia" }}>
            בנימין - מנעולן מורשה
          </h1>
          <a href="tel:0546750764" className="call-btn">
            חייג עכשיו!
          </a>
        </div>
      </header>

      {/* תמונת מנעול עם שירותים */}
      <section className="services-lock">
        <img src={manulan} alt="תמונת מנעול" className="lock-image" />
        <div className="services-circles">
          <div className="circle">
            <p>לפריצת כספות</p>
          </div>
          <div className="circle">
            <p>לפתיחת רכבים</p>
          </div>
          <div className="circle">
            <p>התקנת אינטרקום</p>
          </div>
          <div className="circle">
            <p>טיפול באזעקות</p>
          </div>
        </div>
        <h2 id="h2lock" style={{ color: "black" }}>
          זקוק למעולן מקצועי? נתקעת מחוץ לבית?
        </h2>
      </section>

      {/* על המנעולן */}
      <section id="bgcolor">
        <h2 style={{ color: "lightcyan" }}>בנימין - מנעולן מורשה</h2>
        <p style={{ color: "lightcyan" }}>
          אני מנעולן מוסמך עם ניסיון רב בתחום המנעולנות.
          <br />
          מספק שירות מהיר, מקצועי ואמין כבר 20 שנה.
          <br />
          מבצע את כל סוגי הפריצות, התקנת אזעקות, שכפול מפתחות, וקודנים
        </p>

        <a href="tel:0546750764" className="call-btn">
          חייג עכשיו!
        </a>
      </section>

      {/* כפתור התקשרות */}

      {/* אזורי פעילות
      <section className="areas">
        <h2>אזורי פעילות</h2>
        <ul>
          <li>תל אביב</li>
          <li>רמת גן</li>
          <li>גבעתיים</li>
          <li>חולון</li>
        </ul>
      </section> */}

      {/* חוות דעת */}
      <section id="review">
        <h2>חוות דעת</h2>
        <p style={{ color: "black" }}>
          "ננעלתי מחוץ לרכב, התקשרתי לבני ותוך חצי שעה כבר הדלת הייהתה פתוחה" -
          לקוח
        </p>
        <br />
        <p style={{ color: "black" }}>"שירות מהיר ומקצועי!" - לקוח מרוצה</p>
        <br />
        <p style={{ color: "black" }}>"מומלץ בחום!" - לקוח נוסף</p>
        <br />
      </section>

      {/* טופס יצירת קשר */}
      <section id="bgcolor1">
        <h2>צור קשר</h2>
        <form id="form1">
          <input classname="input1" type="text" placeholder="שם" />
          <input classname="input1" type="phone" placeholder="טלפון לחזרה" />
          <textarea placeholder="השאר הודעה"></textarea>
          <button id="button3" type="submit">
            שלח
          </button>
        </form>
        <br />
        <br />
        <br />
      </section>
    </div>
  );
};

export default LandingPage;
