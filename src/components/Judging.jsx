import JudgingImage from "../assets/judging.webp";
import ActionButton from "./ActionButton";
import Gradient from "./Gradient";
import ScrollTriggerWrapper from "./ScrollTriggerWrapper";
import Star from "./Star";
export default function Judging() {
  return (
    <section className="utility-section">
      <div className="container Utility__Component">
        <article className="judging--1">
          <img
            className="judging__img"
            src={JudgingImage}
            alt="illustration of 2 people thinking"
          />
        </article>
        <ScrollTriggerWrapper direction="right">
          <article className="judging--2">
            <h2 className="heading-2">
              Juding Criteria
              <span className="heading-span"> Key Attributes</span>
            </h2>
            <ul className="small__text">
              <li>
                <h3 className="heading-3">Innovation and Creativity:</h3>{" "}
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </li>
              <li>
                <h3 className="heading-3">Functionality:</h3> Assess how well
                the solution works. Does it perform its intended functions
                effectively and without major issues? Judges would consider the
                completeness and robustness of the solution.
              </li>
              <li>
                <h3 className="heading-3">Impact and Relevance:</h3> Determine
                the potential impact of the solution in the real world. Does it
                address a significant problem, and is it relevant to the target
                audience? Judges would assess the potential social, economic, or
                environmental benefits.
              </li>
              <li>
                <h3 className="heading-3">Technical Complexity:</h3> Evaluate
                the technical sophistication of the solution. Judges would
                consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </li>
              <li>
                <h3 className="heading-3">Adherence to Hackathon Rules:</h3>{" "}
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </li>
            </ul>
            <ActionButton BtnContent={"Read More"} />
          </article>
        </ScrollTriggerWrapper>
        <Gradient top={50} left={5} />
        <Gradient top={80} left={75} />
        <Star color="purple" top={10} left={20} />
        <Star color="white" top={40} left={60} />
      </div>
    </section>
  );
}
