'use client';

import { motion } from 'framer-motion';

interface LanyardProps {
  image: string;
  name: string;
  title: string;
  className?: string;
}

export default function Lanyard({ image, name, title, className = '' }: LanyardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative ${className}`}
    >
      {/* Lanyard string */}
      <div className="flex justify-center mb-4">
        <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
      </div>

      {/* ID Card */}
      <motion.div
        whileHover={{ y: -10, rotateY: 5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="glass-card-elevated rounded-3xl p-6 max-w-sm mx-auto"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Header stripe */}
        <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-6" />

        {/* Profile Image */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50" />
          <img
            src={image}
            alt={name}
            className="relative w-32 h-32 mx-auto rounded-2xl object-cover border-4 border-white/20"
          />
        </div>

        {/* Info */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-sm text-blue-400 font-medium">{title}</p>
          
          {/* Barcode-style decoration */}
          <div className="flex justify-center gap-1 pt-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-white/20 rounded-full"
                style={{ height: `${Math.random() * 20 + 10}px` }}
              />
            ))}
          </div>
        </div>

        {/* Badge */}
        <div className="absolute top-4 right-4">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
        </div>
      </motion.div>
    </motion.div>
  );
}