import { useEffect, useState } from 'react';

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('main-content-flow');
      if (!element) return;

      const totalHeight = element.scrollHeight;
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Distance from top of the element to top of the viewport
      const scrolled = -rect.top;
      
      // The total scrollable distance is the total height of the element minus the viewport height
      const totalScrollable = totalHeight - viewportHeight;

      if (totalScrollable <= 0) {
        setProgress(0);
        return;
      }

      const currentProgress = Math.min(Math.max((scrolled / totalScrollable) * 100, 0), 100);
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Defer initial calculation to allow the DOM rendering to settle
    const timeoutId = setTimeout(handleScroll, 100);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[4px] bg-black/30 z-[9999] pointer-events-none"
      id="reading-progress-container"
    >
      <div
        className="h-full bg-gradient-to-r from-primary via-purple-500 to-secondary transition-all duration-100 ease-out rounded-r-full shadow-[0_0_10px_rgba(124,58,237,0.8)]"
        style={{ width: `${progress}%` }}
        id="reading-progress-indicator"
      />
    </div>
  );
}
