import React from "react";

import ourFamilyImage from "./images/our_family.jpg";
import access1 from "./images/access1.jpeg";

function ImageComponent() {
  return (
    <div className="image-position">
      <img
        src={ourFamilyImage}
        alt="our_family1"
        style={{ width: "400px", height: "300px" }}
      />
    </div>
  );
}

function Access() {
  return (
    <div className="accMan">
      <a href="https://aisrael.org/">
        <img src={access1} alt="access1" style={{ width: "80px" }} />
      </a>
    </div>
  );
}

export { ImageComponent, Access };
