import "../styles/footer.css";
import LogoImage from "../assets/svgs/logo.webp";
import ScrollTriggerWrapper from "./ScrollTriggerWrapper";
import XIcon from "../assets/svgs/x.svg";
import CallIcon from "../assets/svgs/call-icon.svg";
import LocationIcon from "../assets/svgs/location.svg";
import InstagramIcon from "../assets/svgs/instagram.svg";
import FacebookIcon from "../assets/svgs/facebook.svg";
import LinkedinIcon from "../assets/svgs/linkedin.svg";
import Star from "./Star";

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="footer__header">
          <ScrollTriggerWrapper>
            <img src={LogoImage} alt="Logo" />
            <p className="heading--title footer__header--description">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </ScrollTriggerWrapper>
          <div className="footer__header--policy">
            <ScrollTriggerWrapper>
              <a href="#">Terms of Use</a> <span className="line"></span>{" "}
              <a href="#">Privacy Policy</a>
            </ScrollTriggerWrapper>
          </div>
        </div>

        <div className="footer-2">
          <ScrollTriggerWrapper direction="right">
            <div className="footer__links">
              <h3 className="footer__heading">Useful Links</h3>
              <ul>
                <li className="footer__links--default footer__links--overview">
                  <a href="#">Overview</a>
                </li>
                <li className="footer__links--default footer__links--timeline">
                  <a href="#">Timeline</a>
                </li>
                <li className="footer__links--default footer__links--faq">
                  <a href="#">FAQs</a>
                </li>
                <li className="footer__links--default footer__links--register">
                  <a href="#">Register</a>
                </li>
              </ul>

              <div className="socials">
                <h3 className="footer__heading">Follow us</h3>
                <div className="socials__icons">
                  <a
                    href="https://www.instagram.com/getlinked.ai/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={InstagramIcon} alt="IG Icon" />
                  </a>

                  <a
                    href="https://twitter.com/getLinkedai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={XIcon} alt="X Icon" />
                  </a>

                  <a
                    href="https://web.facebook.com/getLinkedai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={FacebookIcon} alt="Facebook Icon" />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/getlinked-ai/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={LinkedinIcon} alt="LinkedIn Icon" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollTriggerWrapper>

          <div className="footer__contact">
            <ScrollTriggerWrapper direction="right">
              <h3 className="footer__heading">Contact us</h3>
              <ul>
                <li className="footer__links--default">
                  <a href="">
                    <img src={CallIcon} alt="Call icon" />
                    +234 679 81819
                  </a>
                </li>
                <li className="footer__links--default footer__contact--2">
                  <img src={LocationIcon} alt="Location Icon" />
                  <div>
                    <p className="footer__contact--location">27,Alara Street</p>
                    <p className="footer__contact--location">Yaba 100012</p>
                    <p className="footer__contact--location">Lagos State</p>
                  </div>
                </li>
              </ul>
            </ScrollTriggerWrapper>
          </div>
        </div>
        <Star color="white" top={60} left={10} zIndex={1} />
        <Star color="purple" top={80} left={50} zIndex={1} />
        <Star color="gray" top={30} left={60} zIndex={1} />
        <Star color="white" top={70} left={90} zIndex={1} />
      </div>

      <p className="credits">All rights reserved. © getlinked Ltd.</p>
    </footer>
  );
};

export default Footer;
