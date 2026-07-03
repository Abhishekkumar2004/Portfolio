import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE, PERSONAL_INFO } from '../data/portfolio';
import useScrollReveal from '../hooks/useScrollReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useScrollReveal({ y: 40, stagger: 0.15 });
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const progressPointRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const progressLine = progressLineRef.current;
    const progressPoint = progressPointRef.current;

    if (!timeline || !progressLine || !progressPoint) return;

    // Create ScrollTrigger animation to sync timeline height and point position to scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timeline,
        start: 'top 50%',
        end: 'bottom 70%',
        scrub: 0.5,
      },
    });

    tl.fromTo(
      progressLine,
      { scaleY: 0 },
      { scaleY: 1, ease: 'none' },
      0
    );

    tl.fromTo(
      progressPoint,
      { top: '0%' },
      { top: '100%', ease: 'none' },
      0
    );

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative w-full py-20 sm:py-32 bg-transparent overflow-hidden">
      <Helmet>
        <title>Experience | {PERSONAL_INFO.name} - Journey Timeline</title>
        <meta name="description" content={`Read through the professional career history and engineering milestones of ${PERSONAL_INFO.name}, Frontend Developer.`} />
      </Helmet>

      {/* Dynamic Background Grid Pattern Accent */}
      <div className="absolute top-1/4 right-[10%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="space-y-4 mb-16 sm:mb-24 text-center max-w-xl mx-auto" data-reveal>
          <span className="text-xl font-mono tracking-widest text-primary uppercase block">Career</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-white">
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Journey Timeline
            </span>
          </h2>
          <p className="text-sm text-muted">
            My experience building real-world software, collaborating in multi-disciplinary groups, and driving performance optimizations.
          </p>
        </div>

        {/* Timeline Vector Structure */}
        <div ref={timelineRef} className="relative ml-4 sm:ml-6 space-y-12" id="experience-timeline">
          {/* Static Background Track */}
          <div className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-gray-900 pointer-events-none" />
          
          {/* Animated Active Progress Track */}
          <div ref={progressLineRef} className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-gradient-to-b from-primary via-secondary to-primary origin-top scale-y-0 pointer-events-none" />
          
          {/* Animated Scrolling Point Indicator */}
          <div ref={progressPointRef} className="absolute left-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_12px_rgba(124,58,237,0.85)] border-2 border-[#050816] pointer-events-none z-20" style={{ top: '0%' }} />

          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              data-reveal
              className="relative pl-8 sm:pl-12 group"
              id={`timeline-item-${exp.id}`}
            >
              {/* Timeline Bullet Connector */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border border-gray-900 bg-gray-950 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10 z-10">
                <div className="h-1.5 w-1.5 rounded-full bg-gray-600 transition-all duration-300 group-hover:bg-primary group-hover:scale-125" />
              </div>

              {/* Glowing Pulse Element */}
              {index === 0 && (
                <div className="absolute -left-[17px] top-[1px] h-8 w-8 rounded-full bg-primary/10 animate-ping pointer-events-none" />
              )}

              {/* Timeline Card Content */}
              <div className="rounded-2xl border border-gray-900 bg-surface/20 p-6 sm:p-8 backdrop-blur-md hover:border-gray-800/80 hover:bg-surface/30 transition-all duration-300">
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider block mb-1">
                      {exp.company}
                    </span>
                    <h3 className="text-lg sm:text-xl font-sans font-bold text-gray-100 group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                  </div>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-gray-900 border border-gray-800 px-3.5 py-1 text-xs text-muted font-medium self-start sm:self-center shrink-0">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Narrative brief */}
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="border-t border-gray-900/60 pt-5">
                  <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Briefcase className="h-3.5 w-3.5 text-primary/70" />
                    Key Accomplishments
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm text-muted">
                        <span className="mr-3 text-primary font-bold">•</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}