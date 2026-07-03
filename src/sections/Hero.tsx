import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowDown, Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import MagneticButton from '../components/MagneticButton';
import { downloadResume } from '../utils/downloadResume';
import Typed from 'typed.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function CustomInteractiveText() {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: [
        'Hi, I am <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary font-sans font-extrabold">Abhishek Kumar</span><br><span class="text-lg sm:text-2xl md:text-3xl font-sans font-medium text-gray-300 tracking-tight leading-relaxed inline-block mt-3">Frontend Engineer and UI Developer</span>',

        'Hi, I am <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary font-sans font-extrabold">Abhishek Kumar</span><br><span class="text-lg sm:text-2xl md:text-3xl font-sans font-medium text-gray-300 tracking-tight leading-relaxed inline-block mt-3">Building performant, fluid web experiences</span>',

        'Hi, I am <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary font-sans font-extrabold">Abhishek Kumar</span><br><span class="text-lg sm:text-2xl md:text-3xl font-sans font-medium text-gray-300 tracking-tight leading-relaxed inline-block mt-3">Turning complex concepts into clean UI designs</span>',
      ],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 2500,
      loop: true,
      showCursor: true,
      cursorChar:
        '<span class="text-primary text-xl sm:text-2xl md:text-3xl font-light inline-block align-middle animate-pulse ml-1">|</span>',
      contentType: 'html',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="space-y-6 min-h-[160px] md:min-h-[200px] flex items-center justify-center">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight leading-[1.25] text-white max-w-4xl mx-auto text-center">
        <span ref={el}></span>
      </h1>
    </div>
  );
}

export default function Hero() {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = heroContentRef.current;
    if (!content) return;

    const anim = gsap.to(content, {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: -60,
      opacity: 0,
      scale: 0.96,
      ease: 'none',
    });

    return () => {
      if (anim.scrollTrigger) {
        anim.scrollTrigger.kill();
      }
      anim.kill();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 20, stiffness: 100 },
    },
  };

  const particleVariants = {
    animate1: {
      y: [0, -30, 0],
      x: [0, 20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    animate2: {
      y: [0, 40, 0],
      x: [0, -30, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-transparent pt-20 px-6"
    >
      {/* Immersive Glowing Orbs */}
      <motion.div
        variants={particleVariants}
        animate="animate1"
        className="absolute top-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-primary/20 blur-[100px] pointer-events-none"
      />
      <motion.div
        variants={particleVariants}
        animate="animate2"
        className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-secondary/15 blur-[120px] pointer-events-none"
      />

      {/* Hero Content Container */}
      <div ref={heroContentRef} className="max-w-4xl mx-auto text-center z-10 select-none">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* Welcome Label */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>Available for Full-time Roles</span>
          </motion.div>

          {/* Animated Custom Text Motion Greet */}
          <motion.div variants={itemVariants}>
            <CustomInteractiveText />
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
          >
            <MagneticButton id="hero-projects-btn">
              <Link
                to="/projects"
                className="flex items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary/95 transition-all gap-2 group cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>

            <MagneticButton id="hero-resume-btn">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  downloadResume();
                }}
                className="flex items-center justify-center rounded-full border border-gray-800 bg-gray-900/40 px-7 py-4 text-sm font-semibold text-gray-200 hover:bg-gray-800 hover:text-white transition-all gap-2 cursor-pointer group"
              >
                <span>Download Resume</span>
                <Download className="h-4 w-4 text-muted group-hover:text-primary transition-colors group-hover:translate-y-0.5 transition-transform" />
              </button>
            </MagneticButton>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 pt-8 text-muted"
            id="hero-socials"
          >
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-900/50"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-900/50"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-900/50"
              aria-label="Email Address"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}