import React from "react";
import "./LandingPage.css";
import manulan from "./manulan.jpg";
import manulan1 from "./manulan1.png";

// same function:
// const WellDone = () => <h2>Welcome to the Landing Site</h2>;

const LandingPage = () => {
  return (
    <div id="container1">
      {/* לוגו ושם מנעולן */}
      <header className="header1">
        <div className="logo1">
          <img src={manulan1} alt="לוגו מנעולן" />
        </div>
        <div className="contact-info">
          <h1 style={{ color: "green", font: " georgia" }}>
            בנימין - מנעולן מורשה
          </h1>
          <a href="tel:0546750764" className="call-btn">
            054-6750764 חייג עכשיו!
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
            <p>פתיחת רכבים</p>
          </div>
          <div className="circle">
            <p>התקנת אינטרקום</p>
          </div>
          <div className="circle">
            <p>טיפול באזעקות</p>
          </div>
        </div>
        <h2 id="h2lock">זקוק למעולן מקצועי? נתקעת מחוץ לבית?</h2>
      </section>

      {/* על המנעולן */}
      <section className="about">
        <h2 style={{ color: "green" }}>בנימין - מנעולן מורשה</h2>
        <p>
          אני מנעולן מוסמך עם ניסיון רב בתחום המנעולנות.
          <br />
          מספק שירות מהיר, מקצועי ואמין כבר 20 שנה.
          <br />
          מבצע את כל סוגי הפריצות, התקנת אזעקות, שכפול מפתחות, וקודנים
        </p>

        <a href="tel:0546750764" className="call-btn">
          054-6750764 חייג עכשיו!
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
      <section className="reviews">
        <h2>חוות דעת</h2>
        <p>
          "ננעלתי מחוץ לרכב, התקשרתי לבני ותוך חצי שעה כבר הדלת הייהתה פתוחה" -
          לקוח
        </p>

        <p>"שירות מהיר ומקצועי!" - לקוח מרוצה</p>
        <p>"מומלץ בחום!" - לקוח נוסף</p>
      </section>

      {/* טופס יצירת קשר */}
      <section className="contact-form">
        <h2>צור קשר</h2>
        <form className="form1">
          <input type="text" placeholder="שם" />
          <input type="phone" placeholder="טלפון לחזרה" />
          <textarea placeholder="השאר הודעה"></textarea>
          <button type="submit">שלח</button>
        </form>
      </section>

      {/* חתימה */}
      <footer className="footer1">
        <p>© 2024 שירותי מנעולנות. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
