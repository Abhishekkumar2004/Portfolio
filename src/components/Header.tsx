import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import { downloadResume } from '../utils/downloadResume';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050816]/80 backdrop-blur-md border-b border-gray-900 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 group cursor-pointer"
            id="header-logo"
          >
            <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-sm shadow-md group-hover:scale-105 transition-transform">
              AK
            </span>
            <span className="font-sans font-bold tracking-tight text-white group-hover:text-primary transition-colors text-sm sm:text-base">
              {PERSONAL_INFO.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-xs sm:text-sm font-medium tracking-wide transition-colors ${
                  isActive(link.href)
                    ? 'text-primary font-semibold '
                    : 'text-muted hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <button
              onClick={downloadResume}
              className="rounded-full bg-primary/10 border border-primary/30 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center gap-1.5 cursor-pointer"
              id="header-resume-btn"
            >
              <span>Resume</span>
              <Download className="h-3.5 w-3.5" />
            </button>

            <Link
              to="/contact"
              className="rounded-full bg-gray-900 border border-gray-800 px-4 py-2 text-xs font-semibold text-gray-200 hover:bg-gray-800 hover:text-white transition-all flex items-center gap-1 cursor-pointer"
              id="header-cta-btn"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </nav>

          {/* Mobile Hamburguer Menu Trigger */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-full border border-gray-800 bg-gray-900/40 p-2 text-muted hover:bg-gray-800 hover:text-white transition-all cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 md:hidden bg-[#050816]/95 backdrop-blur-lg border-b border-gray-900 px-6 py-8 flex flex-col gap-6 shadow-2xl"
            id="mobile-nav-drawer"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-semibold tracking-wide ${
                    isActive(link.href) ? 'text-primary' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  downloadResume();
                }}
                className="w-full text-center rounded-xl bg-gray-900 border border-gray-800 py-3 text-sm font-semibold text-gray-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4 text-primary" />
                <span>Download Resume</span>
              </button>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-xl bg-primary py-3 text-sm font-semibold text-white cursor-pointer"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
