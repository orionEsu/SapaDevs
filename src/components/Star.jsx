/* eslint-disable react/prop-types */
import StarPurple from "../assets/svgs/star-purple.webp";
import StarGray from "../assets/svgs/star-gray.webp";
import StarWhite from "../assets/svgs/star-white.webp";

export default function Star({
  color = "purple",
  top = 0,
  left = 0,
  zIndex = -2,
}) {
  const StarStyle = {
    position: "absolute",
    top: `${top}%`,
    left: `${left}%`,
    zIndex,
    opacity: 0.5,
  };

  let starImage;

  if (color === "purple") {
    starImage = StarPurple;
  } else if (color === "gray") {
    starImage = StarGray;
  } else if (color === "white") {
    starImage = StarWhite;
  }
  return (
    <div style={StarStyle}>
      <img src={starImage} alt="Star " />
    </div>
  );
}
