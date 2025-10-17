'use client';

import { motion } from 'framer-motion';
import { Play, CheckCircle } from 'lucide-react';
import { projects } from '@/lib/data';
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'featured' 
    ? projects.filter(p => p.featured)
    : projects;

  return (
    <section id="projects" style={{ backgroundColor: '#0A0E27', position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Featured Projects
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: '42rem', margin: '0 auto', marginBottom: '2rem' }}>
            High-impact campaigns and content strategies that delivered measurable results
          </p>

          {/* Filter Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button
              onClick={() => setFilter('all')}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.3s',
                backgroundColor: filter === 'all' ? '#4A90E2' : 'transparent',
                color: filter === 'all' ? 'white' : '#9ca3af',
                border: '1px solid',
                borderColor: filter === 'all' ? '#4A90E2' : '#374151'
              }}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.3s',
                backgroundColor: filter === 'featured' ? '#4A90E2' : 'transparent',
                color: filter === 'featured' ? 'white' : '#9ca3af',
                border: '1px solid',
                borderColor: filter === 'featured' ? '#4A90E2' : '#374151'
              }}
            >
              Featured Only
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                style={{
                  background: 'linear-gradient(to bottom right, #151B3B, #1F2747)',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(74, 144, 226, 0.2)',
                  transition: 'all 0.3s',
                }}
              >
                {/* Project Image/Video Placeholder */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '56.25%',
                  background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.2), rgba(123, 104, 238, 0.2))',
                  overflow: 'hidden'
                }}>
                  {/* Featured Badge */}
                  {project.featured && (
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      padding: '0.5rem 1rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(74, 144, 226, 0.9)',
                      backdropFilter: 'blur(8px)',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: 'white',
                      zIndex: 10
                    }}>
                      ⭐ Featured
                    </div>
                  )}

                  {/* Play Button Overlay */}
                  {project.videoEmbed && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      backdropFilter: 'blur(4px)'
                    }}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        style={{
                          width: '4rem',
                          height: '4rem',
                          borderRadius: '9999px',
                          backgroundColor: 'rgba(74, 144, 226, 0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        <Play size={24} style={{ color: 'white' }} />
                      </motion.div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(10, 14, 39, 0.9)',
                    backdropFilter: 'blur(8px)',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#4A90E2',
                    border: '1px solid rgba(74, 144, 226, 0.3)'
                  }}>
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem' }}>
                  {/* Header */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
                        {project.title}
                      </h3>
                      <span style={{ color: '#7B68EE', fontSize: '0.875rem', fontWeight: '500' }}>
                        {project.year}
                      </span>
                    </div>
                    <p style={{ color: '#4A90E2', fontSize: '0.875rem', fontWeight: '500' }}>
                      {project.client}
                    </p>
                  </div>

                  {/* Description */}
                  <p style={{ color: '#d1d5db', marginBottom: '1.5rem', lineHeight: '1.75' }}>
                    {project.description}
                  </p>

                  {/* Challenge & Solution */}
                  <div style={{ marginBottom: '1.5rem', display: 'grid', gap: '1rem' }} className="md:grid-cols-2">
                    <div>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#FF6B35', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Challenge
                      </h4>
                      <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: '1.5' }}>
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#34D399', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Solution
                      </h4>
                      <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: '1.5' }}>
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#4A90E2', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Results
                    </h4>
                    <div style={{ display: 'grid', gap: '0.5rem' }} className="md:grid-cols-2">
                      {project.results.map((result, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                          <CheckCircle size={16} style={{ color: '#34D399', marginTop: '0.125rem', flexShrink: 0 }} />
                          <span style={{ color: '#d1d5db', fontSize: '0.875rem', lineHeight: '1.5' }}>
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '0.375rem',
                          fontSize: '0.75rem',
                          backgroundColor: 'rgba(74, 144, 226, 0.1)',
                          color: '#4A90E2',
                          border: '1px solid rgba(74, 144, 226, 0.2)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  {project.videoEmbed && (
                    <a
                      href={`https://youtube.com/watch?v=${project.videoEmbed}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.5rem',
                        background: 'linear-gradient(to right, #4A90E2, #7B68EE)',
                        color: 'white',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        transition: 'all 0.3s',
                        textDecoration: 'none'
                      }}
                    >
                      <Play size={16} />
                      Watch Case Study
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}