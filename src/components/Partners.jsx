import LibertyImage from "../assets/svgs/Liberty.webp";
import LibertyPayImage from "../assets/svgs/LibertyPay.webp";
import WinWiseImage from "../assets/svgs/Winwise.webp";
import WhisperImage from "../assets/svgs/Whisper.webp";
import PayboxImage from "../assets/svgs/Paybox.webp";
import VizualImage from "../assets/svgs/VizualPlus.webp";

import "../styles/partners.css";
import ScrollTriggerWrapper from "./ScrollTriggerWrapper";
import Gradient from "./Gradient";
import Star from "./Star";
const Partners = () => {
  const partnerImages = [
    LibertyImage,
    LibertyPayImage,
    WinWiseImage,
    WhisperImage,
    PayboxImage,
    VizualImage,
  ];
  return (
    <section className="partners-section">
      <div className="container partners">
        <ScrollTriggerWrapper direction="bottom">
          <h2 className="heading-2 partners__heading">Partners and Sponsors</h2>
        </ScrollTriggerWrapper>
        <ScrollTriggerWrapper direction="bottom" delay={10}>
          <p className="heading--title">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </ScrollTriggerWrapper>

        <div className="partners__grid">
          {partnerImages.map((image, index) => (
            <ScrollTriggerWrapper
              key={index}
              delay={index * 0.5}
              direction={index % 2 === 0 ? "right" : "left"}
            >
              <div>
                <img src={image} alt={`Partner ${index + 1} Logo`} />
              </div>
            </ScrollTriggerWrapper>
          ))}
        </div>
        <Gradient top={10} left={-5} />
        <Gradient top={70} left={75} />
        <Star color="purple" top={10} left={10} />
        <Star color="purple" top={40} left={60} />
        <Star color="white" top={80} left={55} />
      </div>
    </section>
  );
};

export default Partners;
