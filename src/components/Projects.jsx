import React from "react";
import { projects } from "../Data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="projects"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 data-aos="fade-down" data-aos-duration="1000">Projects</h2>
      <div className="cards">
        {projects.map((project, idx) => (
          <article
            className="card"
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={200 * (idx + 1)}
            data-aos-duration="1000"
          >
            <img src={project.image} alt={project.title} />
            <h3 data-aos="fade-up" data-aos-delay={200 * (idx + 1)}>
              {project.title}
            </h3>
            <p data-aos="fade-up" data-aos-delay={200 * (idx + 2)}>
              {project.description}
            </p>
            <div className="cardbtn" data-aos="fade-up" data-aos-delay={200 * (idx + 3)}>
              <div className="leftbtn">
                <a href={project.reviewLink} target="_blank" rel="noreferrer">
                  Review
                </a>
              </div>
              <div className="rightbtn">
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  View Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
