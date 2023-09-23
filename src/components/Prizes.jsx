import "../styles/prizes.css";
import CupRewardsImage from "../assets/cupreward.webp";
import RewardsImage from "../assets/rewards.webp";
import ScrollTriggerWrapper from "./ScrollTriggerWrapper";
import Gradient from "./Gradient";
import Star from "./Star";

const Prizes = () => {
  return (
    <section className="prizes-section">
      <div className="container prizes">
        <div className="prizes__heading">
          <ScrollTriggerWrapper direction="top">
            <h2 className="heading-2">
              Prizes and<span className="heading-span">Rewards</span>
            </h2>
            <p className="heading--title">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </ScrollTriggerWrapper>
        </div>

        <div className="rewards">
          <ScrollTriggerWrapper>
            <img src={CupRewardsImage} alt="Cup rewards" />
          </ScrollTriggerWrapper>
          <ScrollTriggerWrapper direction="right">
            <img src={RewardsImage} alt="Rewards" />
          </ScrollTriggerWrapper>
        </div>
      </div>
      <Gradient top={30} left={10} />
      <Gradient top={50} left={80} />
      <Star color="white" left={20} top={15} />
      <Star color="white" left={85} top={85} />
    </section>
  );
};

export default Prizes;
