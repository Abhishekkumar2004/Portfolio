import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface UseScrollRevealOptions {
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  stagger?: number;
  scale?: number;
  once?: boolean;
}

export default function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const elementRef = useRef<any>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const {
      start = 'top 85%',
      end = 'bottom 20%',
      delay = 0,
      duration = 0.8,
      y = 40,
      x = 0,
      stagger = 0.15,
      scale = 1,
      once = true,
    } = options;

    // Determine target elements (either children with data-reveal attributes, or the element itself)
    const targets = el.querySelectorAll('[data-reveal]');
    const animateTargets = targets.length > 0 ? Array.from(targets) : [el];

    // Set initial state
    gsap.set(animateTargets, {
      opacity: 0,
      y: y,
      x: x,
      scale: scale,
    });

    // Create ScrollTrigger Animation
    const anim = gsap.to(animateTargets, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration: duration,
      delay: delay,
      stagger: stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: start,
        end: end,
        toggleActions: once ? 'play none none none' : 'play reverse play reverse',
        once: once,
      },
    });

    return () => {
      if (anim.scrollTrigger) {
        anim.scrollTrigger.kill();
      }
      anim.kill();
    };
  }, [options.start, options.end, options.delay, options.duration, options.y, options.x, options.stagger, options.scale, options.once]);

  return elementRef;
}
