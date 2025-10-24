'use client';

import { useState, type ComponentType } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import BackToTop from '@/components/BackToTop';

// ⬇️ perbaiki path ke lokasi yang benar
import CircularGallery from '@/components/CircularGallery';

// (opsional; hanya jika kamu memang punya file ini)
// import GradualBlur from '@/components/ui/GradualBlur';
// import PrismBackground from '@/components/ui/PrismBackground';

import { galleryData } from '@/lib/galleryData';
import { Video, Sparkles, Camera, Code, Palette, ArrowRight } from 'lucide-react';

type AnyRecord = Record<string, any>;
const CircularGalleryAny = CircularGallery as unknown as ComponentType<AnyRecord>;

const categories = [
  { id: 'video-editing',  name: 'Video Editing',  icon: Video,    color: 'from-blue-500 to-cyan-500' },
  { id: 'vfx-3d',         name: 'VFX & 3D',       icon: Sparkles, color: 'from-purple-500 to-pink-500' },
  { id: 'photography',    name: 'Photography',    icon: Camera,   color: 'from-orange-500 to-red-500' },
  { id: 'it-projects',    name: 'IT Projects',    icon: Code,     color: 'from-green-500 to-emerald-500' },
  { id: 'graphic-design', name: 'Graphic Design', icon: Palette,  color: 'from-yellow-500 to-orange-500' },
];

export default function MyWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id);

  const items: any[] = Array.isArray(galleryData)
    ? (galleryData as any[]).filter((x: any) => x.category === selectedCategory)
    : ((galleryData as Record<string, any[]>)[selectedCategory] ?? []);

  return (
    <>
      <Navigation />
      <main className="relative bg-black py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h1 className="gradient-text mb-4 text-4xl font-bold md:text-5xl">All Works</h1>
            <p className="mx-auto max-w-2xl text-gray-400">
              Explore my creative journey across different disciplines
            </p>
          </motion.div>

          {/* Category tabs */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-5">
            {categories.map((category, idx) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  rounded-2xl border border-white/20 bg-black/40 p-6 text-center backdrop-blur-xl transition-all
                  ${selectedCategory === category.id ? 'ring-2 ring-blue-500' : 'hover:bg-white/5'}
                `}
              >
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color}`}>
                  <category.icon size={28} className="text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white">{category.name}</h3>
              </motion.button>
            ))}
          </div>

          {/* Gallery */}
          <div className="mb-12" style={{ height: '600px' }}>
            <CircularGalleryAny
              items={items}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-blue-500/50"
            >
              Back Home
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </main>
      <BackToTop />
    </>
  );
}
