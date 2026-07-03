import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { PERSONAL_INFO, STATS } from '../data/portfolio';
import useScrollReveal from '../hooks/useScrollReveal';
import DeveloperAvatar from '../assets/images/developer_avatar.jpg';

// Custom CountUp sub-component using React state
function StatCountUp({ value, suffix, label }: { value: number; suffix: string; label: string; key?: string }) {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1.5; // in seconds
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const stepTime = Math.abs(Math.floor(totalMiliseconds / end));
    
    // Fallback if stepTime is too small to avoid freezing
    const stepVal = Math.max(1, Math.floor(end / (totalMiliseconds / 16))); // 16ms per frame approx

    const timer = setInterval(() => {
      start += stepVal;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={containerRef} className="rounded-2xl border border-gray-800 bg-surface/40 p-6 text-center backdrop-blur-sm shadow-sm hover:border-gray-700/60 transition-colors">
      <div className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-xs sm:text-sm text-muted font-medium">{label}</div>
    </div>
  );
}

export default function About() {
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const sectionRef = useScrollReveal({ y: 40, stagger: 0.2 });

  return (
    <section id="about" ref={sectionRef} className="relative w-full py-20 sm:py-32 bg-transparent overflow-hidden">
      <Helmet>
        <title>About | {PERSONAL_INFO.name} - Frontend Developer</title>
        <meta name="description" content={`Discover the design philosophy, narrative, and career background of ${PERSONAL_INFO.name}, Frontend Developer.`} />
      </Helmet>

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo Container */}
          <div ref={imageRef} className="lg:col-span-5 flex justify-center" data-reveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={imageInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative w-full max-w-[380px] aspect-square rounded-2xl overflow-hidden border border-gray-800/80 bg-surface shadow-2xl group"
              id="about-photo-wrapper"
            >
              <img
                src={DeveloperAvatar}
                alt={PERSONAL_INFO.name}
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-[#050816]/10 to-transparent opacity-80" />
              
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 h-3 w-3 border-t-2 border-l-2 border-primary/60" />
              <div className="absolute top-4 right-4 h-3 w-3 border-t-2 border-r-2 border-primary/60" />
              <div className="absolute bottom-4 left-4 h-3 w-3 border-b-2 border-l-2 border-primary/60" />
              <div className="absolute bottom-4 right-4 h-3 w-3 border-b-2 border-r-2 border-primary/60" />
            </motion.div>
          </div>

          {/* Right Column: Narrative Block */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4" data-reveal>
              <span className="text-xl font-mono tracking-widest text-primary uppercase block">About Me</span>
              <h2 className="text-4xl sm:text-5xl lg:text-4xl font-sans font-extrabold tracking-tight text-white leading-tight">
                Crafting Interfaces That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Breathe & Engage
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans font-medium">
                {PERSONAL_INFO.aboutBrief}
              </p>
            </div>

            <div className="space-y-4 border-l-2 border-primary/40 pl-6 py-1 text-xs sm:text-sm text-muted italic leading-relaxed" data-reveal>
              <h4 className="text-xs font-mono font-bold tracking-wider text-gray-400 uppercase not-italic mb-1">
                Philosophy
              </h4>
              "{PERSONAL_INFO.philosophy}"
            </div>

            <div className="text-xs sm:text-sm text-muted leading-relaxed whitespace-pre-line font-sans font-normal" data-reveal>
              {PERSONAL_INFO.aboutStory}
            </div>
          </div>

        </div>

        {/* Dynamic Interactive Statistics Panels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-16 sm:pt-24" id="stats-counter-grid" data-reveal>
          {STATS.map((stat) => (
            <StatCountUp
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

      </div>
    </section>
  );
}