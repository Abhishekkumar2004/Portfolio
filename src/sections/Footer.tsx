import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative w-full bg-transparent py-12 px-6" id="app-footer">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand Copyright */}
        <div className="text-center sm:text-left space-y-1">
          <p className="text-sm font-semibold text-gray-200">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="text-[10px] font-mono text-muted uppercase tracking-widest">
            Crafted in premium React, Tailwind v4, & Framer Motion
          </p>
        </div>

        {/* Action Row */}
        <div className="flex items-center gap-6">
          {/* Social icons */}
          <div className="flex items-center gap-4 text-muted">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-900/50"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-900/50"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-900/50"
              aria-label="Email Address"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="w-[1px] h-4 bg-gray-800" />

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="rounded-full border border-gray-900 bg-gray-950 p-2 text-muted hover:bg-gray-900 hover:text-white transition-all cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
