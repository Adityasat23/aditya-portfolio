'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
}

interface CircularGalleryProps {
  items: GalleryItem[];
  category: string;
}

export default function CircularGallery({ items, category }: CircularGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const angleStep = (2 * Math.PI) / items.length;
  const radius = 250;

  return (
    <>
      <div className="relative w-full h-[600px] flex items-center justify-center">
        {/* Center circle */}
        <div className="absolute w-32 h-32 rounded-full glass-card-elevated flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm font-semibold text-white">{category}</p>
            <p className="text-xs text-gray-400">{items.length} items</p>
          </div>
        </div>

        {/* Gallery items in circle */}
        {items.map((item, index) => {
          const angle = index * angleStep - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={item.id}
              className="absolute cursor-pointer"
              style={{
                left: '50%',
                top: '50%',
              }}
              initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
              animate={{
                x: x,
                y: y,
                scale: hoveredIndex === index ? 1.1 : 1,
                opacity: 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.15, zIndex: 10 }}
              onClick={() => setSelectedItem(item)}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative w-28 h-28 glass-card rounded-2xl overflow-hidden border-2 border-white/20">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2"
                  >
                    <p className="text-xs font-semibold text-white truncate">
                      {item.title}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card-elevated rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              >
                <X size={20} className="text-white" />
              </button>

              {/* Image */}
              <div className="relative w-full h-96 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedItem.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      {selectedItem.category}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedItem.description}
                </p>

                {selectedItem.link && (
                  <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  >
                    View Full Project
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}