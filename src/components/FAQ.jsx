import FAQImage from "../assets/faq.webp";
import Accordion from "./Accordion";
import ScrollTriggerWrapper from "./ScrollTriggerWrapper";
import Star from "./Star";
export default function FAQ() {
  return (
    <section id="faq" className="utility-section">
      <div className="container Utility__Component">
        <ScrollTriggerWrapper>
          <article>
            <h2 className="heading-2">
              Frequently Asked
              <span className="heading-span"> Questions</span>
            </h2>
            <p className="heading--title">
              We got answers to the questions that you might want to ask about
              <strong> getlinked Hackathon 1.0</strong>
            </p>
            <Accordion />
          </article>
        </ScrollTriggerWrapper>
        <ScrollTriggerWrapper direction="right">
          <article>
            <img
              className="faq_img"
              src={FAQImage}
              alt="The big idea illustration"
            />
          </article>
        </ScrollTriggerWrapper>
        <Star color="purple" top={10} left={10} />
        <Star color="gray" top={80} left={80} />
      </div>
    </section>
  );
}
