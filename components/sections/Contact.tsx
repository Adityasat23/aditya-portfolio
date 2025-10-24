'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, ExternalLink, Download, MessageCircle } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { useState } from 'react';

// TikTok Icon Component
const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 48 48" fill="currentColor" width={size} height={size}>
    <path d="M31.5 8c1.6 2.7 4.1 4.7 7.2 5.4v5.3c-2.6-.1-5.1-.9-7.2-2.2v11.5c0 7.4-5.4 12-12 12-5.7 0-10.5-4.1-11.6-9.6-.2-1-.3-2-.2-3 .4-5.6 5.1-10 10.8-10 1 0 2 .1 2.9.4V24c-.9-.4-1.9-.6-2.9-.6-3.2 0-5.9 2.7-5.9 6s2.7 6 5.9 6c3.2 0 5.9-2.6 5.9-6V8h6.1z"/>
  </svg>
);

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
      name: 'TikTok', 
      url: 'https://tiktok.com/@aditysat', // GANTI dengan TikTok URL Anda
      icon: TikTokIcon,
      color: '#000000',
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
    <section id="contact" className="relative overflow-hidden bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-blue-500/30 to-transparent blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="gradient-text mb-4 text-4xl font-bold md:text-5xl">
            Let&apos;s Collaborate
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Have a project in mind? Let&apos;s create something amazing together
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-2xl font-bold text-white">
              Get In Touch
            </h3>
            <p className="mb-8 leading-relaxed text-gray-300">
              I&apos;m always interested in hearing about new projects and opportunities. 
              Whether you need content creation, video editing, or social media strategy, 
              feel free to reach out!
            </p>

            {/* Contact Methods */}
            <div className="mb-8 space-y-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 rounded-xl p-4 glass-card hover:glass-card-elevated transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="mb-1 text-xs text-gray-400">Email</p>
                  <p className="text-sm font-medium text-white">{personalInfo.email}</p>
                </div>
              </motion.a>

              {/* Phone with Options */}
              <div className="relative">
                <motion.button
                  onClick={() => setShowPhoneOptions(!showPhoneOptions)}
                  whileHover={{ x: 5 }}
                  className="w-full flex items-center gap-4 rounded-xl p-4 glass-card hover:glass-card-elevated transition-all text-left"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="mb-1 text-xs text-gray-400">Phone</p>
                    <p className="text-sm font-medium text-white">{personalInfo.phone}</p>
                  </div>
                </motion.button>

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
                      <span className="text-sm text-white">WhatsApp</span>
                    </button>
                    <button
                      onClick={() => handlePhoneClick('call')}
                      className="w-full flex items-center gap-3 p-4 hover:bg-white/10 transition-colors text-left"
                    >
                      <Phone size={20} className="text-blue-400" />
                      <span className="text-sm text-white">Call</span>
                    </button>
                  </motion.div>
                )}
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 rounded-xl p-4 glass-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="mb-1 text-xs text-gray-400">Location</p>
                  <p className="text-sm font-medium text-white">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Download Resume */}
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-sm font-medium text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all"
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
          >
            <h3 className="mb-6 text-2xl font-bold text-white">
              Connect With Me
            </h3>
            
            {/* Social Links */}
            <div className="mb-8 space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center justify-between rounded-xl p-6 glass-card hover:glass-card-elevated transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="flex h-12 w-12 items-center justify-center rounded-lg"
                      style={{
                        background: `linear-gradient(135deg, ${social.color}, ${social.color}dd)`,
                      }}
                    >
                      <social.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-semibold text-white">
                        {social.name}
                      </p>
                      <p className="text-xs text-gray-400">
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
              className="rounded-2xl p-8 glass-card-elevated text-center"
            >
              <p className="mb-2 text-sm text-gray-400">
                Response Time
              </p>
              <p className="mb-2 text-4xl font-bold text-white">
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
          className="mt-20 border-t border-white/10 pt-8 text-center"
        >
          <p className="text-sm text-gray-400">
            © 2025 Aditya Satria Pratama. Built with Next.js & Framer Motion.
          </p>
          <p className="mt-2 text-xs text-blue-400">
            Designed & Developed with passion for digital content
          </p>
        </motion.div>
      </div>
    </section>
  );
}