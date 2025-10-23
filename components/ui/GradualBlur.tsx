'use client';

import { motion } from 'framer-motion';

interface GradualBlurProps {
  text: string;
  className?: string;
  duration?: number;
}

export default function GradualBlur({ text, className = '', duration = 0.5 }: GradualBlurProps) {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{
            duration,
            delay: i * 0.05,
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}