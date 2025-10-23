'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import CountUp from '@/components/ui/CountUp';
import PrismBackground from '@/components/ui/PrismBackground';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <PrismBackground />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-blue-400 font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {personalInfo.title}
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {personalInfo.name.split(' ').slice(0, 2).join(' ')}
              <br />
              <span className="gradient-text">{personalInfo.name.split(' ').slice(-1)}</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl font-bold text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.p
              className="text-gray-400 mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2"
              >
                View My Work
                <ArrowDown size={18} />
              </a>
              <a
                href={`https://youtube.com/watch?v=${personalInfo.showreel}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full border-2 border-blue-500 text-blue-400 font-medium hover:bg-blue-500 hover:text-white transition-all flex items-center gap-2"
              >
                <Play size={18} />
                Watch Showreel
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats with CountUp */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full h-[500px] rounded-3xl glass-card border border-white/20 overflow-hidden p-8 flex flex-col justify-end">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Stats Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-center glass-card rounded-2xl p-4"
                >
                  <p className="text-3xl font-bold gradient-text mb-1">
                    <CountUp end={21.7} duration={2.5} suffix="M+" />
                  </p>
                  <p className="text-xs text-gray-400">Total Views Generated</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="text-center glass-card rounded-2xl p-4"
                >
                  <p className="text-3xl font-bold gradient-text mb-1">
                    <CountUp end={80} duration={2.5} suffix="+" />
                  </p>
                  <p className="text-xs text-gray-400">Brands Collaborated</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="text-center glass-card rounded-2xl p-4"
                >
                  <p className="text-3xl font-bold gradient-text mb-1">
                    <CountUp end={5} duration={2.5} suffix="M+" />
                  </p>
                  <p className="text-xs text-gray-400">Social Media Reach</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="text-center glass-card rounded-2xl p-4"
                >
                  <p className="text-3xl font-bold gradient-text mb-1">
                    <CountUp end={427} duration={2.5} suffix="%" />
                  </p>
                  <p className="text-xs text-gray-400">Growth Achieved</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        >
          <ArrowDown className="text-blue-400" size={24} />
        </motion.div>
      </div>
    </section>
  );
}