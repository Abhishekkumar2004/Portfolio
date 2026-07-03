import { useRef } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import * as LucideIcons from 'lucide-react';
import { SKILLS, PERSONAL_INFO } from '../data/portfolio';
import useScrollReveal from '../hooks/useScrollReveal';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Dynamic Icon Lookup helper
function DynamicIcon({ name, className = 'h-5 w-5' }: { name: string; className?: string }) {
  // Fallback to standard Code icon if not found
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.Code2;
  return <IconComponent className={className} />;
}

export default function Skills() {
  const sectionRef = useScrollReveal({ y: 45, stagger: 0.2 });
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'frontend', label: 'Frontend Architecture' },
    { id: 'backend', label: 'Backend Basics & APIs' },
    { id: 'tools', label: 'Development & Design Tools' },
  ];

  useGSAP(() => {
    const icons = gsap.utils.toArray<HTMLElement>('.skills-icon-3d');
    const tweensMap = new Map<HTMLElement, gsap.core.Tween[]>();

    icons.forEach((icon) => {
      const durationY = 2.5 + Math.random() * 1.5;
      const durationRot = 3.5 + Math.random() * 2;
      const floatAmount = 5 + Math.random() * 4;

      // Set initial 3D perspective to make the rotation depth clear
      gsap.set(icon, { transformPerspective: 800 });

      // Vertical hovering oscillation
      const floatTween = gsap.fromTo(icon, 
        { y: -floatAmount / 2 },
        {
          y: floatAmount / 2,
          duration: durationY,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          paused: true
        }
      );

      // Gentle 3D tilt oscillation
      const rotTween = gsap.fromTo(icon,
        { rotateX: -12, rotateY: -15, rotateZ: -4 },
        {
          rotateX: 12,
          rotateY: 15,
          rotateZ: 4,
          duration: durationRot,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          paused: true
        }
      );

      tweensMap.set(icon, [floatTween, rotTween]);
    });

    // Set up the Intersection Observer to only run animations when icons are in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const tweens = tweensMap.get(target);
          if (!tweens) return;

          if (entry.isIntersecting) {
            const delayAttr = target.getAttribute('data-index');
            const delay = delayAttr ? parseInt(delayAttr, 10) * 0.08 : 0;
            // Play animations with stagger delay
            gsap.delayedCall(delay, () => {
              tweens.forEach((tween) => {
                if (tween && !tween.isActive()) {
                  tween.play();
                }
              });
            });
          } else {
            // Pause immediately when out of view
            tweens.forEach((tween) => {
              if (tween) {
                tween.pause();
              }
            });
          }
        });
      },
      {
        root: null, // use browser viewport
        rootMargin: '100px', // trigger 100px before coming into view
        threshold: 0.01 // trigger as soon as 1% is visible
      }
    );

    icons.forEach((icon) => {
      observer.observe(icon);
    });

    return () => {
      observer.disconnect();
      tweensMap.forEach((tweens) => {
        tweens.forEach((tween) => tween.kill());
      });
    };
  }, { scope: containerRef });

  return (
    <section id="skills" ref={sectionRef} className="relative w-full py-20 sm:py-32 bg-transparent overflow-hidden">
      <Helmet>
        <title>Skills | {PERSONAL_INFO.name} - Technical Stack</title>
        <meta name="description" content={`Explore ${PERSONAL_INFO.name}'s professional software development stack, including React, TypeScript, Node.js, Next.js, CSS architecture, and GSAP.`} />
      </Helmet>

      {/* Visual Accent Light Rays */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-xl mx-auto mb-16 sm:mb-24" data-reveal>
          <span className="text-xl font-mono tracking-widest text-primary uppercase block">Expertise</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-white">
            My Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Skill Stack
            </span>
          </h2>
          <p className="text-sm text-muted">
            An overview of the languages, frameworks, systems, and specialized platforms I leverage to ship production-ready web products.
          </p>
        </div>

        {/* Skill Groups Container */}
        <div className="space-y-16" id="skills-category-group">
          {categories.map((category) => {
            const filteredSkills = SKILLS.filter((s) => s.category === category.id);

            return (
              <div key={category.id} className="space-y-6" data-reveal>
                {/* Category Subtitle */}
                <div className="flex items-center gap-4">
                  <h3 className="text-sm font-mono tracking-widest text-gray-400 uppercase">
                    {category.label}
                  </h3>
                  <div className="flex-1 h-[1px] bg-gray-800/60" />
                </div>

                {/* Grid of Skill Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        y: -5,
                        borderColor: 'rgba(124, 58, 237, 0.4)',
                        boxShadow: '0 10px 30px -10px rgba(124, 58, 237, 0.15)',
                      }}
                      className="group flex flex-col justify-between p-5 rounded-2xl border border-gray-900 bg-surface/30 backdrop-blur-md select-none transition-all duration-300"
                    >
                      {/* Skill Icon & Percentage Row */}
                      <div className="flex items-center justify-between mb-4">
                        <div 
                          className="skills-icon-3d h-10 w-10 rounded-xl bg-gray-950/60 border border-gray-800 flex items-center justify-center text-muted group-hover:text-primary group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-300"
                          style={{ transformStyle: 'preserve-3d' }}
                          data-index={index}
                        >
                          <DynamicIcon name={skill.icon} className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-primary transition-colors">
                          {skill.proficiency}%
                        </span>
                      </div>

                      {/* Skill Info */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-sans font-semibold text-gray-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </h4>
                        
                        {/* Progress Bar Track */}
                        <div className="relative w-full h-1.5 bg-gray-950 rounded-full overflow-hidden border border-gray-800/40">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#38BDF8] rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}