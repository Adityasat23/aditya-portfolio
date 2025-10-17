'use client';

import { motion } from 'framer-motion';
import { Video, Palette, BarChart3, Lightbulb, Briefcase } from 'lucide-react';
import { skills } from '@/lib/data';

const categoryIcons: { [key: string]: any } = {
  "Video Production & Post-Production": Video,
  "Creative Design": Palette,
  "Analytics & Performance Tracking": BarChart3,
  "Content Strategy & Management": Lightbulb,
  "Project Management": Briefcase,
};

export default function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: '#151B3B', position: 'relative' }}>
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
            Skills & Expertise
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: '42rem', margin: '0 auto' }}>
            A comprehensive toolkit built through years of hands-on experience
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginBottom: '3rem' }} className="lg:grid-cols-2">
          {skills.primary.map((skillGroup, index) => {
            const Icon = categoryIcons[skillGroup.category] || Video;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  style={{
                    background: 'linear-gradient(to bottom right, #1F2747, #0A0E27)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(74, 144, 226, 0.2)',
                    height: '100%',
                    transition: 'all 0.3s',
                  }}
                >
                  {/* Icon & Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{
                      padding: '0.75rem',
                      borderRadius: '0.75rem',
                      background: 'linear-gradient(135deg, #4A90E2, #7B68EE)',
                    }}>
                      <Icon size={24} style={{ color: 'white' }} />
                    </div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'white' }}>
                      {skillGroup.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {skillGroup.items.map((item, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05, y: -2 }}
                        style={{
                          padding: '0.5rem 1rem',
                          borderRadius: '0.5rem',
                          backgroundColor: 'rgba(74, 144, 226, 0.1)',
                          color: '#d1d5db',
                          fontSize: '0.875rem',
                          border: '1px solid rgba(74, 144, 226, 0.2)',
                          transition: 'all 0.2s',
                          cursor: 'default'
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages & Certifications */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="md:grid-cols-2">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(to right, rgba(74, 144, 226, 0.1), rgba(123, 104, 238, 0.1))',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid rgba(74, 144, 226, 0.3)',
            }}
          >
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
              Languages
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {skills.languages.map((lang, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#d1d5db', fontSize: '0.875rem' }}>{lang.name}</span>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    backgroundColor: 'rgba(74, 144, 226, 0.2)',
                    color: '#4A90E2',
                    border: '1px solid rgba(74, 144, 226, 0.3)'
                  }}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(to right, rgba(255, 107, 53, 0.1), rgba(123, 104, 238, 0.1))',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 107, 53, 0.3)',
            }}
          >
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
              Currently Learning
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {skills.certifications.map((cert, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                  <span style={{
                    display: 'inline-block',
                    width: '0.5rem',
                    height: '0.5rem',
                    borderRadius: '9999px',
                    backgroundColor: '#FF6B35',
                    marginTop: '0.375rem',
                    flexShrink: 0
                  }}></span>
                  <span style={{ color: '#d1d5db', fontSize: '0.875rem', lineHeight: '1.5' }}>
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}