import React from "react";
import { experiences } from "../Data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="experienceSection"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 data-aos="fade-down" data-aos-duration="1000">
        Experience
      </h2>

      {experiences.map((exp, idx) => (
        <div
          className="expItems"
          key={exp.id}
          data-aos="fade-up"
          data-aos-delay={200 * (idx + 1)}
          data-aos-duration="1000"
        >
          <div
            className="leftItem"
            data-aos="fade-right"
            data-aos-delay={200 * (idx + 1)}
            data-aos-duration="1000"
          >
            <img src={exp.logo} alt={`${exp.company} logo`} />
          </div>

          <div
            className="rightItem"
            data-aos="fade-left"
            data-aos-delay={200 * (idx + 1)}
            data-aos-duration="1000"
          >
            <h3>{exp.company}</h3>
            <h4>{exp.location}</h4>
            <p>{exp.role}</p>
            <h4>{exp.duration}</h4>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
