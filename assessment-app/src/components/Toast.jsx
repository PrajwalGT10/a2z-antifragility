import { motion, AnimatePresence } from 'framer-motion';
import { Info, X } from 'lucide-react';

export default function Toast({ message, show, onClear }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            width: '90%',
            maxWidth: '500px',
          }}
        >
          <div style={{
            background: 'var(--primary)',
            color: 'white',
            padding: '1rem 1.25rem',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.4), 0 8px 10px -6px rgba(79, 70, 229, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <Info size={20} style={{ flexShrink: 0 }} />
            <div style={{ flex: 1, fontSize: '0.95rem', fontWeight: '500' }}>
              {message}
            </div>
            <button 
              onClick={onClear}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)')}
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
