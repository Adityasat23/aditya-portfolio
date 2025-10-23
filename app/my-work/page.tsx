'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Video, Sparkles, Camera, Code, Palette } from 'lucide-react';
import Navigation from '@/components/Navigation';
import BackToTop from '@/components/BackToTop';
import CircularGallery from '@/components/ui/CircularGallery';
import GradualBlur from '@/components/ui/GradualBlur';
import PrismBackground from '@/components/ui/PrismBackground';
import { galleryData } from '@/lib/galleryData';

const categories = [
  {
    id: 'video-editing',
    name: 'Video Editing',
    nameId: 'Video Editing',
    icon: Video,
    color: 'from-blue-500 to-cyan-500',
    description: 'Professional video editing for brands and influencers'
  },
  {
    id: 'vfx-3d',
    name: 'VFX & 3D',
    nameId: 'VFX & 3D',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
    description: 'Visual effects and 3D motion graphics'
  },
  {
    id: 'photography',
    name: 'Photography',
    nameId: 'Fotografi',
    icon: Camera,
    color: 'from-orange-500 to-red-500',
    description: 'Event and product photography'
  },
  {
    id: 'it-projects',
    name: 'IT Projects',
    nameId: 'Proyek IT',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    description: 'Web development and software projects'
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    nameId: 'Desain Grafis',
    icon: Palette,
    color: 'from-yellow-500 to-orange-500',
    description: 'Brand identity and visual design'
  },
];

export default function MyWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const currentCategory = categories.find(cat => cat.id === selectedCategory);
  const currentItems = galleryData[selectedCategory as keyof typeof galleryData] || [];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black text-white pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <PrismBackground />
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <Link 
              href="/#projects"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 text-sm font-medium"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <GradualBlur
                  text="My Work"
                  className="gradient-text"
                />
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                Explore my creative journey across video production, design, and development
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Selector */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    glass-card rounded-2xl p-6 text-center transition-all duration-300
                    ${selectedCategory === category.id ? 'ring-2 ring-blue-500 bg-white/10' : 'hover:bg-white/5'}
                  `}
                >
                  <div className={`
                    w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} 
                    flex items-center justify-center
                  `}>
                    <category.icon size={28} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-xs text-gray-400 hidden md:block">
                    {currentItems.length} items
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 px-4 min-h-screen">
          <div className="max-w-7xl mx-auto">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  {currentCategory && (
                    <>
                      <div className={`
                        w-12 h-12 rounded-xl bg-gradient-to-br ${currentCategory.color} 
                        flex items-center justify-center
                      `}>
                        <currentCategory.icon size={24} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold gradient-text">
                        {currentCategory.name}
                      </h2>
                    </>
                  )}
                </div>
                <p className="text-gray-400">
                  {currentCategory?.description}
                </p>
              </div>

              {/* Circular Gallery */}
              <CircularGallery 
                items={currentItems} 
                category={currentCategory?.name || ''} 
              />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Total Projects', value: Object.values(galleryData).flat().length },
                { label: 'Categories', value: categories.length },
                { label: 'Years Experience', value: '5+' },
                { label: 'Happy Clients', value: '80+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <BackToTop />
    </>
  );
}