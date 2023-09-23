import Nav from "../components/Nav";
import BigIdea from "../components/BigIdea";
import Rules from "../components/Rules";
import Judging from "../components/Judging";
import FAQ from "../components/FAQ";
import Timeline from "../components/Timeline";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Partners from "../components/Partners";
import Prizes from "../components/Prizes";
import BackToTopButton from "../components/BackToTopButton";

const Homepage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <BigIdea />
      <Rules />
      <Judging />
      <FAQ />
      <Timeline />
      <Prizes />
      <Partners />
      <PrivacyPolicy />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default Homepage;
