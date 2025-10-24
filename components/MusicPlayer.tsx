'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music, X } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Buat audio baru dengan musik lokal atau dari URL
    audioRef.current = new Audio('/music/background.mp3'); // Taruh file musik di folder public/music/
    audioRef.current.loop = true;
    audioRef.current.volume = volume / 100;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.log('Audio play failed:', err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    
    if (newVolume === 0 && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else if (newVolume > 0 && !isPlaying) {
      audioRef.current?.play().catch(err => console.log('Audio play failed:', err));
      setIsPlaying(true);
    }
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-72 rounded-2xl border border-white/20 bg-black/80 p-6 backdrop-blur-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                <Music size={16} className="text-blue-400" />
                Background Music
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 hover:bg-white/10 transition-colors"
              >
                <X size={16} className="text-white" />
              </button>
            </div>

            {/* Volume Slider */}
            <div className="space-y-4">
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  style={{ width: `${volume}%` }}
                  animate={{ width: `${volume}%` }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="absolute inset-0 w-full opacity-0 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <VolumeX size={14} />
                  <span>{volume}%</span>
                  <Volume2 size={14} />
                </div>
                <span>{isPlaying ? 'Playing' : 'Paused'}</span>
              </div>

              <p className="text-xs text-gray-500 text-center">
                Double click button to play/pause
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onDoubleClick={togglePlay}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/80 backdrop-blur-xl hover:scale-110 transition-all"
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? (
          <Volume2 size={24} className="text-blue-400" />
        ) : (
          <VolumeX size={24} className="text-gray-400" />
        )}
      </motion.button>
    </motion.div>
  );
}