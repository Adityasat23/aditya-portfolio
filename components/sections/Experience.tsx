'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" style={{ backgroundColor: '#151B3B', position: 'relative' }}>
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
            Experience
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: '42rem', margin: '0 auto' }}>
            My journey through content creation, brand management, and digital innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ maxWidth: '56rem', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Line */}
          <div 
            style={{
              position: 'absolute',
              left: '1.5rem',
              top: '2rem',
              bottom: '2rem',
              width: '2px',
              background: 'linear-gradient(to bottom, #4A90E2, #7B68EE)',
              display: 'none'
            }}
            className="md:block"
          ></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ position: 'relative', paddingLeft: '0', marginBottom: '3rem' }}
              className="md:pl-20"
            >
              {/* Timeline Dot */}
              <div 
                style={{
                  position: 'absolute',
                  left: '0.75rem',
                  top: '1.5rem',
                  width: '1.5rem',
                  height: '1.5rem',
                  borderRadius: '9999px',
                  backgroundColor: exp.color,
                  border: '3px solid #151B3B',
                  display: 'none',
                  zIndex: 10
                }}
                className="md:block"
              ></div>

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -5, boxShadow: `0 20px 40px ${exp.color}20` }}
                style={{
                  background: 'linear-gradient(to bottom right, #1F2747, #0A0E27)',
                  padding: '2rem',
                  borderRadius: '1rem',
                  border: `1px solid ${exp.color}30`,
                  transition: 'all 0.3s',
                }}
              >
                {/* Header */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>
                        {exp.title}
                      </h3>
                      <p style={{ fontSize: '1.125rem', color: exp.color, fontWeight: '600' }}>
                        {exp.company}
                      </p>
                    </div>
                    <span 
                      style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        backgroundColor: `${exp.color}20`,
                        color: exp.color,
                        border: `1px solid ${exp.color}40`
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta Info */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: '#9ca3af', fontSize: '0.875rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: '#d1d5db', marginBottom: '1.5rem', lineHeight: '1.75' }}>
                  {exp.description}
                </p>

                {/* Achievements */}
                {exp.achievements.length > 0 && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: exp.color, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Key Achievements
                    </h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {exp.achievements.map((achievement, i) => (
                        <li 
                          key={i}
                          style={{
                            color: '#d1d5db',
                            fontSize: '0.875rem',
                            paddingLeft: '1.5rem',
                            position: 'relative',
                            lineHeight: '1.5'
                          }}
                        >
                          <span style={{
                            position: 'absolute',
                            left: '0',
                            top: '0.5rem',
                            width: '0.5rem',
                            height: '0.5rem',
                            borderRadius: '9999px',
                            backgroundColor: exp.color
                          }}></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '0.375rem',
                        fontSize: '0.75rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#9ca3af',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}