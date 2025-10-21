'use client';

import { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function TypeWriter({ 
  text, 
  delay = 0, 
  speed = 50,
  className = '',
  style = {}
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, isStarted]);

  return (
    <span className={className} style={style}>
      {displayText}
      {currentIndex < text.length && (
        <span style={{ 
          animation: 'blink 1s infinite',
          marginLeft: '2px'
        }}>|</span>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}} />
    </span>
  );
}