/* eslint-disable react/prop-types */

// TODO ///
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollTriggerWrapper({
  children,
  direction = "left",
  delay = 0,
  startPer = "80",
  className = "",
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      gsap.registerPlugin(ScrollTrigger);

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

      gsap.fromTo(
        element,
        { ...initial },
        {
          ...animationProps,
          opacity: 1,
          duration: 0.6,
          ease: "Power4.easeOut",
          scrollTrigger: {
            trigger: element,
            start: `center ${startPer}%`,
            delay: delay,
            // toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [direction, delay, startPer]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

export default ScrollTriggerWrapper;
