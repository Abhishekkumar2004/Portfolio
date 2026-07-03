import React, { useEffect, useRef, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CursorSpotlight from './components/CursorSpotlight';
import ThreeDBackground from './components/ThreeDBackground';
import Header from './components/Header';
import ReadingProgressBar from './components/ReadingProgressBar';
import InfiniteMarquee from './components/InfiniteMarquee';
import Footer from './sections/Footer';
import SkeletonLoader from './components/SkeletonLoader';

import HomeDashboard from './sections/HomeDashboard';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Cast Routes to any to allow direct key assignment in TypeScript safely
const AnimatedRoutes = Routes as any;

// Scroll to top helper when pathname changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    // Refresh ScrollTrigger values so new pages compute positions correctly
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}

// Cinematic Page Wrapper for route animations
function AnimatedPage({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Animated Content Router containing Routes
function AppRoutes() {
  const location = useLocation();

  const marqueeItems = [
    'Creative Frontend Architect',
    'Pixel-Perfect React Engineering',
    'Interactive GSAP & Motion Animations',
    'Lighthouse Optimization >95%',
    'Responsive Custom Design Systems',
    'Modern Clean TypeScript Standards',
    'Accessible User-Centric UI/UX',
  ];

  return (
    <AnimatePresence mode="wait">
      <React.Suspense fallback={<SkeletonLoader />}>
        <AnimatedRoutes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <AnimatedPage>
                <HomeDashboard />
                <InfiniteMarquee items={marqueeItems} direction="left" speed={30} />
              </AnimatedPage>
            } 
          />
          <Route 
            path="/about" 
            element={
              <AnimatedPage>
                <div className="pt-24 sm:pt-32">
                  <About />
                </div>
              </AnimatedPage>
            } 
          />
          <Route 
            path="/skills" 
            element={
              <AnimatedPage>
                <div className="pt-24 sm:pt-32">
                  <Skills />
                </div>
              </AnimatedPage>
            } 
          />
          <Route 
            path="/projects" 
            element={
              <AnimatedPage>
                <div className="pt-24 sm:pt-32">
                  <Projects />
                </div>
              </AnimatedPage>
            } 
          />
          <Route 
            path="/experience" 
            element={
              <AnimatedPage>
                <div className="pt-24 sm:pt-32 space-y-8">
                  <Experience />
                  <Certifications />
                </div>
              </AnimatedPage>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <AnimatedPage>
                <div className="pt-24 sm:pt-32">
                  <Contact />
                </div>
              </AnimatedPage>
            } 
          />
        </AnimatedRoutes>
      </React.Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  const scrollOrbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = scrollOrbRef.current;
    if (!orb) return;

    // Create custom smooth movement of the background ambient glow spotlight
    const anim = gsap.to(orb, {
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      },
      y: '75vh',
      x: '55vw',
      scale: 1.6,
      opacity: 0.15,
      backgroundColor: '#7c3aed', // Shift to majestic purple
      ease: 'none',
    });

    return () => {
      if (anim.scrollTrigger) {
        anim.scrollTrigger.kill();
      }
      anim.kill();
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="relative min-h-screen w-full bg-[#050816] font-sans antialiased text-gray-50 overflow-x-hidden selection:bg-primary/30 selection:text-white">
          {/* GSAP Scroll-Driven Background Glow Orb */}
          <div 
            ref={scrollOrbRef}
            className="fixed -top-[200px] -left-[200px] w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[140px] pointer-events-none z-[1] mix-blend-screen will-change-transform"
          />

          {/* Thin Fixed Scrolling Progress Indicator */}
          <ReadingProgressBar />

          {/* Dynamic Cursor Spotlight Overlay */}
          <CursorSpotlight />

          {/* Interactive GSAP 3D Background Overlay */}
          <ThreeDBackground />

          {/* Navigation Header */}
          <Header />

          {/* Main Routed Page Layout Flow */}
          <main id="main-content-flow" className="relative z-10 min-h-[calc(100vh-160px)]">
            <AppRoutes />
          </main>

          {/* Footer & Back to Top links */}
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}