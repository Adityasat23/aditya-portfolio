'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function OptimizedImage({ src, alt, style, className }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.2), rgba(123, 104, 238, 0.2))',
      }}>
        <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Image not available</p>
      </div>
    );
  }

  return (
    <>
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div style={{
          ...style,
          background: 'linear-gradient(90deg, rgba(74, 144, 226, 0.1) 0%, rgba(123, 104, 238, 0.2) 50%, rgba(74, 144, 226, 0.1) 100%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
        }} />
      )}
      
      {/* Actual Image */}
      <motion.img
        src={src}
        alt={alt}
        style={{
          ...style,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
        className={className}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        loading="lazy"
      />

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </>
  );
}