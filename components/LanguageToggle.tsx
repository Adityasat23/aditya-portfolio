'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  language: 'en' | 'id';
  onToggle: (lang: 'en' | 'id') => void;
}

export default function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-2 glass-card rounded-full px-3 py-2">
      <Globe size={16} className="text-blue-400" />
      
      <div className="flex items-center gap-1 relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={false}
          animate={{
            x: language === 'en' ? 0 : 28,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ width: '28px', height: '28px' }}
        />
        
        <motion.button
          onClick={() => onToggle('en')}
          className={`relative z-10 px-2 py-1 rounded-full text-xs font-semibold transition-colors ${
            language === 'en' ? 'text-white' : 'text-gray-400'
          }`}
          whileTap={{ scale: 0.95 }}
        >
          EN
        </motion.button>

        <motion.button
          onClick={() => onToggle('id')}
          className={`relative z-10 px-2 py-1 rounded-full text-xs font-semibold transition-colors ${
            language === 'id' ? 'text-white' : 'text-gray-400'
          }`}
          whileTap={{ scale: 0.95 }}
        >
          ID
        </motion.button>
      </div>
    </div>
  );
}