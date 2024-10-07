import React from "react";
import "./MyStore.css";
import chair1 from "./chair1.jpg";
import chair2 from "./falcon1.jpg";
import mouse1 from "./mouse.jpeg";
import mouse2 from "./mouse2.jpeg";

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

function GamingStore() {
  return (
    <div>
      <h2 style={{ color: "orange" }}>חנות הגיימינג שלי</h2>;
      <div className="store">
        <div className="item">
          <h3>game1</h3>
          <Mouse1 />
          <h4>item dexcription</h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>mouse2</h3>
          <Mouse2 />{" "}
          <h4>עכבר מחברת מיצוטבישיי בעיצוב מרהיב, רק עכשיו ב205 ש"ח</h4>
          <button className ="button2" onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>chair1</h3>
          <Chair1 />
          <h4>
            high standart chair quality, smooth fabric coost only 4000 ils
          </h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>chair2</h3>
          <Chair2 />
          <h4>VERY SPECAIL ITEM, edited edition</h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>game5</h3>
          <img src="mouse.jpg" alt="1"></img>
          <h4>item dexcription</h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>game6</h3>
          <img src="mouse.jpg" alt="1"></img>
          <h4>item dexcription</h4>
          <button className="button7" onClick={insertToCart}>
            הוסף לעגלה
          </button>
        </div>
        <div className="item">
          <h3>game7</h3>
          <img src="mouse.jpg" alt="1"></img>
          <h4>item dexcription</h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>game7</h3>
          <img src="mouse.jpg" alt="1"></img>
          <h4>item dexcription</h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>game7</h3>
          <img src="mouse.jpg" alt="1"></img>
          <h4>item dexcription</h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>game7</h3>
          <img src="mouse.jpg" alt="1"></img>
          <h4>item dexcription</h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>game7</h3>
          <img src="mouse.jpg" alt="1"></img>
          <h4>item dexcription</h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>game7</h3>
          <img src="mouse.jpg" alt="1"></img>
          <h4>item dexcription</h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>game7</h3>
          <img src="mouse.jpg" alt="1"></img>
          <h4>item dexcription</h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>game7</h3>
          <img src="mouse.jpg" alt="1"></img>
          <h4>item dexcription</h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>game7</h3>
          <img src="mouse.jpg" alt="1"></img>
          <h4>item dexcription</h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>game7</h3>
          <img src="mouse.jpg" alt="1"></img>
          <h4>item dexcription</h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
        <div className="item">
          <h3>game7</h3>
          <img src="mouse.jpg" alt="1"></img>
          <h4>item dexcription</h4>
          <button onClick={insertToCart}>הוסף לעגלה</button>
        </div>
      </div>
    </div>
  );
}

export default GamingStore;
