import React from "react";
import "./design/Footer.css";

const Footer = () => {
  return (
    <div className="foot-nice">
      <div>
        <a href="tel:+972-54-675-0764">Click to call </a>
      </div>
      <div>
        <a href="mailto:binyamin.maimon@gmail.com">mail</a>
      </div>
      <div>
        <a href="https://github.com/BinyaminGit">Github</a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/binyamin-maimon-1113b4288/">
          linkedIn
        </a>
      </div>
      <div>
        <a href="" to="Policy">
          Facebook
        </a>
      </div>
      <div style={{ color: "green" }}> כל הזכויות שמורות ©</div>
    </div>
  );
};

export default Footer;
