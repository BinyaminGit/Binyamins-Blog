import ImageComponent from "./ImageComponent";

const MainContent = (props) => {
  const List = () => {
    const activities = [
      "פרוייקט מסכם - חנות גיימנינג",
      "אתר נחיתה לאיש מקצוע",
      "  הכנה לבר מצווה אונליין- קריאה בתורה אינטראקטיבי",
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
    <div id="MainContentRelative">
      <ImageComponent />

      <h2>בקצרה עלי</h2>
      <p className="container">
        .שמי בנימין, נשוי +1 בן 33
        <br />
        אני סטודנט שנה 3 למדמ"ח באוניברסיטה הפתוחה
        <br />
        למדתי בתואר מגוון רחב של נושאים בתואר, חלקם מעניינים מאוד כגון: מבני
        נתונים, אלגוריתמים, מערכות הפעלה וכו
        <br />
        בנוסף הוספתי מגוון רחב של קורסים חיצוניים כדי להעשיר את הידע שלי בשפות /
        תוכנות נוספות, על מנת שיהיו לי כמה שיותר כלים לכניסה חלקה לפיתוח אתרים.
      </p>
      <br />
      <hr />
      <h2>מה אני יודע לעשות?</h2>
      <ul>
        <li>Java / JavaFX</li>
        <li>Python</li>
        <li>HTML/ CSS/ JavaScript</li>
        <li>React</li>
        <li>node.js/Express.js</li>
        <li>
          <span dir="ltr">C#</span>
        </li>
        <li>
          <span dir="rtl">ועוד...</span>
        </li>
      </ul>

      <br />
      <hr />
      <h2>התחביבים שלי</h2>
      <ul>
        <li>צילום</li>
        <li>טיולים בטבע</li>
        <li>אימוני מתח / שחייה</li>
        <li>...</li>
        <br />
      </ul>
      <br />
      <hr />
      <h2>פרוייקטים עתידיים {props.num}</h2>
      <List />
    </div>
  );
};

export default MainContent;
