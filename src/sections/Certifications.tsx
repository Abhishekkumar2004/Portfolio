import { useRef } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Award, Calendar, ArrowUpRight } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolio';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Certifications() {
  const sectionRef = useScrollReveal({ y: 40, stagger: 0.15 });

  return (
    <section id="certifications" ref={sectionRef} className="relative w-full py-20 bg-transparent overflow-hidden">
      <Helmet>
        <title>Certifications | Abhishek Kumar - Professional Credentials</title>
        <meta name="description" content="Explore professional industry certifications, technical achievements, and verified expertise in frontend engineering, React, JavaScript, and modern UI architectures." />
      </Helmet>

      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-14 text-center" data-reveal>
          <span className="text-xl font-mono tracking-widest text-primary uppercase block">Accreditations</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-white">
            Industry Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="certifications-grid">
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              data-reveal
              whileHover={{
                y: -4,
                borderColor: 'rgba(56, 189, 248, 0.4)',
              }}
              className="group p-6 rounded-2xl border border-gray-900 bg-surface/30 backdrop-blur-md flex flex-col justify-between h-full hover:shadow-xl transition-all duration-300"
              id={`cert-item-${cert.id}`}
            >
              <div className="space-y-4">
                {/* Certification Icon */}
                <div className="h-10 w-10 rounded-xl bg-gray-950/60 border border-gray-800 flex items-center justify-center text-primary group-hover:bg-primary/5 transition-all duration-300">
                  <Award className="h-5 w-5" />
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <h3 className="text-base font-sans font-bold text-gray-100 group-hover:text-white transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-muted mt-4">{cert.issuer}</p>
                </div>

                {/* Instructor*/}
                <div className="space-y-1">
                  <p className="text-xs font-medium text-white">Instructor: <span className="text-blue-500">{cert.instructor}</span></p>
                </div>
              </div>

              {/* Date / Link Footer */}
              <div className="flex items-center justify-between border-t border-gray-900/60 pt-4 mt-6">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted font-mono">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{cert.date}</span>
                </span>

                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono font-bold text-secondary hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Verify</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-muted uppercase tracking-wider bg-gray-900 border border-gray-800 px-2 py-0.5 rounded-md">
                    Credential Present
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}