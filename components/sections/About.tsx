'use client';

import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Zap } from 'lucide-react';
import { personalInfo, education } from '@/lib/data';

const stats = [
  { icon: TrendingUp, value: "21.7M+", label: "Total Views Generated" },
  { icon: Users, value: "80+", label: "Brands Collaborated" },
  { icon: Award, value: "5M+", label: "Social Media Reach" },
  { icon: Zap, value: "427%", label: "Growth Achieved" },
];

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#0A0E27', position: 'relative', overflow: 'hidden' }}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            About Me
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: '42rem', margin: '0 auto' }}>
            Bringing Quality with Quantity at the same time
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', marginBottom: '4rem' }} className="lg:grid-cols-2">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              Hi, I&apos;m <span className="gradient-text">Aditya Satria Pratama</span>
            </h3>
            <div style={{ color: '#d1d5db', lineHeight: '1.75', marginBottom: '2rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                I&apos;m a <strong style={{ color: 'white' }}>Video Content Specialist</strong> with a proven track record of creating high-impact content for influencers and viral campaigns. I combine creative production expertise with performance analytics to deliver content that drives measurable business results.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                My journey in digital content creation spans from working with <strong style={{ color: 'white' }}>major brands like Google Indonesia, BCA, Mandiri, and Binance</strong>, to managing social media strategies for organizations serving thousands of students.
              </p>
              <p>
                I believe in the philosophy: <em style={{ color: '#4A90E2' }}>&quot;Where Creativity Meets Critical Thinking&quot;</em> — every creative decision I make is backed by data and strategic thinking.
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>
                Education
              </h4>
              {education.map((edu, index) => (
                <div key={index} style={{ marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '2px solid #4A90E2' }}>
                  <h5 style={{ fontWeight: '600', color: 'white' }}>{edu.degree}</h5>
                  <p style={{ color: '#7B68EE', fontSize: '0.875rem' }}>{edu.institution}</p>
                  <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{edu.period}</p>
                  {edu.gpa && (
                    <p style={{ color: '#4A90E2', fontSize: '0.875rem', fontWeight: '500' }}>GPA: {edu.gpa}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{
                    background: 'linear-gradient(to bottom right, #151B3B, #1F2747)',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(74, 144, 226, 0.2)',
                    transition: 'all 0.3s',
                  }}
                >
                  <stat.icon size={32} style={{ color: '#4A90E2', marginBottom: '1rem' }} />
                  <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>
                    {stat.value}
                  </p>
                  <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Contact Info Card */}
            <motion.div
              whileHover={{ y: -5 }}
              style={{
                marginTop: '1.5rem',
                background: 'linear-gradient(to right, rgba(74, 144, 226, 0.1), rgba(123, 104, 238, 0.1))',
                padding: '1.5rem',
                borderRadius: '1rem',
                border: '1px solid rgba(74, 144, 226, 0.3)',
              }}
            >
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>
                Lets Connect
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  style={{ color: '#d1d5db', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#4A90E2'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                >
                  📧 {personalInfo.email}
                </a>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  style={{ color: '#d1d5db', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#4A90E2'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                >
                  📱 {personalInfo.phone}
                </a>
                <p style={{ color: '#d1d5db', fontSize: '0.875rem' }}>
                  📍 {personalInfo.location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}