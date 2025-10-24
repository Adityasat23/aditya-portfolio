'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import CountUp from '@/components/CountUp';
import Prism from '@/components/Prism';

const CountUpAny = CountUp as unknown as React.ComponentType<any>;

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Prism animationType="rotate" timeScale={0.5} height={3.5} baseWidth={5.5} scale={3.6} hueShift={0} colorFrequency={1} noise={0.5} glow={1} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.p className="mb-4 font-medium text-blue-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              {personalInfo.title}
            </motion.p>

            <motion.h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              {personalInfo.name.split(' ').slice(0, 2).join(' ')}
              <br />
              <span className="gradient-text">{personalInfo.name.split(' ').slice(-1)}</span>
            </motion.h1>

            <motion.p className="mb-6 text-xl font-bold text-gray-300 md:text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              {personalInfo.tagline}
            </motion.p>

            <motion.p className="mb-8 max-w-lg leading-relaxed text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              {personalInfo.description}
            </motion.p>

            <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <a href="#my-work-preview" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-blue-500/50">
                View My Work
                <ArrowDown size={18} />
              </a>
              <a href={`https://youtube.com/watch?v=${personalInfo.showreel}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border-2 border-blue-500 px-8 py-3 font-medium text-blue-400 transition-all hover:bg-blue-500 hover:text-white">
                <Play size={18} />
                Watch Showreel
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="relative hidden md:block">
            <div className="relative h-[600px] w-full overflow-hidden rounded-3xl border border-white/20 bg-black/40 p-8 backdrop-blur-xl">
              <div className="absolute inset-0">
                <img src={personalInfo.profileImage} alt={personalInfo.name} className="h-full w-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>

              <div className="absolute bottom-8 left-8 right-8 z-10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: 21, decimal: 7, suffix: 'M+', label: 'Total Views' },
                    { value: 80, suffix: '+',  label: 'Brands' },
                    { value: 5,  suffix: 'M+', label: 'Social Reach' },
                    { value: 427, suffix: '%', label: 'Growth' },
                  ].map((stat, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + index * 0.1 }} className="rounded-2xl border border-white/20 bg-black/40 p-4 text-center backdrop-blur-xl">
                      <p className="gradient-text mb-1 text-3xl font-bold">
                        <CountUpAny from={0} to={stat.decimal ? parseFloat(`${stat.value}.${stat.decimal}`) : stat.value} separator="," direction="up" duration={2} />
                        {stat.suffix}
                      </p>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}>
          <ArrowDown className="text-blue-400" size={24} />
        </motion.div>
      </div>
    </section>
  );
}
