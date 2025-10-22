'use client';

import { motion } from 'framer-motion';
import { Play, CheckCircle, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data';
import { useState } from 'react';

// Video embed helper
const getVideoEmbed = (url: string, platform: 'youtube' | 'instagram' | 'tiktok') => {
  switch (platform) {
    case 'youtube':
      return `https://www.youtube.com/embed/${url}`;
    case 'instagram':
      return `https://www.instagram.com/p/${url}/embed`;
    case 'tiktok':
      return `https://www.tiktok.com/embed/v2/${url}`;
    default:
      return url;
  }
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  
  // Featured projects first, then others
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);
  const displayedProjects = showAll ? [...featuredProjects, ...otherProjects] : featuredProjects;

  return (
    <section id="projects" className="mesh-gradient relative">
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

          {/* Toggle Button */}
          {otherProjects.length > 0 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 rounded-full glass-card text-sm font-medium text-white hover:glass-card-elevated transition-all"
            >
              {showAll ? 'Show Featured Only' : `View All Projects (${projects.length})`}
            </button>
          )}
        </motion.div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="glass-card rounded-2xl overflow-hidden hover-lift"
              >
                {/* Project Image/Video */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '56.25%',
                  background: 'linear-gradient(135deg, rgba(10, 132, 255, 0.2), rgba(191, 90, 242, 0.2))',
                  overflow: 'hidden'
                }}>
                  {/* Project Image */}
                  {project.image && (
                    <img 
                      src={project.image}
                      alt={project.title}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-blue-purple text-white text-xs font-semibold backdrop-blur-sm z-10">
                      ⭐ Featured
                    </div>
                  )}

                  {/* Play Button for Videos */}
                  {project.videoEmbed && (
                    <a
                      href={
                        project.videoPlatform === 'instagram' 
                          ? `https://instagram.com/p/${project.videoEmbed}` 
                          : project.videoPlatform === 'tiktok'
                          ? `https://tiktok.com/@username/video/${project.videoEmbed}`
                          : `https://youtube.com/watch?v=${project.videoEmbed}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm hover:bg-black/50 transition-all group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-20 h-20 rounded-full bg-gradient-blue-purple flex items-center justify-center glow-blue"
                      >
                        <Play size={32} className="text-white ml-1" />
                      </motion.div>
                    </a>
                  )}

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 px-4 py-2 rounded-lg glass-card text-xs font-semibold text-blue-400 border border-white/20">
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
                      <span style={{ color: '#BF5AF2', fontSize: '0.875rem', fontWeight: '500' }}>
                        {project.year}
                      </span>
                    </div>
                    <p style={{ color: '#0A84FF', fontSize: '0.875rem', fontWeight: '500' }}>
                      {project.client}
                    </p>
                  </div>

                  {/* Description */}
                  <p style={{ color: '#d1d5db', marginBottom: '1.5rem', lineHeight: '1.75' }}>
                    {project.description}
                  </p>

                  {/* Challenge & Solution */}
                  <div style={{ marginBottom: '1.5rem', display: 'grid', gap: '1rem' }} className="md:grid-cols-2">
                    <div className="glass-card p-4 rounded-lg">
                      <h4 style={{ fontSize: '0.75rem', fontWeight: '600', color: '#FF9500', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Challenge
                      </h4>
                      <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: '1.5' }}>
                        {project.challenge}
                      </p>
                    </div>
                    <div className="glass-card p-4 rounded-lg">
                      <h4 style={{ fontSize: '0.75rem', fontWeight: '600', color: '#5AC8FA', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Solution
                      </h4>
                      <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: '1.5' }}>
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: 'white', marginBottom: '0.75rem' }}>
                      Results
                    </h4>
                    <div style={{ display: 'grid', gap: '0.5rem' }} className="md:grid-cols-2">
                      {project.results.map((result, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
                          <CheckCircle size={16} style={{ color: '#5AC8FA', marginTop: '0.125rem', flexShrink: 0 }} />
                          <span style={{ color: '#d1d5db', fontSize: '0.875rem', lineHeight: '1.5' }}>
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                   {project.tags && project.tags.length > 0 && project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium glass-card text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  {project.videoEmbed && (
                    <a
                      href={
                        project.videoPlatform === 'instagram' 
                          ? `https://instagram.com/p/${project.videoEmbed}` 
                          : project.videoPlatform === 'tiktok'
                          ? `https://tiktok.com/@username/video/${project.videoEmbed}`
                          : `https://youtube.com/watch?v=${project.videoEmbed}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-blue-purple text-white text-sm font-medium hover:glow-blue transition-all"
                    >
                      <Play size={16} />
                      Watch on {project.videoPlatform === 'instagram' ? 'Instagram' : project.videoPlatform === 'tiktok' ? 'TikTok' : 'YouTube'}
                      <ExternalLink size={14} />
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