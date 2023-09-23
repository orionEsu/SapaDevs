// BackToTopButton.js
import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Get the current scroll position

      // Check if the user has scrolled up to 150vh
      if (scrollY >= window.innerHeight * 1.5) {
        // User has scrolled up to 150vh, hide the element
        setShowElement(false);
      } else {
        // User has not scrolled up to 150vh, show the element
        setShowElement(true);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling animation
    });
  };

  return (
    <div
      className={`back-to-top-button ${showElement ? "" : "visible"}`}
      onClick={scrollToTop}
    >
      ☝️
    </div>
  );
};

export default BackToTopButton;
