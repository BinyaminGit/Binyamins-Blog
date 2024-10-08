import logo from "./logo.bmp";

function Header() {
  return (
    <div className="mountains">
      {/* <a href="https://www.linkedin.com/in/binyamin-maimon-1113b4288/" src="aa"> */}
      <img className="logo" src={logo} />
      {/* </a> */}
      <h1>הבלוג של בנימין</h1>
    </div>
  );
}
export default Header;
