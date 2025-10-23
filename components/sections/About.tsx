'use client';

import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Zap } from 'lucide-react';
import { personalInfo, education } from '@/lib/data';
import Lanyard from '@/components/ui/Lanyard';
import CountUp from '@/components/ui/CountUp';

const stats = [
  { icon: TrendingUp, value: 21.7, suffix: 'M+', label: "Total Views Generated" },
  { icon: Users, value: 80, suffix: '+', label: "Brands Collaborated" },
  { icon: Award, value: 5, suffix: 'M+', label: "Social Media Reach" },
  { icon: Zap, value: 427, suffix: '%', label: "Growth Achieved" },
];

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
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
          {/* Left: Lanyard Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Lanyard
              image={personalInfo.profileImage}
              name={personalInfo.name}
              title={personalInfo.title}
            />
          </motion.div>

          {/* Right: Bio & Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              Hi, I&apos;m <span className="gradient-text">Aditya Satria Pratama</span>
            </h3>
            <div style={{ color: '#d1d5db', lineHeight: '1.75', marginBottom: '2rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                I&apos;m a <strong style={{ color: 'white' }}>Digital Creative Specialist</strong> with a proven track record of creating high-impact content for influencers and viral campaigns. I combine creative production expertise with performance analytics to deliver content that drives measurable business results.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                My journey spans from working with <strong style={{ color: 'white' }}>major brands like Indofood CBP, Google Indonesia</strong>, to managing social media strategies for thousands of students.
              </p>
              <p>
                I believe in: <em className="gradient-text font-semibold">&quot;Where Creativity Meets Critical Thinking&quot;</em> — every creative decision is backed by data and strategic thinking.
              </p>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>
                Education
              </h4>
              {education.map((edu, index) => (
                <div key={index} className="mb-4 pl-4 border-l-2 border-blue-500">
                  <h5 style={{ fontWeight: '600', color: 'white' }}>{edu.degree}</h5>
                  <p style={{ color: '#BF5AF2', fontSize: '0.875rem' }}>{edu.institution}</p>
                  <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{edu.period}</p>
                  {edu.gpa && (
                    <p style={{ color: '#0A84FF', fontSize: '0.875rem', fontWeight: '500' }}>GPA: {edu.gpa}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6"
            >
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>
                Let&apos;s Connect
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  📧 {personalInfo.email}
                </a>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
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

        {/* Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 text-center hover-lift"
            >
              <stat.icon size={32} className="mx-auto mb-4 text-blue-400" />
              <p className="text-2xl font-bold text-white mb-1">
                <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}