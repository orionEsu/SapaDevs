import "../styles/Timeline.css";
import data from "../data.json";
import ScrollTriggerWrapper from "./ScrollTriggerWrapper";
import Star from "./Star";
export default function Timeline() {
  const TimelineData = data.timeline;
  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <ScrollTriggerWrapper direction="bottom">
          <div className="Timeline__header">
            <h2 className="heading-2">Timeline</h2>
            <p className="heading--title">
              Here is the breakdown of the time we anticipate <br /> using for
              the upcoming event.
            </p>
          </div>
        </ScrollTriggerWrapper>
        <div className="Timeline__content">
          {TimelineData.map((item, index) => (
            <div className="Timeline__item" key={index}>
              <div className="Timeline__text">
                <ScrollTriggerWrapper
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <h3 className="primary__col_util">{item.header}</h3>
                  <p>{item.answer}</p>
                </ScrollTriggerWrapper>
                <span className="circle">{index + 1}</span>
              </div>

              <h3 className="Timeline__date primary__col_util">{item.date}</h3>
            </div>
          ))}
        </div>
      </div>
      <Star color="purple" top={10} left={10} />
      <Star color="white" top={40} left={90} />
      <Star color="gray" top={80} left={5} />
    </section>
  );
}
