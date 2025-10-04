import React from "react";
import { about } from "../Data/about";

const About = () => {
  return (
    <section id="about" className="aboutSection" data-aos="fade-up">
      <h1 data-aos="fade-down" data-aos-duration="1000">
        About Me
      </h1>
      <div className="about">
        <div
          className="aboutLeft"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src={about.image} alt="Abhishek Kumar working" />
        </div>

        <div
          className="aboutRight"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <p>{about.description}</p>

          <div className="subAbR">
            {about.stats.map((stat, idx) => (
              <div
                className={`box${idx + 1}`}
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={200 * (idx + 1)}
                data-aos-duration="800"
              >
                <h2>{stat.value}</h2>
                <h3>{stat.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
