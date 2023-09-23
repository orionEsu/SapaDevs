import { useRef, useState } from "react";
import "../styles/Accordion.css";

import data from "../data.json";
import gsap from "gsap";

export default function Accordion() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const accordionRefs = useRef([]);

  const handleAccordionClick = (index) => {
    if (index === openAccordion) {
      gsap.to(
        accordionRefs.current[index].querySelector(".Accordion__content"),
        {
          height: 0,
          duration: 0.5,
          ease: "power1.inOut",
          onComplete: () => setOpenAccordion(null),
        }
      );
    } else {
      if (openAccordion !== null) {
        gsap.to(
          accordionRefs.current[openAccordion].querySelector(
            ".Accordion__content"
          ),
          {
            height: 0,
            duration: 0.5,
            ease: "power1.inOut",
          }
        );
      }
      setOpenAccordion(index);
      gsap.fromTo(
        accordionRefs.current[index].querySelector(".Accordion__content"),
        { height: 0 },
        {
          height: "auto",
          duration: 0.5,
          ease: "power1.inOut",
        }
      );
    }
  };

  const accordionData = data.accordion;
  return (
    <ul className="Accordion__Component small__text">
      {accordionData.map((item, index) => (
        <li
          onClick={() => handleAccordionClick(index)}
          key={index}
          className={`Accordion__item  ${
            openAccordion === index ? "open" : ""
          }`}
          ref={(el) => (accordionRefs.current[index] = el)}
        >
          <div className="Accordion__header">
            <p>{item.question}</p>
            <span className="primary__col_util">
              {openAccordion === index ? "-" : "+"}
            </span>
          </div>
          <div className="Accordion__content">{item.answer}</div>
        </li>
      ))}
    </ul>
  );
}
