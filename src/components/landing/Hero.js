"use client";

import NavbarComponent from "../common/Navbar";

const Hero = () => {
  return (
    <div id="hero">
      <NavbarComponent />
      <div className="text-white h-hero-screen flex items-center justify-center">
        <div className="hero-description px-2 sm:px-5 text-center uppercase">
          <h1 className="md:text-7xl text-4xl">
            Anupam Dhakal<span className="text-cyan-400 ml-1">.</span>
          </h1>
          <h3 className="md:text-4xl text-xl">Software Engineer</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
