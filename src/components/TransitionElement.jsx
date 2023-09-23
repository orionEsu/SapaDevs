/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import gsap from "gsap";

function TransitionElement({
  children,
  direction = "left", // Default direction is left
  delay = 0,
  duration = 1, // Default duration
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      let initial = {};
      let animationProps = {};

      if (direction === "left" || direction === "right") {
        initial = {
          x: direction === "left" ? "-100%" : "100%",
          opacity: 0,
        };

        animationProps = {
          x: "0%",
        };
      } else if (direction === "bottom" || direction === "top") {
        initial = {
          y: direction === "bottom" ? "100%" : "-100%",
          opacity: 0,
        };

        animationProps = {
          y: "0%",
        };
      }

      // Define the animation properties
      animationProps = {
        ...animationProps,
        delay,
        opacity: 1,
        ease: "Power4.easeOut",
        duration,
      };

      // Use gsap to create the animation
      gsap.fromTo(element, { ...initial }, { ...animationProps });
    }
  }, [delay, direction, duration]);

  return <div ref={elementRef}>{children}</div>;
}

export default TransitionElement;
