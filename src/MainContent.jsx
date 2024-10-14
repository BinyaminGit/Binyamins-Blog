import React from "react";
import { ImageComponent, Access } from "./ImageComponent";

const MainContent = () => {
  const List = () => {
    const activities = [
      "אפליקציית ניהול משימות",
      "פיתוח יישום צ'ט עם redux -ו firebase",
      "  הכנה לבר מצווה אונליין - קריאה בתורה אינטראקטיבי",
      "משחק איש תלוי",
    ];
    return (
      <div>
        <ol>
          {activities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      </div>
    );
  };
  // ^elegant way to make lists in React

  return (
    <div id="MainContentRelative" className="mainstyle">
      <Access />
      <h2>בקצרה עלי</h2>
      <p className="container">
        שמי בנימין, נשוי +1 בן 33
        <br />
        אני סטודנט שנה 3 למדמ"ח באוניברסיטה הפתוחה
        <br />
        למדתי בתואר מגוון רחב של נושאים בתואר, חלקם מעניינים מאוד כגון: מבני
        נתונים, אלגוריתמים, מערכות הפעלה וכו
        <br />
        בנוסף הוספתי מגוון רחב של קורסים חיצוניים כדי להעשיר את הידע שלי בשפות /
        תוכנות נוספות, על מנת שיהיו לי כמה שיותר כלים לכניסה חלקה לפיתוח אתרים.
        <br />
        למדתי פיתוח Frontend באתרים כמו CodeBox ו ToCode, בימים אלה אני מסיים
        קורס פיתוח צד שרת כך שאהפוך למתכנת Fullstack שלם, וכך אוכל למקסם את
        יכולותיי בשני צדדי הפיתוח
      </p>
      <br />
      <hr />
      <ImageComponent />
      <h2>מה אני יודע לעשות?</h2>
      <ul>
        <li>React</li>
        <li>HTML/ CSS/ JavaScript</li>
        <li>Java / JavaFX</li>
        <li>Python</li>
        <li>node.js/Express.js</li>
        <li>
          <span dir="ltr">C#</span>
        </li>
        <li>
          <span dir="rtl">ועוד....</span>
        </li>
      </ul>

      <br />

      {/* <hr /> */}
      <h2>פרוייקטים עתידיים </h2>
      <List />
      <br />
      {/* <hr /> */}
      <h2>התחביבים שלי</h2>
      <ul>
        <li>צילום</li>
        <li>טיולים בטבע</li>
        <li>אימוני מתח / שחייה</li>
        <li>...</li>
        <br />
      </ul>
    </div>
  );
};

export default MainContent;
