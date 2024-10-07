import ourFamilyImage from "./our_family.jpg";

function ImageComponent() {
  return (
    <div className="image-position">
      <img
        src={ourFamilyImage}
        alt="our_family1"
        style={{ width: "450px", height: "300px" }}
      />
    </div>
  );
}

export default ImageComponent;
