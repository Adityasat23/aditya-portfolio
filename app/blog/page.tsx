'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import BackToTop from '@/components/BackToTop';

// Sample blog posts - nanti bisa ambil dari CMS atau file
const blogPosts = [
  {
    id: 1,
    title: "How I Generated 21.7M+ Views on a Single Campaign",
    slug: "21-million-views-campaign",
    excerpt: "Behind the scenes of the Google Indonesia x Gracia Caroline campaign that went viral while maintaining 100% brand compliance.",
    date: "2024-12-15",
    readTime: "8 min",
    category: "Case Study",
    image: "/images/blog/google-campaign.jpg",
    featured: true
  },
  {
    id: 2,
    title: "5 Data-Driven Strategies for Social Media Growth",
    slug: "data-driven-social-media",
    excerpt: "The exact strategies I used to achieve 427% growth in profile visits for my clients.",
    date: "2024-12-10",
    readTime: "6 min",
    category: "Strategy",
    image: "/images/blog/social-strategy.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Balancing Creativity with Brand Guidelines",
    slug: "creativity-brand-guidelines",
    excerpt: "Lessons learned from working with major brands like Google, BCA, and Mandiri.",
    date: "2024-12-05",
    readTime: "7 min",
    category: "Insights",
    image: "/images/blog/brand-guidelines.jpg",
    featured: false
  },
];

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: '#0A0E27', minHeight: '100vh', paddingTop: '5rem' }}>
        <div className="section-container">
          {/* Header */}
          <div style={{ maxWidth: '48rem', margin: '0 auto', marginBottom: '4rem' }}>
            <Link 
              href="/#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#4A90E2',
                fontSize: '0.875rem',
                fontWeight: '500',
                marginBottom: '2rem',
                textDecoration: 'none'
              }}
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="gradient-text"
              style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}
            >
              Blog & Case Studies
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{ color: '#9ca3af', fontSize: '1.125rem', lineHeight: '1.75' }}
            >
              Deep dives into my projects, strategies, and lessons learned in digital content creation.
            </motion.p>
          </div>

          {/* Blog Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '64rem', margin: '0 auto' }} className="md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    style={{
                      background: 'linear-gradient(to bottom right, #1F2747, #0A0E27)',
                      borderRadius: '1rem',
                      overflow: 'hidden',
                      border: '1px solid rgba(74, 144, 226, 0.2)',
                      transition: 'all 0.3s',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Image */}
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      paddingTop: '56.25%',
                      background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.2), rgba(123, 104, 238, 0.2))',
                      overflow: 'hidden'
                    }}>
                      {post.featured && (
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
                          Featured
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
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: 'bold', 
                        color: 'white', 
                        marginBottom: '0.75rem',
                        lineHeight: '1.4'
                      }}>
                        {post.title}
                      </h3>

                      <p style={{ 
                        color: '#9ca3af', 
                        fontSize: '0.875rem', 
                        lineHeight: '1.6',
                        marginBottom: '1rem',
                        flex: 1
                      }}>
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '1rem',
                        color: '#6b7280',
                        fontSize: '0.75rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(74, 144, 226, 0.1)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Calendar size={14} />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Clock size={14} />
                          <span>{post.readTime} read</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              maxWidth: '42rem',
              margin: '4rem auto 0',
              textAlign: 'center',
              padding: '2rem',
              background: 'linear-gradient(to right, rgba(74, 144, 226, 0.1), rgba(123, 104, 238, 0.1))',
              borderRadius: '1rem',
              border: '1px solid rgba(74, 144, 226, 0.3)'
            }}
          >
            <p style={{ color: '#d1d5db', fontSize: '0.875rem' }}>
              More case studies and insights coming soon. Subscribe to my newsletter to stay updated!
            </p>
          </motion.div>
        </div>
      </main>
      <BackToTop />
    </>
  );
}