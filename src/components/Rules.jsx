import RulesImage from "../assets/rules.webp";
import Gradient from "./Gradient";
import ScrollTriggerWrapper from "./ScrollTriggerWrapper";
import Star from "./Star";

export default function Rules() {
  return (
    <section className="utility-section rules-section">
      <div className="container Utility__Component mobile__layout">
        <ScrollTriggerWrapper>
          <article>
            <h2 className="heading-2">
              Rules and
              <span className="heading-span"> Guidelines</span>
            </h2>
            <p className="heading--title">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether
              you&apos;re a coding genius, a design maverick, or a concept
              wizard, you&apos;ll have the chance to transform your ideas into
              reality. Solving real-world problems, pushing the boundaries of
              technology, and creating solutions that can change the world,
              that&apos;swhat we&apos;re all about!
            </p>
          </article>
        </ScrollTriggerWrapper>
        <ScrollTriggerWrapper direction="right">
          <article>
            <img
              className="rules__img"
              src={RulesImage}
              alt="illustration of a woman penning down rules"
            />
          </article>
        </ScrollTriggerWrapper>
        <Gradient top={-10} left={-5} />
        <Gradient top={30} left={90} />
        <Star color="gray" top={5} left={70} />
        <Star color="white" top={50} left={10} />
      </div>
    </section>
  );
}
