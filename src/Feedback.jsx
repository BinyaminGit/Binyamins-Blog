import { Access } from "./ImageComponent";

function WellDone() {
  return <h2> WellDone</h2>;
}
const shoot = () => {
  return alert("Yoy are awesome! see you");
};

function Feedback() {
  return (
    <div>
      <Access />
      <h2 dir="rtl" style={{ color: "purple" }}>
        מלא את הטופס
      </h2>
      <form action="" method="GET" dir="rtl">
        {/* get is file on my computer, post is on the site   */}
        <br />
        <select>
          <option value="" selected>
            select your gender
          </option>
          <option value="">Man</option>
          <option value="">Woman</option>
        </select>
        <br />
        <br />
        <label for="feedbk"> דרג את האתר שלי</label>
        <input
          name="feed1"
          id="feedbk"
          type="number"
          min="1"
          max="10"
          placeholder="1-10"
        />
        <br />
        {/* <label for="birthday"> תאריך הלידה שלך</label>
        <input name="birth1" id="birthday" type="date" />
        <br />
        <label for="pass">הכנס כאן סיסמה</label>
        <input name="pass1" id="pass" type="password" placeholder="*******" />
        <br /> */}
        התרשמות מהאתר:
        <br />
        כן
        <input id="dialog" type="radio" />
        לא
        <input id="dialog" type="radio" />
        <br />
        <br />
        <label for="rev">הערות נוספות </label>
        <br />

        <textarea
          id="rev"
          type="text"
          placeholder="review"
          rows="20"
          cols="50"
        ></textarea>
        <input type="reset" />
        {/* <input type="submit" value="send" /> */}
        {/* </form>
      <br />
      option*3
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <br />
      <br />
      <form action="" method="post">
        <br /> */}
        <br />
        <br />
        סמן אם תבקר באתר זה שוב <input type="checkbox" />
        <br />
        <br />
        <button onClick={shoot}> לסיום לחץ כאן</button>
        <br />
        <br />
      </form>
      {/* <WellDone /> */}
    </div>
  );
}

export default Feedback;
