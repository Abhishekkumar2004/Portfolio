import { motion } from 'motion/react';

interface InfiniteMarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
}

export default function InfiniteMarquee({ items, direction = 'left', speed = 25 }: InfiniteMarqueeProps) {
  // Triple the items to ensure seamless loop across extremely wide screens
  const duplicatedItems = [...items, ...items, ...items];
  const initialX = direction === 'left' ? 0 : '-33.33%';
  const animateX = direction === 'left' ? '-33.33%' : 0;

  return (
    <div className="relative w-full overflow-hidden bg-surface py-6 select-none">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050816] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050816] to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex whitespace-nowrap gap-12 text-sm font-mono tracking-widest text-muted uppercase items-center"
        initial={{ x: initialX }}
        animate={{ x: animateX }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-12 shrink-0">
            <span>{item}</span>
            <span className="w-2 h-2 rounded-full bg-primary/70" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
