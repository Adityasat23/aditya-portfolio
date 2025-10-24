'use client';

import { motion } from 'framer-motion';
import { personalInfo, education } from '@/lib/data';
import Lanyard from '@/components/Lanyard';
import CountUp from '@/components/CountUp';
import SpotlightCard from '@/components/SpotlightCard';
import StarBorder from '@/components/StarBorder';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: 21, decimal: 7, suffix: 'M+', label: 'Total Views' },
  { icon: Users, value: 80, suffix: '+', label: 'Brands' },
  { icon: Award, value: 5, suffix: 'M+', label: 'Social Reach' },
  { icon: Zap, value: 427, suffix: '%', label: 'Growth' },
];

export default function About() {
  return (
    <section id="about" className="mesh-gradient relative overflow-hidden py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="gradient-text mb-4 text-4xl font-bold md:text-5xl">
            About Me
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Bringing Quality with Quantity at the same time
          </p>
        </motion.div>

        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          {/* Left: Lanyard Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </motion.div>

          {/* Right: Bio & Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 text-3xl font-bold">
              Hi, I&apos;m <span className="gradient-text">Aditya Satria Pratama</span>
            </h3>
            <div className="mb-8 space-y-4 leading-relaxed text-gray-300">
              <p>
                I&apos;m a <strong className="text-white">Digital Creative Specialist</strong> with
                a proven track record of creating high-impact content for influencers and viral
                campaigns.
              </p>
              <p>
                My journey spans from working with <strong className="text-white">major brands like
                Indofood CBP, Google Indonesia</strong>, to managing social media strategies for
                thousands of students.
              </p>
              <p className="gradient-text font-semibold">
                &quot;Where Creativity Meets Critical Thinking&quot;
              </p>
            </div>

            <div className="mb-8">
              <h4 className="mb-4 text-xl font-semibold text-white">Education</h4>
              {education.map((edu, index) => (
                <div key={index} className="mb-4 border-l-2 border-blue-500 pl-4">
                  <h5 className="font-semibold text-white">{edu.degree}</h5>
                  <p className="text-sm text-purple-400">{edu.institution}</p>
                  <p className="text-sm text-gray-400">{edu.period}</p>
                  {edu.gpa && (
                    <p className="text-sm font-medium text-blue-400">GPA: {edu.gpa}</p>
                  )}
                </div>
              ))}
            </div>

            <SpotlightCard className="rounded-2xl border border-white/20 bg-black/40 p-6 backdrop-blur-xl">
              <h4 className="mb-4 text-lg font-semibold text-white">Let&apos;s Connect</h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="block text-sm text-gray-300 transition-colors hover:text-blue-400"
                >
                  📧 {personalInfo.email}
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="block text-sm text-gray-300 transition-colors hover:text-blue-400"
                >
                  📱 {personalInfo.phone}
                </a>
                <p className="text-sm text-gray-300">📍 {personalInfo.location}</p>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Stats Cards dengan StarBorder & SpotlightCard */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StarBorder key={index} as="div" color="cyan" speed="8s">
              <SpotlightCard>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl bg-black/60 p-6 text-center backdrop-blur-xl"
                >
                  <stat.icon size={32} className="mx-auto mb-4 text-blue-400" />
                  <p className="gradient-text mb-2 text-2xl font-bold">
                    <CountUp
                      from={0}
                      to={stat.decimal ? parseFloat(`${stat.value}.${stat.decimal}`) : stat.value}
                      separator=","
                      direction="up"
                      duration={2}
                    />
                    {stat.suffix}
                  </p>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </motion.div>
              </SpotlightCard>
            </StarBorder>
          ))}
        </div>
      </div>
    </section>
  );
}