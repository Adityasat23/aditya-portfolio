'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, ExternalLink, Download } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Contact() {
  const socialLinks = [
    { 
      name: 'Instagram', 
      url: personalInfo.social.instagram, 
      icon: Instagram,
      color: '#E4405F',
      username: '@aditysat'
    },
    { 
      name: 'LinkedIn', 
      url: personalInfo.social.linkedin, 
      icon: Linkedin,
      color: '#0A66C2',
      username: 'in/aditysat'
    },
    { 
      name: 'Behance', 
      url: personalInfo.social.behance, 
      icon: ExternalLink,
      color: '#1769FF',
      username: 'aditysat'
    },
  ];

  return (
    <section id="contact" style={{ backgroundColor: '#0A0E27', position: 'relative', overflow: 'hidden' }}>
      {/* Background Gradient */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.5 }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40rem',
          height: '40rem',
          background: 'radial-gradient(circle, rgba(74, 144, 226, 0.2), transparent)',
          filter: 'blur(100px)'
        }}></div>
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Let&apos;s Collaborate
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: '42rem', margin: '0 auto' }}>
            Have a project in mind? Let&apos;s create something amazing together
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', maxWidth: '64rem', margin: '0 auto' }} className="lg:grid-cols-2">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
              Get In Touch
            </h3>
            <p style={{ color: '#d1d5db', marginBottom: '2rem', lineHeight: '1.75' }}>
              I am always interested in hearing about new projects and opportunities. 
              Whether you need content creation, video editing, or social media strategy, 
              feel free to reach out!
            </p>

            {/* Contact Methods */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  backgroundColor: 'rgba(74, 144, 226, 0.1)',
                  border: '1px solid rgba(74, 144, 226, 0.2)',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#4A90E2'
                }}>
                  <Mail size={20} style={{ color: 'white' }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.125rem' }}>Email</p>
                  <p style={{ color: 'white', fontSize: '0.875rem', fontWeight: '500' }}>{personalInfo.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${personalInfo.phone}`}
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  backgroundColor: 'rgba(123, 104, 238, 0.1)',
                  border: '1px solid rgba(123, 104, 238, 0.2)',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#7B68EE'
                }}>
                  <Phone size={20} style={{ color: 'white' }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.125rem' }}>Phone</p>
                  <p style={{ color: 'white', fontSize: '0.875rem', fontWeight: '500' }}>{personalInfo.phone}</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  backgroundColor: 'rgba(255, 107, 53, 0.1)',
                  border: '1px solid rgba(255, 107, 53, 0.2)',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#FF6B35'
                }}>
                  <MapPin size={20} style={{ color: 'white' }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.125rem' }}>Location</p>
                  <p style={{ color: 'white', fontSize: '0.875rem', fontWeight: '500' }}>{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Download Resume */}
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
              Connect With Me
            </h3>
            
            {/* Social Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.5rem',
                    borderRadius: '0.75rem',
                    background: 'linear-gradient(to bottom right, #1F2747, #0A0E27)',
                    border: `1px solid ${social.color}40`,
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      backgroundColor: `${social.color}20`,
                      border: `1px solid ${social.color}40`
                    }}>
                      <social.icon size={24} style={{ color: social.color }} />
                    </div>
                    <div>
                      <p style={{ color: 'white', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.125rem' }}>
                        {social.name}
                      </p>
                      <p style={{ color: '#9ca3af', fontSize: '0.75rem' }}>
                        {social.username}
                      </p>
                    </div>
                  </div>
                  <ExternalLink size={18} style={{ color: '#9ca3af' }} />
                </motion.a>
              ))}
            </div>

            {/* Quick Stats Card */}
            <motion.div
              whileHover={{ y: -5 }}
              style={{
                padding: '2rem',
                borderRadius: '1rem',
                background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.2), rgba(123, 104, 238, 0.2))',
                border: '1px solid rgba(74, 144, 226, 0.3)',
                textAlign: 'center'
              }}
            >
              <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '1rem' }}>
                Response Time
              </p>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>
                &lt; 24 Hours
              </p>
              <p style={{ fontSize: '0.875rem', color: '#4A90E2' }}>
                Usually within the same day
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(74, 144, 226, 0.2)',
            textAlign: 'center'
          }}
        >
          <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
            © 2025 Aditya Satria Pratama. Built with Next.js & Framer Motion.
          </p>
          <p style={{ color: '#4A90E2', fontSize: '0.75rem', marginTop: '0.5rem' }}>
            Designed & Developed with passion for digital content
          </p>
        </motion.div>
      </div>
    </section>
  );
}