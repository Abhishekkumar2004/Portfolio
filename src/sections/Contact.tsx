import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, CheckCircle2, User, FileText, AlertCircle, Github, Linkedin, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import useScrollReveal from '../hooks/useScrollReveal';

interface FormFields {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// Stagger child animation configuration
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

export default function Contact() {
  const sectionRef = useScrollReveal({ y: 40, stagger: 0.15 });
  const [form, setForm] = useState<FormFields>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormFields | null>(null);
  const [submitError, setSubmitError] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!form.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://formspree.io/f/mpwjnarn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmittedData({ ...form });
        setIsSuccess(true);
        setShowToast(true);
        setForm({ name: '', email: '', message: '' });
        
        // Auto-dismiss toast after 4 seconds
        setTimeout(() => setShowToast(false), 4000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send message via Formspree.');
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setSubmitError(err.message || 'An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative w-full py-20 sm:py-32 bg-transparent overflow-hidden">
      {/* Dynamic Toast Notification Panel */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="fixed top-15 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-gray-950/90 px-5 py-4 text-sm text-gray-200 backdrop-blur-xl shadow-2xl shadow-emerald-950/20 max-w-md w-[calc(100%-2rem)]"
          >
            <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="font-sans font-bold text-white leading-tight">Message Dispatched</h5>
              <p className="text-xs text-muted mt-0.5 truncate">Coordinates synchronized successfully!</p>
            </div>
            <button 
              onClick={() => setShowToast(false)}
              className="text-muted hover:text-white transition-colors p-1 rounded-lg hover:bg-gray-900"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Action Hooks */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="lg:col-span-5 space-y-8" 
            data-reveal
          >
            <div className="space-y-4">
              <span className="text-xl font-mono tracking-widest text-primary uppercase block">Collaboration</span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white leading-tight">
                Let's Craft Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Extraordinary
                </span>
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Whether you have an upcoming project, a vacancy on your frontend engineering team, or just want to chat about creative UI performance, my inbox is always open.
              </p>
            </div>

            {/* Direct Connect Elements */}
            <div className="space-y-4" id="contact-info-block">
              <motion.div 
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-4 rounded-xl border border-gray-900 bg-surface/30 p-4 hover:border-gray-800 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-muted">Direct Email</h4>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold text-gray-200 hover:text-white transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-4 rounded-xl border border-gray-900 bg-surface/30 p-4 hover:border-gray-800 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-muted">Availability</h4>
                  <p className="text-sm font-semibold text-gray-200">
                    Open to Frontend & Software Engineer roles
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: 'spring', delay: 0.1 }}
            className="lg:col-span-7 bg-surface/20 rounded-2xl border border-gray-900 p-6 sm:p-10 backdrop-blur-md" 
            id="contact-form-card" 
            data-reveal
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -15 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {submitError && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-xs font-mono text-red-400">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="name-input" className="text-xs font-mono tracking-wider text-gray-400 uppercase flex items-center gap-2">
                        <User className="h-3.5 w-3.5 text-primary/70" />
                        <span>Full Name</span>
                      </label>
                      <input
                        type="text"
                        id="name-input"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full rounded-xl border bg-gray-950/40 px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-all ${
                          errors.name ? 'border-red-500/50 focus:border-red-500/80' : 'border-gray-800 focus:border-primary/80 focus:ring-1 focus:ring-primary/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 font-mono flex items-center gap-1">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </motion.div>

                    {/* Email Field */}
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="email-input" className="text-xs font-mono tracking-wider text-gray-400 uppercase flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 text-secondary/70" />
                        <span>Email Address</span>
                      </label>
                      <input
                        type="email"
                        id="email-input"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@example.com"
                        className={`w-full rounded-xl border bg-gray-950/40 px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-all ${
                          errors.email ? 'border-red-500/50 focus:border-red-500/80' : 'border-gray-800 focus:border-secondary/80 focus:ring-1 focus:ring-secondary/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 font-mono flex items-center gap-1">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </motion.div>
                  </div>

                  {/* Message Field */}
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="message-input" className="text-xs font-mono tracking-wider text-gray-400 uppercase flex items-center gap-2">
                      <FileText className="h-3.5 w-3.5 text-purple-400" />
                      <span>Your Message</span>
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      value={form.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Discuss an opportunity, request a custom project, or simply send a friendly welcome..."
                      className={`w-full rounded-xl border bg-gray-950/40 px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-all resize-none ${
                        errors.message ? 'border-red-500/50 focus:border-red-500/80' : 'border-gray-800 focus:border-primary/80 focus:ring-1 focus:ring-primary/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div variants={itemVariants}>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full flex items-center justify-center rounded-xl bg-primary px-6 py-4.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-hover hover:shadow-primary/45 focus:outline-none disabled:opacity-75 transition-all gap-2 cursor-pointer"
                    >
                      <span>{isSubmitting ? 'Verifying Coordinates...' : 'Transmit Message'}</span>
                      <Send className={`h-4 w-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    </motion.button>
                  </motion.div>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: 'spring', damping: 20 }}
                  className="text-center py-10 space-y-6 flex flex-col items-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="h-16 w-16 rounded-full bg-accent/15 border border-accent/20 flex items-center justify-center text-accent animate-bounce"
                  >
                    <CheckCircle2 className="h-8 w-8" />
                  </motion.div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-sans font-bold text-gray-100">Transmission Complete!</h3>
                    <p className="text-sm text-muted max-w-sm mx-auto">
                      Thank you! Your message was received successfully. I will review and reply within 24 business hours.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 items-center">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Portfolio Inquiry from ${encodeURIComponent(submittedData?.name || '')}&body=${encodeURIComponent(submittedData?.message || '')}%0D%0A%0D%0ASender Email: ${encodeURIComponent(submittedData?.email || '')}`}
                      className="rounded-full bg-primary px-5 py-2.5 text-xs font-mono font-bold text-white hover:bg-primary-hover shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all cursor-pointer flex items-center gap-2"
                    >
                      <span>Send Direct Email</span>
                      <Send className="h-3 w-3" />
                    </a>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="rounded-full border border-gray-800 bg-gray-950 px-5 py-2.5 text-xs font-mono text-muted hover:text-white hover:bg-gray-900 transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Custom Interactive Social Connect Icons */}
            <div className="pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-muted uppercase tracking-wider">
                Or connect instantly via
              </span>
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/icon flex items-center justify-center h-10 w-10 rounded-xl border border-gray-800 bg-gray-950/60 text-muted hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  aria-label="GitHub Connect"
                >
                  <Github className="h-4.5 w-4.5 group-hover/icon:scale-110 transition-transform" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/icon flex items-center justify-center h-10 w-10 rounded-xl border border-gray-800 bg-gray-950/60 text-muted hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  aria-label="LinkedIn Connect"
                >
                  <Linkedin className="h-4.5 w-4.5 group-hover/icon:scale-110 transition-transform" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group/icon flex items-center justify-center h-10 w-10 rounded-xl border border-gray-800 bg-gray-950/60 text-muted hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  aria-label="Email Connect"
                >
                  <Mail className="h-4.5 w-4.5 group-hover/icon:scale-110 transition-transform" />
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}