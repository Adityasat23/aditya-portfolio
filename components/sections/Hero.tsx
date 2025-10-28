'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Play, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import CountUp from '@/components/CountUp';
import { type ComponentType } from 'react';

const CountUpAny = CountUp as unknown as ComponentType<any>;

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background text-foreground">
      <div className="section-container relative z-10" id="main">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <p className="mb-3 font-medium text-blue-500">{personalInfo.title}</p>
            <h1 className="hero-title font-bold mb-3">Multimedia Video Editor & Designer</h1>
            <p className="hero-sub mb-6 max-w-xl text-muted-foreground">
              Editing, Motion, 3D, dan Social Content. Tools: Adobe Suite, CapCut, Blender, Unreal. Fokus pada growth & engagement.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-white font-medium hover:shadow-lg ring-brand focus-visible:ring-2">
                <Mail size={18}/> Contact Me
              </a>
              <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 rounded-full border px-6 py-3 font-medium hover:bg-surface-2">
                <Play size={18}/> View Resume
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="relative hidden md:block">
            <div className="relative h-[520px] w-full overflow-hidden rounded-3xl border border-white/10 bg-surface-1 p-6 backdrop-blur-xl">
              <img src={personalInfo.profileImage} alt={personalInfo.name} className="absolute inset-0 h-full w-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent rounded-3xl" />
              <div className="absolute bottom-6 left-6 right-6 z-10 grid grid-cols-2 gap-4">
                {[
                  { value: 21, decimal: 7, suffix: 'M+', label: 'Total Views' },
                  { value: 80, suffix: '+', label: 'Brands' },
                  { value: 5, suffix: 'M+', label: 'Social Reach' },
                  { value: 427, suffix: '%', label: 'Growth' },
                ].map((s, i)=>(
                  <div key={i} className="rounded-2xl border border-white/10 bg-surface-2 p-4 text-center">
                    <p className="gradient-text mb-1 text-3xl font-bold">
                      <CountUpAny from={0} to={s.decimal?parseFloat(`${s.value}.${s.decimal}`):s.value} separator="," direction="up" duration={2} />{s.suffix}
                    </p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
          initial={{ opacity:0, y:-20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:1.2, duration:1, repeat:Infinity, repeatType:'reverse' }}>
          <ArrowDown className="text-blue-400" size={24}/>
        </motion.div>
      </div>
    </section>
  );
}
