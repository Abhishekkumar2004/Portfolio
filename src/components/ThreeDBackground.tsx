import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface FloatingItem {
  el: HTMLDivElement;
  x: number;
  y: number;
  z: number;
  speedX: number;
  speedY: number;
  speedRot: number;
  phaseX: number;
  phaseY: number;
  phaseRot: number;
  setX: any;
  setY: any;
  setRotate: any;
}

export default function ThreeDBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create 32 abstract particles/shapes
    const itemsCount = 32;
    const items: FloatingItem[] = [];

    // Screen dimensions reference
    let width = window.innerWidth;
    let height = window.innerHeight;

    const shapes = ['circle', 'ring', 'plus', 'square'];

    for (let i = 0; i < itemsCount; i++) {
      const el = document.createElement('div');
      
      // Assign random shape style
      const shape = shapes[i % shapes.length];
      const size = 20 + Math.random() * 45; // 20px to 65px
      const zDepth = Math.random(); // 0 to 1 (0 is far/small, 1 is close/large)
      
      el.style.position = 'absolute';
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.pointerEvents = 'none';
      el.style.willChange = 'transform';
      
      // Style design to match dark deep cosmic slate palette
      if (shape === 'circle') {
        el.style.borderRadius = '50%';
        el.style.background = `radial-gradient(circle, rgba(124, 58, 237, ${0.12 + zDepth * 0.15}) 0%, rgba(56, 189, 248, 0) 70%)`;
        el.style.filter = 'blur(2px)';
      } else if (shape === 'ring') {
        el.style.borderRadius = '50%';
        el.style.border = `1.5px solid rgba(167, 139, 250, ${0.15 + zDepth * 0.2})`;
      } else if (shape === 'plus') {
        el.style.width = 'auto';
        el.style.height = 'auto';
        el.textContent = '+';
        el.style.fontFamily = 'monospace';
        el.style.fontSize = `${18 + Math.random() * 15}px`;
        el.style.color = `rgba(56, 189, 248, ${0.25 + zDepth * 0.25})`;
        el.style.fontWeight = '300';
      } else {
        el.style.border = `1.5px solid rgba(124, 58, 237, ${0.12 + zDepth * 0.18})`;
        el.style.borderRadius = '6px';
        el.style.transform = 'rotate(45deg)';
      }

      container.appendChild(el);

      // Random starting coordinates (centered range)
      const initialX = Math.random() * width;
      const initialY = Math.random() * height;

      items.push({
        el,
        x: initialX,
        y: initialY,
        z: zDepth,
        speedX: 0.15 + Math.random() * 0.35,
        speedY: 0.15 + Math.random() * 0.35,
        speedRot: 0.05 + Math.random() * 0.15,
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
        phaseRot: Math.random() * Math.PI * 2,
        // Using direct inline assignment with translate3d and rotate for high-performance GPU-bound drawing
        setX: null,
        setY: null,
        setRotate: null,
      });
    }

    // Interactive mouse positioning and scroll tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX - width / 2) / (width / 2); // range [-1, 1]
      mouse.targetY = (e.clientY - height / 2) / (height / 2); // range [-1, 1]
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Global render ticker loop
    let time = 0;
    const tick = () => {
      time += 0.012; // slightly slower float speed for fluid aesthetic

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Smooth scroll interpolation
      scrollY += (targetScrollY - scrollY) * 0.08;

      items.forEach((item) => {
        // Floating sinusoidal coordinates
        const xOsc = Math.sin(time * item.speedX + item.phaseX) * (18 + item.z * 15);
        const yOsc = Math.cos(time * item.speedY + item.phaseY) * (18 + item.z * 15);
        const rotOsc = Math.sin(time * item.speedRot + item.phaseRot) * 360;

        // Interactive mouse parallax drift + scroll depth offset (closer elements move faster on scroll)
        const parallaxX = mouse.x * (45 * item.z + 10);
        const parallaxY = mouse.y * (45 * item.z + 10) - scrollY * (0.35 * item.z + 0.1);

        // Final positions wrap around boundary constraints cleanly
        let finalX = item.x + xOsc - parallaxX;
        let finalY = item.y + yOsc - parallaxY;

        // Screen boundary looping wrap-around
        // Using modulo or absolute boundaries with padding for seamless wrapping
        const pad = 100;
        finalX = ((finalX + pad) % (width + pad * 2) + (width + pad * 2)) % (width + pad * 2) - pad;
        finalY = ((finalY + pad) % (height + pad * 2) + (height + pad * 2)) % (height + pad * 2) - pad;

        // Unified 3D GPU-bound rendering
        item.el.style.transform = `translate3d(${finalX}px, ${finalY}px, 0px) rotate(${rotOsc}deg)`;
      });
    };

    gsap.ticker.add(tick);

    // Visibility-aware energy saving behavior
    const handleVisibilityChange = () => {
      if (document.hidden) {
        gsap.ticker.remove(tick);
      } else {
        gsap.ticker.add(tick);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Clean up connections on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      gsap.ticker.remove(tick);
      
      // Wipe DOM nodes
      items.forEach((item) => {
        if (container.contains(item.el)) {
          container.removeChild(item.el);
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0 bg-[#050816]"
      id="3d-gsap-background-container"
    />
  );
}
