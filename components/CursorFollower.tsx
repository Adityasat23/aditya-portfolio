'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#4A90E2',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
        }}
        animate={{
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      
      {/* Follower ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '2px solid rgba(74, 144, 226, 0.5)',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ 
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      />
    </>
  );
}