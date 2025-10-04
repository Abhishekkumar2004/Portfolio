import React from "react";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="skillSection"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 data-aos="fade-down" data-aos-duration="1000">My Skills</h2>
      <div className="skillcontent">
        {skills.map((skill, idx) => (
          <div
            className="skillItem"
            key={skill.id}
            data-aos="fade-up"
            data-aos-delay={200 * (idx + 1)}
            data-aos-duration="1000"
          >
            <div
              className="skillLeft"
              data-aos="fade-right"
              data-aos-delay={200 * (idx + 1)}
              data-aos-duration="1000"
            >
              <img src={skill.logo} alt={`${skill.name} Logo`} />
            </div>
            <div
              className="skillRight"
              data-aos="fade-left"
              data-aos-delay={200 * (idx + 1)}
              data-aos-duration="1000"
            >
              <h2>{skill.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
