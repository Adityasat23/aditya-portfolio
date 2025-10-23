'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, ExternalLink, Download, MessageCircle } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { useState } from 'react';

export default function Contact() {
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);

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

  const handlePhoneClick = (type: 'whatsapp' | 'call') => {
    const phone = personalInfo.phone;
    if (type === 'whatsapp') {
      window.open(`https://wa.me/62${phone.substring(1)}`, '_blank');
    } else {
      window.location.href = `tel:${phone}`;
    }
    setShowPhoneOptions(false);
  };

  return (
    <section id="contact" style={{ backgroundColor: '#000000', position: 'relative', overflow: 'hidden' }}>
      {/* Background Gradient */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40rem',
          height: '40rem',
          background: 'radial-gradient(circle, rgba(10, 132, 255, 0.3), transparent)',
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
              I&apos;m always interested in hearing about new projects and opportunities. 
              Whether you need content creation, video editing, or social media strategy, 
              feel free to reach out!
            </p>

            {/* Contact Methods */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:glass-card-elevated transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Email</p>
                  <p className="text-white text-sm font-medium">{personalInfo.email}</p>
                </div>
              </motion.a>

              {/* Phone with Options */}
              <div className="relative">
                <motion.button
                  onClick={() => setShowPhoneOptions(!showPhoneOptions)}
                  whileHover={{ x: 5 }}
                  className="w-full flex items-center gap-4 p-4 rounded-xl glass-card hover:glass-card-elevated transition-all text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Phone</p>
                    <p className="text-white text-sm font-medium">{personalInfo.phone}</p>
                  </div>
                </motion.button>

                {/* Phone Options Dropdown */}
                {showPhoneOptions && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 mt-2 glass-card-elevated rounded-xl overflow-hidden z-10"
                  >
                    <button
                      onClick={() => handlePhoneClick('whatsapp')}
                      className="w-full flex items-center gap-3 p-4 hover:bg-white/10 transition-colors text-left"
                    >
                      <MessageCircle size={20} className="text-green-400" />
                      <span className="text-white text-sm">WhatsApp</span>
                    </button>
                    <button
                      onClick={() => handlePhoneClick('call')}
                      className="w-full flex items-center gap-3 p-4 hover:bg-white/10 transition-colors text-left"
                    >
                      <Phone size={20} className="text-blue-400" />
                      <span className="text-white text-sm">Call</span>
                    </button>
                  </motion.div>
                )}
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-xl glass-card"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Location</p>
                  <p className="text-white text-sm font-medium">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Download Resume */}
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
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
                  className="flex items-center justify-between p-6 rounded-xl glass-card hover:glass-card-elevated transition-all"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${social.color}, ${social.color}dd)`,
                      }}
                    >
                      <social.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-1">
                        {social.name}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {social.username}
                      </p>
                    </div>
                  </div>
                  <ExternalLink size={18} className="text-gray-400" />
                </motion.a>
              ))}
            </div>

            {/* Response Time Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl glass-card-elevated text-center"
            >
              <p className="text-sm text-gray-400 mb-2">
                Response Time
              </p>
              <p className="text-4xl font-bold text-white mb-2">
                &lt; 24 Hours
              </p>
              <p className="text-sm text-blue-400">
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
          className="mt-20 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Aditya Satria Pratama. Built with Next.js & Framer Motion.
          </p>
          <p className="text-blue-400 text-xs mt-2">
            Designed & Developed with passion for digital content
          </p>
        </motion.div>
      </div>
    </section>
  );
}