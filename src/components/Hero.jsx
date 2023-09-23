import FireImg from "../assets/svgs/fire.webp";
import ChainImg from "../assets/svgs/chain.webp";
import BulbImg from "../assets/svgs/bulb.webp";
import HeroLine from "../assets/svgs/hero-line.svg";
import HeroImage from "../assets/hero-bg.webp";
import ActionButton from "../components/ActionButton";
import Countdown from "../components/Countdown";
import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";
import TransitionElement from "./TransitionElement";
import Gradient from "./Gradient";
import Star from "./Star";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <main>
      <div className="Hero__section container">
        <div className="Hero__text">
          <TransitionElement>
            <h1 className="heading-1">
              <p>
                getLinked{" "}
                <span style={{ position: "relative" }}>
                  Tech <img className="bulb__img" src={BulbImg} alt="" />
                </span>
              </p>
              <p>
                Hackathon <span className="primary__col_util"> 1.0</span>
                <img className="chain__img" src={ChainImg} alt="Chain Image" />
                <img className="fire__img" src={FireImg} alt="Fire Image" />
              </p>
            </h1>
          </TransitionElement>
          <div className="floating__text">
            <p>Igniting a Revolution in HR Innovation</p>
            <img src={HeroLine} alt="" />
          </div>
          <TransitionElement delay={0.25}>
            <p className="heading--title">
              Participate in getlinked tech Hackathon 2023 stand <br /> a chance
              to win a Big prize
            </p>
          </TransitionElement>
          <TransitionElement delay={0.5}>
            <ActionButton
              BtnContent={"Register"}
              onFunc={() => navigate("/register")}
            />
          </TransitionElement>
          <TransitionElement delay={0.75} direction="bottom">
            <Countdown />
          </TransitionElement>
        </div>

        <img className="Hero__image" src={HeroImage} alt="" />
        <Star top={10} left={20} color="white" />
        <Star top={20} left={90} color="gray" />
        <Star top={70} left={40} color="gray" />
      </div>
      <Gradient />
    </main>
  );
}
