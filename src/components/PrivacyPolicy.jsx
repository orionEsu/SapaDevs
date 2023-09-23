import ActionButton from "./ActionButton";

import PrivacyImage from "../assets/svgs/privacypolicy.webp";
import ListImage from "../assets/svgs/list.webp";
import "../styles/policy.css";
import ScrollTriggerWrapper from "./ScrollTriggerWrapper";
import Gradient from "./Gradient";
import Star from "./Star";

const PrivacyPolicy = () => {
  return (
    <section className="policy-section">
      <div className="container policy">
        <div className="policy__statement">
          <ScrollTriggerWrapper direction="bottom">
            <h2 className="heading-2">
              Privacy Policy and <span className="heading-span">Terms</span>
            </h2>
          </ScrollTriggerWrapper>
          <ScrollTriggerWrapper direction="bottom" delay={1}>
            <p className="policy__statement--date">
              Last updated on September 12, 2023
            </p>
          </ScrollTriggerWrapper>
          <ScrollTriggerWrapper direction="bottom" delay={2}>
            <p className="heading--title policy__statement--title">
              Below are our privacy & policy, which outline a lot of goodies.
              it&apos;s our aim to always take of our participant
            </p>
          </ScrollTriggerWrapper>
          <ScrollTriggerWrapper direction="bottom" delay={3} startPer="100">
            <div className="policy__statement--container">
              <p>
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>

              <h3 className="heading-3 license__heading">Licensing Policy</h3>
              <p className="license">Here are terms of our Standard License:</p>
              <ul className="license__list">
                <div className="license__list--1">
                  <img src={ListImage} alt="List icon" />
                  <p className="license__item">
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </div>
                <div className="license__list--2">
                  <img src={ListImage} alt="List icon" />
                  <p className="license__item">
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </p>
                </div>
              </ul>

              <ActionButton BtnContent={"Read More"} />
            </div>
          </ScrollTriggerWrapper>
        </div>
        <ScrollTriggerWrapper direction="right">
          <img
            src={PrivacyImage}
            alt="Privacy Policy Image"
            className="policy-img"
          />
        </ScrollTriggerWrapper>
        <Gradient top={75} left={-5} />
        <Star color="purple" top={80} left={10} />
        <Star color="gray" top={10} left={20} />
        <Star color="purple" top={20} left={50} />
        <Star color="gray" top={80} left={80} />
      </div>
    </section>
  );
};

export default PrivacyPolicy;
