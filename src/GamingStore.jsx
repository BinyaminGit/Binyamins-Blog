import { Access } from "./ImageComponent";
import React from "react";
// import Sale from "./Sale";
import "./MyStore.css";
import chair1 from "./chair1.jpg";
import chair2 from "./falcon1.jpg";
import mouse1 from "./mouse.jpeg";
import mouse2 from "./mouse2.jpeg";
import earphone1 from "./Ear1.jpg";
import earphone2 from "./ear2.jpg";
import table1 from "./gamingTable.jpg";
import table2 from "./gamingTable2.jpg";
import { Link, Outlet } from "react-router-dom";
import Policy from "./Policy";

const insertToCart = () => {
  return alert("inserted to cart");
};

function Mouse1() {
  return (
    <div>
      <img src={mouse1} alt="mise1" style={{ width: "200px" }} />
    </div>
  );
}
function Mouse2() {
  return (
    <div>
      <img src={mouse2} alt="mise1" style={{ width: "200px" }} />
    </div>
  );
}
function Chair1() {
  return (
    <div>
      <img src={chair1} alt="mise1" style={{ width: "200px" }} />
    </div>
  );
}
function Chair2() {
  return (
    <div>
      <img src={chair2} alt="mise1" style={{ width: "200px" }} />
    </div>
  );
}
function Ear1() {
  return (
    <div>
      <img src={earphone1} alt="earphone1" style={{ width: "200px" }} />
    </div>
  );
}
function Ear2() {
  return (
    <div>
      <img src={earphone2} alt="earphone2" style={{ width: "200px" }} />
    </div>
  );
}
function Table1() {
  return (
    <div>
      <img src={table1} alt="table1" style={{ width: "200px" }} />
    </div>
  );
}
function Table2() {
  return (
    <div>
      <img src={table2} alt="table2" style={{ width: "200px" }} />
    </div>
  );
}

function GamingStore() {
  return (
    <div>
      <Access />
      <h2 style={{ color: "darkred" }}>חנות הגיימינג שלי</h2>
      {/* <Outlet /> */}
      <Link to={"Policy"}>תקנון האתר</Link>
      <div className="store">
        <div className="item">
          <h3>עכבר גיימינג אלחוטי Glorious Model O</h3>
          <Mouse1 />
          <h4>
            עכבר הגיימינג הקל ביותר, עם פעולה מהירה ללא השהייה וביצועים מעולים
            עם החיישן האלחוטי BAMF שלנו.
          </h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>הגדל עכבר גיימינג חוטי איכותי עם תאורת RAINBOW</h3>
          <Mouse2 />
          <h4>
            כבר גיימינג חוטי Marvo המשלב עיצוב ארגונומי יוקרתי עם תאורת RGB
            צבעונית וחווית שימוש אולטימטיבית עם חיישן אופטי מהיר ומדויק שיעזור
            לכם להיות מהירים וחדים הרבה היותר במהלך המשחק ומגוון לחצנים שונים
            הניתנים לתכתנות על פי נוחות!
          </h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>כיסא גיימינג Dragon Cyber </h3>
          <Chair1 />
          <h4>
            קוח יקר, כיסא זה מגיע באריזתו המקורית וכולל תכולה מלאה, בקניית כיסא
            גיימינג Dragon Cyber בהייטק סטור תיהנו מאחריות יבואן רשמי למשך 12
            חודשים הכולל שירות בפריסה ארצית רחבה.
          </h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>כסא גיימינג Scorpius Lightning</h3>
          <Chair2 />
          <h4>
            כיסא נח, זול ואיכותי ביותר המגיע עם אורות RGB על שלט שעובד מרחוק על
            נורות הלד בו, משענת וכיסא מתכווננים, תפירה איכותית וריפוד דמוי עור
            מונע כתמים, דברים המגיעים בכיסאות לרוב רק בכיסאות הרבה יותר יקרים!
            חברת סקורפיוס הינה חברה לייצור אביזרי גיימינג איכותיים, כל מוצר
            שאנחנו מביאים בדומינטור נבדק בקפידה בידיעה שאנחנו מוכרים את המוצרים
            האיכותיים ביותר שהכסף שלכם שווה!
          </h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>Kraken Razer</h3>
          <Ear1 />
          <h4>
            אוזניות גיימינג חוטיות Razer רייזר Kraken Tournament Edition Green
          </h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>Ozeino Earphones</h3>
          <Ear2 />
          <h4>
            אוזניות גיימינג של Ozeino עבור Ps5, Ps4, PC עם צליל סראונד 7.1,
            אוזניות גיימינג עם ביטול רעשים מיקרופון גמיש RGB אור אוזניות זיכרון
            עבור Xbox Series X/S, PC, Mac, מחשב נייד, טלפון
          </h4>
          <button className="button7" onClick={insertToCart}>
            הוסף לעגלה
          </button>
        </div>

        <div className="item">
          <h3>ASTRAL INVASION</h3>
          <Table1 />
          <h4>
            שולחן כתיבה / גיימינג עם אורות לד צבעוניים RGB במסגרת השולחן, שלט
            רחוק לשליטה על מצבי התאורה שבמסגרת השולחן עשוי מרגלי מתכת ופלטת MDF
            אורך: 1600 מ”מ עומק 720 מ”מ גובה: 740 מ”מ
          </h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>שולחן גיימינג Cougar DEIMUS 120</h3>
          <Table2 />
          <h4>
            שולחן גיימינג קומפקטי עמיד וחזק עם תאורת RGB דו צדדית עם אפקטים
            ומצבים שונים עיצוב קצה קעור עשוי מסיבי לוח בצפיפות בינונית (MDF)
            שהוא חזק, נוקשה ושטוח משטח חלבי נגד שריטות
          </h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
      </div>
      {/* <Sale className="sales" /> */}
    </div>
  );
}

export default GamingStore;
