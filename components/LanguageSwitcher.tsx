'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem',
      borderRadius: '0.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(74, 144, 226, 0.2)'
    }}>
      <Globe size={16} style={{ color: '#4A90E2' }} />
      
      <motion.button
        onClick={() => setLanguage('en')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: '0.25rem 0.75rem',
          borderRadius: '0.25rem',
          fontSize: '0.75rem',
          fontWeight: '600',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: language === 'en' ? '#4A90E2' : 'transparent',
          color: language === 'en' ? 'white' : '#9ca3af',
          transition: 'all 0.2s'
        }}
      >
        EN
      </motion.button>

      <motion.button
        onClick={() => setLanguage('id')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: '0.25rem 0.75rem',
          borderRadius: '0.25rem',
          fontSize: '0.75rem',
          fontWeight: '600',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: language === 'id' ? '#4A90E2' : 'transparent',
          color: language === 'id' ? 'white' : '#9ca3af',
          transition: 'all 0.2s'
        }}
      >
        ID
      </motion.button>
    </div>
  );
}