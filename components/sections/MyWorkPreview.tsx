'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Video, Sparkles, Camera, Code, Palette, ArrowRight } from 'lucide-react';
import CircularGallery from '@/components/CircularGallery';
import { galleryData } from '@/lib/galleryData';

const categories = [
  {
    id: 'video-editing',
    name: 'Video Editing',
    icon: Video,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'vfx-3d',
    name: 'VFX & 3D',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'photography',
    name: 'Photography',
    icon: Camera,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'it-projects',
    name: 'IT Projects',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    icon: Palette,
    color: 'from-yellow-500 to-orange-500',
  },
];

export default function MyWorkPreview() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  return (
    <section id="my-work-preview" className="relative bg-black py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="gradient-text mb-4 text-4xl font-bold md:text-5xl">
            My Works
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Explore my creative journey across different disciplines
          </p>
        </motion.div>

        {/* Category Selector */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                rounded-2xl border border-white/20 bg-black/40 p-6 text-center backdrop-blur-xl transition-all
                ${selectedCategory === category.id ? 'ring-2 ring-blue-500' : 'hover:bg-white/5'}
              `}
            >
              <div
                className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color}`}
              >
                <category.icon size={28} className="text-white" />
              </div>
              <h3 className="text-sm font-semibold text-white">{category.name}</h3>
            </motion.button>
          ))}
        </div>

        {/* Circular Gallery */}
        <div className="mb-12" style={{ height: '600px' }}>
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/my-work"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-blue-500/50"
          >
            View All Works
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}