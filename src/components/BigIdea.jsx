import BigIdeaImage from "../assets/big-idea.webp";
import "../styles/Utility.css";
import ScrollTriggerWrapper from "./ScrollTriggerWrapper";
import Star from "./Star";

export default function BigIdea() {
  return (
    <section id="overview" className="utility-section ideas-section">
      <div className="container Utility__Component">
        <ScrollTriggerWrapper>
          <article>
            <img
              className="big__idea_img"
              src={BigIdeaImage}
              alt="The big idea illustration"
            />
          </article>
        </ScrollTriggerWrapper>
        <ScrollTriggerWrapper direction="right">
          <article>
            <h2 className="heading-2">
              introduction to getLinked
              <span className="heading-span">techHackathon 1.0</span>
            </h2>
            <p className="heading--title">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether
              you&apos;re a coding genius, a design maverick, or a concept
              wizard, you&apos;ll have the chance to transform your ideas into
              reality. Solving real-world problems, pushing the boundaries of
              technology, and creating solutions that can change the world,
              that&apos;s what we&apos;re all about!
            </p>
          </article>
        </ScrollTriggerWrapper>
        <Star color="purple" top={10} left={80} />
        <Star color="purple" top={50} left={10} />
      </div>
    </section>
  );
}
