'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // OPTION 1: Using FormSubmit (No backend needed)
      const response = await fetch('https://formsubmit.co/ajax/adityasatriapwork@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject}`,
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      style={{
        background: 'linear-gradient(to bottom right, #1F2747, #0A0E27)',
        padding: '2rem',
        borderRadius: '1rem',
        border: '1px solid rgba(74, 144, 226, 0.2)',
      }}
    >
      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
        Send Me a Message
      </h3>

      {/* Name */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: '500' }}>
          Name *
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(74, 144, 226, 0.3)',
            color: 'white',
            fontSize: '1rem',
            outline: 'none',
            transition: 'all 0.3s'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = '#4A90E2'}
          onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(74, 144, 226, 0.3)'}
        />
      </div>

      {/* Email */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: '500' }}>
          Email *
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(74, 144, 226, 0.3)',
            color: 'white',
            fontSize: '1rem',
            outline: 'none',
            transition: 'all 0.3s'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = '#4A90E2'}
          onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(74, 144, 226, 0.3)'}
        />
      </div>

      {/* Subject */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: '500' }}>
          Subject *
        </label>
        <input
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(74, 144, 226, 0.3)',
            color: 'white',
            fontSize: '1rem',
            outline: 'none',
            transition: 'all 0.3s'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = '#4A90E2'}
          onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(74, 144, 226, 0.3)'}
        />
      </div>

      {/* Message */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: '500' }}>
          Message *
        </label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(74, 144, 226, 0.3)',
            color: 'white',
            fontSize: '1rem',
            outline: 'none',
            resize: 'vertical',
            transition: 'all 0.3s',
            fontFamily: 'inherit'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = '#4A90E2'}
          onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(74, 144, 226, 0.3)'}
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
        whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
        style={{
          width: '100%',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          background: status === 'success' ? '#10B981' : status === 'error' ? '#EF4444' : 'linear-gradient(to right, #4A90E2, #7B68EE)',
          color: 'white',
          fontSize: '1rem',
          fontWeight: '600',
          border: 'none',
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          transition: 'all 0.3s',
          opacity: status === 'sending' ? 0.7 : 1
        }}
      >
        {status === 'sending' && 'Sending...'}
        {status === 'success' && <><Check size={20} /> Message Sent!</>}
        {status === 'error' && <><AlertCircle size={20} /> Failed to send</>}
        {status === 'idle' && <><Send size={20} /> Send Message</>}
      </motion.button>

      {status === 'success' && (
        <p style={{ marginTop: '1rem', color: '#10B981', fontSize: '0.875rem', textAlign: 'center' }}>
          Thank you! I&apos;ll get back to you soon.
        </p>
      )}

      {status === 'error' && (
        <p style={{ marginTop: '1rem', color: '#EF4444', fontSize: '0.875rem', textAlign: 'center' }}>
          Something went wrong. Please email me directly at adityasatriapwork@gmail.com
        </p>
      )}
    </motion.form>
  );
}