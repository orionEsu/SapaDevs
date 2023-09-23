/* eslint-disable react/prop-types */

import PurpleFlare from "../assets/svgs/purple-flare.webp";

export default function Gradient({
  top = 0,
  left = 0,
  width = 100,
  height = 100,
}) {
  const divStyle = {
    position: "absolute",
    top: `${top}%`,
    left: `${left}%`,
    width: `${width}%`,
    height: `${height}%`,
    maxWidth: "400px",
    maxHeight: "400px",

    borderRadius: "50%",
    background: `url(${PurpleFlare}) center center / cover no-repeat`,
    // zIndex: -1,
    filter: "blur(10px)",
    opacity: 0.7,
    pointerEvents: "none",
  };

  return <div className="gradient__component" style={divStyle}></div>;
}
