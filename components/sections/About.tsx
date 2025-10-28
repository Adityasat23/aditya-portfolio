'use client';

import { motion } from 'framer-motion';
import { type ComponentType } from 'react';
import dynamic from 'next/dynamic';
import { personalInfo, education } from '@/lib/data';
import CountUp from '@/components/CountUp';
import SpotlightCard from '@/components/SpotlightCard';
import StarBorder from '@/components/StarBorder';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

// ⬇️ INI penting: named import dari file hook
import { useIsMobile } from '@/components/useClientFlags';

const CountUpAny = CountUp as unknown as ComponentType<any>;
const Lanyard = dynamic(() => import('@/components/Lanyard'), { ssr: false, loading: () => null });

const stats = [
  { icon: TrendingUp, value: 21, decimal: 7, suffix: 'M+', label: 'Total Views' },
  { icon: Users, value: 80, suffix: '+', label: 'Brands' },
  { icon: Award, value: 5, suffix: 'M+', label: 'Social Reach' },
  { icon: Zap, value: 427, suffix: '%', label: 'Growth' },
];

export default function About() {
  const isMobile = useIsMobile(); // ✅ tidak undefined lagi

  return (
    <section id="about" className="relative overflow-hidden py-20 bg-background text-foreground">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <h2 className="gradient-text mb-4 text-4xl font-bold md:text-5xl">About Me</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">Bringing Quality with Quantity at the same time</p>
        </motion.div>

        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          {!isMobile && (
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
            <h3 className="mb-6 text-3xl font-bold">
              Hi, I&apos;m <span className="gradient-text">Aditya Satria Pratama</span>
            </h3>

            <div className="mb-8 space-y-4 leading-relaxed text-muted-foreground">
              <p>I&apos;m a <strong className="text-foreground">Digital Creative Specialist</strong> with a proven track record of creating high-impact content.</p>
              <p>Worked with <strong className="text-foreground">major brands</strong> like Indofood CBP, Google Indonesia, and more.</p>
              <p className="gradient-text font-semibold">&quot;Where Creativity Meets Critical Thinking&quot;</p>
            </div>

            <div className="mb-8">
              <h4 className="mb-4 text-xl font-semibold">Education</h4>
              {education.map((edu, index) => (
                <div key={index} className="mb-4 border-l-2 border-blue-500 pl-4">
                  <h5 className="font-semibold">{edu.degree}</h5>
                  <p className="text-sm text-purple-400">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                  {edu.gpa && <p className="text-sm font-medium text-blue-400">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>

            <SpotlightCard className="rounded-2xl border border-white/20 bg-surface-1 p-6 backdrop-blur-xl">
              <h4 className="mb-4 text-lg font-semibold">Let&apos;s Connect</h4>
              <div className="space-y-3">
                <a href={`mailto:${personalInfo.email}`} className="block text-sm transition-colors hover:text-blue-400">📧 {personalInfo.email}</a>
                <a href={`tel:${personalInfo.phone}`} className="block text-sm transition-colors hover:text-blue-400">📱 {personalInfo.phone}</a>
                <p className="text-sm">{personalInfo.location}</p>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StarBorder key={index} color="cyan" speed="8s">
              <SpotlightCard>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rounded-2xl bg-surface-2 p-6 text-center backdrop-blur-xl">
                  <stat.icon size={32} className="mx-auto mb-4 text-blue-400" />
                  <p className="gradient-text mb-2 text-2xl font-bold">
                    <CountUpAny from={0} to={stat.decimal ? parseFloat(`${stat.value}.${stat.decimal}`) : stat.value} separator="," direction="up" duration={2} />{stat.suffix}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              </SpotlightCard>
            </StarBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
