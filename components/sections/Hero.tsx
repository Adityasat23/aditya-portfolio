'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          width: '24rem',
          height: '24rem',
          background: 'rgba(74, 144, 226, 0.2)',
          borderRadius: '9999px',
          filter: 'blur(80px)',
          top: '-12rem',
          left: '-12rem',
          animation: 'pulse 3s infinite',
        }}></div>
        <div style={{
          position: 'absolute',
          width: '24rem',
          height: '24rem',
          background: 'rgba(123, 104, 238, 0.2)',
          borderRadius: '9999px',
          filter: 'blur(80px)',
          bottom: '-12rem',
          right: '-12rem',
          animation: 'pulse 3s infinite',
          animationDelay: '1s',
        }}></div>
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="md:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              style={{ color: '#4A90E2', fontWeight: '500', marginBottom: '1rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {personalInfo.title}
            </motion.p>

            <motion.h1
              style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: '1.2' }}
              className="md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {personalInfo.name.split(' ').slice(0, 2).join(' ')}
              <br />
              <span className="gradient-text">{personalInfo.name.split(' ').slice(-1)}</span>
            </motion.h1>

            <motion.p
              style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#d1d5db', marginBottom: '1.5rem' }}
              className="md:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.p
              style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '32rem', lineHeight: '1.75' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#projects"
                style={{
                  background: 'linear-gradient(to right, #4A90E2, #7B68EE)',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  color: 'white',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s',
                }}
              >
                View My Work
                <ArrowDown size={18} />
              </a>
              <a
                href={`https://youtube.com/watch?v=${personalInfo.showreel}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: '2px solid #4A90E2',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  color: '#4A90E2',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s',
                }}
              >
                <Play size={18} />
                Watch Showreel
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ position: 'relative', display: 'none' }}
            className="md:block"
          >
            <div style={{
              position: 'relative',
              width: '100%',
              height: '500px',
              borderRadius: '1.5rem',
              background: 'linear-gradient(to bottom right, rgba(74, 144, 226, 0.2), rgba(123, 104, 238, 0.2))',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(74, 144, 226, 0.3)',
              overflow: 'hidden',
            }}>
              {/* Profile Image */}
              {personalInfo.profileImage && (
                <img 
                  src={personalInfo.profileImage}
                  alt="Aditya Satria Pratama"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              )}
              
              {/* Gradient Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10, 14, 39, 0.9) 0%, transparent 50%)',
              }}></div>
              
              {/* Stats Overlay */}
              <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2rem',
                right: '2rem',
                backgroundColor: 'rgba(21, 27, 59, 0.8)',
                backdropFilter: 'blur(12px)',
                borderRadius: '1rem',
                padding: '1.5rem',
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center' }}>
                  <div>
                    <p className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>21.7M+</p>
                    <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Views Generated</p>
                  </div>
                  <div>
                    <p className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>80+</p>
                    <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Brands Worked</p>
                  </div>
                  <div>
                    <p className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>5M+</p>
                    <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Social Reach</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        >
          <ArrowDown style={{ color: '#4A90E2' }} size={24} />
        </motion.div>
      </div>
    </section>
  );
}