import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  User, 
  Cpu, 
  FolderGit2, 
  Briefcase, 
  Mail, 
  Sparkles, 
  Shield, 
  Code2, 
  ArrowUpRight 
} from 'lucide-react';
import Hero from './Hero';
import { PERSONAL_INFO, STATS } from '../data/portfolio';
import useScrollReveal from '../hooks/useScrollReveal';

export default function HomeDashboard() {
  const bentoRef = useScrollReveal({ y: 50, stagger: 0.1 });

  return (
    <div className="w-full">
      <Helmet>
        <title>{PERSONAL_INFO.name} | Creative Frontend Architect Portfolio</title>
        <meta name="description" content={`Explore the interactive developer dashboard of ${PERSONAL_INFO.name}. High-performance React, custom UI/UX engineering, and dynamic layouts.`} />
      </Helmet>

      {/* 1. Hero Cover Section */}
      <Hero />

      {/* 2. Interactive Bento Navigation & Overview Section */}
      <section ref={bentoRef} className="relative w-full py-16 sm:py-24 bg-transparent overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[30%] left-[10%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[25%] right-[10%] h-[350px] w-[350px] rounded-full bg-secondary/5 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Subtitle & Header */}
          <div className="space-y-4 mb-16 text-center sm:text-left" data-reveal>
            <span className="text-xl font-mono tracking-widest text-primary uppercase block">Navigation Hub</span>
            <h2 className="text-lg sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-white leading-tight">
              Interactive{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Portfolio Dashboard
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
              Explore my background, expertise, projects, and career timeline through the bento cards below. Click any card to enter the full-screen view.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6" id="bento-navigation-hub">
            
            {/* Card 1: About Me Snapshot (6 cols) */}
            <motion.div 
              data-reveal
              whileHover={{ y: -6, borderColor: 'rgba(124, 58, 237, 0.4)' }}
              className="md:col-span-7 rounded-2xl border border-gray-900 bg-surface/30 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <User className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-muted uppercase">01 / Profile</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-gray-100 group-hover:text-primary transition-colors">About Me</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {PERSONAL_INFO.aboutBrief}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-900/60 flex items-center justify-between">
                <span className="text-xs font-mono text-muted">Architectural Honesty & Performance</span>
                <Link to="/about" className="text-xs font-mono text-primary group-hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Enter Profile</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Stats Grid Snapshot (5 cols) */}
            <motion.div 
              data-reveal
              whileHover={{ y: -6, borderColor: 'rgba(56, 189, 248, 0.4)' }}
              className="md:col-span-5 rounded-2xl border border-gray-900 bg-surface/30 p-6 backdrop-blur-md flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-muted uppercase">02 / Telemetry</span>
                </div>
                
                {/* Visual Stats Row */}
                <div className="grid grid-cols-2 gap-4 py-2">
                  {STATS.slice(0, 4).map((stat) => (
                    <div key={stat.id} className="p-3 bg-gray-950/40 rounded-xl border border-gray-950">
                      <div className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-[10px] text-muted font-mono tracking-wide mt-1 leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-900/60 flex items-center justify-between">
                <span className="text-xs font-mono text-muted">Audited Web Analytics</span>
                <Link to="/about" className="text-xs font-mono text-secondary group-hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Card 3: Skills Snippet (4 cols) */}
            <motion.div 
              data-reveal
              whileHover={{ y: -6, borderColor: 'rgba(56, 189, 248, 0.4)' }}
              className="md:col-span-4 rounded-2xl border border-gray-900 bg-surface/30 p-6 backdrop-blur-md flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-muted uppercase">03 / Stack</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-sans font-bold text-gray-100 group-hover:text-secondary transition-colors">Core Skillset</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    React 19, JavaScript, TypeScript, Tailwind CSS, Framer Motion, and GSAP scrolling.
                  </p>
                </div>
                {/* Miniature tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="text-[9px] font-mono bg-gray-900 px-2 py-0.5 rounded-md text-gray-400">React 19</span>
                  <span className="text-[9px] font-mono bg-gray-900 px-2 py-0.5 rounded-md text-gray-400">TypeScript</span>
                  <span className="text-[9px] font-mono bg-gray-900 px-2 py-0.5 rounded-md text-gray-400">Tailwind</span>
                  <span className="text-[9px] font-mono bg-gray-900 px-2 py-0.5 rounded-md text-gray-400">JavaScript</span>
                  <span className="text-[9px] font-mono bg-gray-900 px-2 py-0.5 rounded-md text-gray-400">Redux Toolkit</span>
                  <span className="text-[9px] font-mono bg-gray-900 px-2 py-0.5 rounded-md text-cyan-400"><a href="#skills">More</a></span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-900/60 flex items-center justify-between">
                <span className="text-[10px] font-mono text-muted">[ 16+ SYSTEMS ]</span>
                <Link to="/skills" className="text-xs font-mono text-secondary group-hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Enter Stack</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Card 4: Projects Snapshot (8 cols) */}
            <motion.div 
              data-reveal
              whileHover={{ y: -6, borderColor: 'rgba(124, 58, 237, 0.4)' }}
              className="md:col-span-8 rounded-2xl border border-gray-900 bg-surface/30 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <FolderGit2 className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-muted uppercase">04 / Projects</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-gray-100 group-hover:text-primary transition-colors">Case Studies & Code</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    Explore real-world software engineering solutions with interactive D3 data dashboards, performance optimizations, and pixel-perfect design files brought to life.
                  </p>
                </div>
                {/* Visual Accent Box */}
                <div className="p-4 bg-gray-950/40 rounded-xl border border-gray-900/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono text-gray-300">Latest Build: E-commerce Web Application</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 rounded">99 Lighthouse</span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-900/60 flex items-center justify-between">
                <span className="text-xs font-mono text-muted">Fluid WebGL & Canvas systems</span>
                <Link to="/projects" className="text-xs font-mono text-primary group-hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Enter Portfolio</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Card 5: Professional Timeline Brief (6 cols) */}
            <motion.div 
              data-reveal
              whileHover={{ y: -6, borderColor: 'rgba(124, 58, 237, 0.4)' }}
              className="md:col-span-6 rounded-2xl border border-gray-900 bg-surface/30 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-muted uppercase">05 / Career</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-sans font-bold text-gray-100 group-hover:text-primary transition-colors">Professional Journey</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    Frontend Engineer, Software Developer, and Visual Designer across agencies and product-first organizations.
                  </p>
                </div>
                {/* Snapshot row */}
                <div className="text-xs font-mono text-gray-400 border-l border-primary/40 pl-3 py-1 space-y-1">
                  <div>• Jr. Frontend Engineer </div>
                  <div className="text-[10px] text-muted">NA</div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-900/60 flex items-center justify-between">
                <span className="text-xs font-mono text-muted">Interactive Scrolling Timeline</span>
                <Link to="/experience" className="text-xs font-mono text-primary group-hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>View Timeline</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Card 6: Hire / Contact Card (6 cols) */}
            <motion.div 
              data-reveal
              whileHover={{ y: -6, borderColor: 'rgba(56, 189, 248, 0.4)' }}
              className="md:col-span-6 rounded-2xl border border-gray-900 bg-surface/30 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-muted uppercase">06 / Connect</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-sans font-bold text-gray-100 group-hover:text-secondary transition-colors">Get in Touch</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    Whether you have an interesting job opportunity, want to discuss a custom design project, or simply want to say hello.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                  <span>abhishekkumar1221a@gmail.com</span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-900/60 flex items-center justify-between">
                <span className="text-xs font-mono text-muted">Formspree API Activated</span>
                <Link to="/contact" className="text-xs font-mono text-secondary group-hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Contact Form</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
}