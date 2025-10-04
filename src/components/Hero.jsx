import React from "react";
import myPhoto from "../assets/images/myPhoto.png";

const Hero = () => {
  return (
    <section
      className="mainContent"
      id="home"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        className="mainLeft"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <h2 data-aos="fade-down" data-aos-duration="1000">
          Hi, I'm Abhishek Kumar — a UI/UX Designer & Developer.
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          I specialize in crafting seamless user experiences and visually
          appealing websites using HTML, CSS, JavaScript, and React.
        </p>
        <hr data-aos="fade-in" data-aos-delay="400" data-aos-duration="800" />
        <div
          className="subMain"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <a href="#projects" className="btn" data-aos="zoom-in" data-aos-delay="700">
            View Work
          </a>
          <a href="#contact" className="btn" data-aos="zoom-in" data-aos-delay="800">
            Contact Me
          </a>
        </div>
      </div>

      <div
        className="mainRight"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <img src={myPhoto} alt="Abhishek Kumar Portrait" />
      </div>
    </section>
  );
};

export default Hero;
