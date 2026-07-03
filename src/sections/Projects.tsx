import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github, ArrowRight, Eye } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolio';
import { Project } from '../types';
import ProjectModal from '../components/ProjectModal';
import MagneticButton from '../components/MagneticButton';
import useScrollReveal from '../hooks/useScrollReveal';
import TiltCard from '../components/TiltCard';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useScrollReveal({ y: 40, stagger: 0.15 });

  return (
    <section id="projects" ref={sectionRef} className="relative w-full py-20 sm:py-32 bg-transparent overflow-hidden">
      <Helmet>
        <title>Projects | {PERSONAL_INFO.name} - Case Studies</title>
        <meta name="description" content={`View the software engineering project portfolio and case studies built by ${PERSONAL_INFO.name}. Responsive applications, immersive layouts, and robust architectures.`} />
      </Helmet>

      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-[20%] right-0 h-[300px] w-[300px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 h-[350px] w-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24" data-reveal>
          <div className="space-y-4 max-w-xl">
            <span className="text-xl font-mono tracking-widest text-primary uppercase block">Portfolio</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-white">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Case Studies
              </span>
            </h2>
            <p className="text-sm text-muted">
              A select representation of real-world software engineering solutions, showcasing detailed performance focus, layout architecture, and creative visual standards.
            </p>
          </div>
          <div className="hidden md:block font-mono text-xs text-muted">
            [ CLK ON CARDS FOR SYSTEM TELEMETRY & CASE STUDIES ]
          </div>
        </div>

        {/* Staggered Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
          {PROJECTS.map((project) => (
            <div key={project.id} data-reveal className="h-full">
              <TiltCard
                className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-900 bg-surface/30 backdrop-blur-md shadow-lg hover:border-gray-800/80 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
                id={`project-card-${project.id}`}
              >
                {/* Card Image Area */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Dark Overlay on Hover with Eye Icon */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <div className="rounded-full bg-primary p-3 text-white shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono tracking-widest text-white uppercase font-bold">Read Case Study</span>
                  </div>

                  {/* Subtitle Badge */}
                  <div className="absolute bottom-4 left-4 rounded-full bg-black/70 border border-gray-800/60 px-3 py-1 text-[10px] font-mono tracking-wider text-gray-300">
                    {project.subtitle}
                  </div>
                </div>

                {/* Card Text Area */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between" style={{ transform: 'translateZ(30px)' }}>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-sans font-bold text-gray-100 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Badges & CTA */}
                  <div className="space-y-4 pt-2">
                    {/* Tech stack top items */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-md bg-gray-900/60 border border-gray-800 px-2 py-0.5 text-[10px] font-medium text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="text-[10px] font-mono text-muted py-0.5">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Actions Row */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-900/60 text-xs" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-primary hover:text-white font-mono font-semibold tracking-wider flex items-center gap-1.5 transition-colors group/btn cursor-pointer"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <div className="flex items-center gap-4 text-muted">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-white transition-colors p-1"
                          aria-label={`View ${project.title} source code on GitHub`}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                        <a
                          href={project.liveUrl}
                          onClick={(e) => {
                            if (project.liveUrl === '#') {
                              e.preventDefault();
                              alert('Demo mode activated: Real live connection mocked successfully!');
                            }
                          }}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-white transition-colors p-1"
                          aria-label={`Launch ${project.title} live preview`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Fullscreen Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}