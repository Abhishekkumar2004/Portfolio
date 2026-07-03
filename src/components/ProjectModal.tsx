import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Award, ArrowRight, ArrowLeft } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState(0);

  // Stop body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  // Reset active image index when project changes
  useEffect(() => {
    setActiveImage(0);
  }, [project]);

  if (!project) return null;

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-4 py-6 sm:px-6 md:py-12 bg-black/80 backdrop-blur-xl">
        {/* Backdrop Trigger Close */}
        <div className="fixed inset-0 cursor-pointer" onClick={onClose} />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 180 }}
          className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-800 bg-surface shadow-2xl z-10 max-h-[90vh] flex flex-col"
          id="project-case-study"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-gray-800 bg-surface px-6 py-4 sticky top-0 z-20">
            <div>
              <p className="text-xs font-mono tracking-wider text-primary uppercase">{project.subtitle}</p>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-gray-50">{project.title}</h3>
            </div>
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="rounded-full border border-gray-800 bg-gray-900/50 p-2 text-muted hover:bg-gray-800 hover:text-gray-100 transition-colors cursor-pointer"
              aria-label="Close case study"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body Content (Scrollable) */}
          <div className="overflow-y-auto flex-1 p-6 md:p-8 space-y-8 scrollbar-thin scrollbar-thumb-gray-800">
            {/* Gallery / Mockups */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-gray-800 bg-black/40">
              <img
                src={project.gallery[activeImage]}
                alt={`${project.title} screenshot ${activeImage + 1}`}
                className="h-full w-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              {/* Slider Navigation */}
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white border border-gray-800 hover:bg-black/90 transition-all cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white border border-gray-800 hover:bg-black/90 transition-all cursor-pointer"
                    aria-label="Next image"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {project.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`h-2 w-2 rounded-full transition-all ${
                          activeImage === index ? 'bg-primary w-4' : 'bg-gray-500/60 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Grid Information */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left/Main Column: Story & Case Study */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="text-sm font-mono text-muted uppercase tracking-wider mb-2">Overview</h4>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {project.longDescription}
                  </p>
                </div>

                <div className="border-t border-gray-800/60 pt-6">
                  <h4 className="text-sm font-mono text-muted uppercase tracking-wider mb-3">Key Features</h4>
                  <ul className="space-y-2.5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-300">
                        <CheckCircle2 className="h-4.5 w-4.5 text-accent mr-3 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges & Solutions */}
                <div className="border-t border-gray-800/60 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl border border-red-950/20 bg-red-950/5 p-4">
                    <h5 className="text-xs font-mono text-red-400 uppercase tracking-widest mb-2 flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400 mr-2" />
                      The Challenge
                    </h5>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-950/20 bg-emerald-950/5 p-4">
                    <h5 className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mr-2" />
                      The Solution
                    </h5>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {project.solutions}
                    </p>
                  </div>
                </div>

                {/* Key Takeaways */}
                <div className="border-t border-gray-800/60 pt-6">
                  <h4 className="text-sm font-mono text-muted uppercase tracking-wider mb-2 flex items-center">
                    <Award className="h-4 w-4 text-primary mr-2" />
                    Lessons Learned
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic">
                    "{project.lessonsLearned}"
                  </p>
                </div>
              </div>

              {/* Right Column: Meta & Links */}
              <div className="space-y-6 lg:border-l lg:border-gray-800 lg:pl-8">
                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-mono text-muted uppercase tracking-widest mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-gray-900 border border-gray-800 px-3 py-1 text-xs font-medium text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Actions */}
                <div className="pt-6 border-t border-gray-800/60 space-y-3">
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
                    className="flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary-hover hover:shadow-primary/40 transition-all gap-2"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center rounded-xl border border-gray-800 bg-gray-900/40 px-4 py-3 text-sm font-semibold text-gray-300 hover:bg-gray-900 hover:text-white transition-all gap-2"
                  >
                    <span>Inspect Codebase</span>
                    <Github className="h-4 w-4" />
                  </a>
                </div>

                {/* Additional Metadata */}
                <div className="pt-6 border-t border-gray-800/60 rounded-xl bg-gray-950/20 p-4 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted font-mono">Role:</span>
                    <span className="text-gray-300 font-medium">Lead Developer</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted font-mono">Platform:</span>
                    <span className="text-gray-300 font-medium">Responsive Web</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted font-mono">Status:</span>
                    <span className="text-accent font-medium">Production Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
