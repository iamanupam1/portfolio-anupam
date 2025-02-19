import Experience from "./landing/Experience";
import Expertise from "./landing/Expertise";
import Hero from "./landing/Hero";
import Work from "./landing/Work";

const LandingComponent = () => {
  return (
    <div id="landing-root">
      <Hero />
      <Expertise />
      <Work />
      <Experience />
    </div>
  );
};

export default LandingComponent;
