'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StarBorderProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export default function StarBorder({ children, className = '', color = '#0A84FF' }: StarBorderProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `linear-gradient(90deg, ${color}, transparent)`,
          opacity: 0,
        }}
        whileHover={{
          opacity: 0.8,
        }}
        transition={{
          duration: 0.3,
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Animated stars */}
      <motion.div
        className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1,
        }}
      />
    </div>
  );
}