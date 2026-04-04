import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowLeft } from 'lucide-react';
import Toast from './Toast';

export default function BehaviorSorting({ category, behaviors, onComplete, onBack, currentCatIndex, totalCats }) {
  const [phase, setPhase] = useState(0); // 0 = High, 1 = Medium
  const [selections, setSelections] = useState([]);
  const [showToast, setShowToast] = useState(false);
  
  const [results, setResults] = useState({ high: [], medium: [], low: [] });

  // During phase 0, show all. During phase 1, hide high.
  const pool = useMemo(() => {
    if (phase === 0) return behaviors;
    return behaviors.filter(b => !results.high.includes(b));
  }, [phase, behaviors, results]);

  const toggleSelection = (behavior) => {
    if (selections.includes(behavior)) {
      setSelections(selections.filter(c => c !== behavior));
      setShowToast(false);
    } else {
      if (selections.length < 5) {
        const newSelections = [...selections, behavior];
        setSelections(newSelections);
        if (newSelections.length === 5) {
          setShowToast(true);
        }
      }
    }
  };

  const handleNext = () => {
    if (selections.length < 1 || selections.length > 5) return;
    setShowToast(false);

    if (phase === 0) {
      setResults({ ...results, high: selections });
      setSelections([]);
      setPhase(1);
    } else if (phase === 1) {
      const finalResults = {
        ...results,
        medium: selections,
        low: pool.filter(b => !selections.includes(b))
      };
      setResults(finalResults);
      setSelections([]);
      onComplete(finalResults);
    }
  };

  const leftCount = 5 - selections.length;
  
  return (
    <div className="card" style={{ position: 'relative' }}>
      <button 
        onClick={onBack} 
        style={{ position: 'absolute', top: '-40px', left: 0, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}
      >
        <ArrowLeft size={16} /> Back
      </button>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Category {currentCatIndex + 1} of {totalCats}
        </div>
        <h2 className="title" style={{ marginTop: '0.5rem' }}>{category}</h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem',  background: phase === 0 ? 'rgba(139, 92, 246, 0.1)' : 'rgba(245, 158, 11, 0.1)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
        <div>
          <h3 style={{ color: phase === 0 ? '#8B5CF6' : '#F59E0B', margin: 0 }}>
            {phase === 0 ? "Select 1 to 5 MOST IMPORTANT Behaviors" : "Select 1 to 5 MODERATELY IMPORTANT Behaviors"}
          </h3>
        </div>
        <div style={{ fontWeight: 'bold', color: phase === 0 ? '#8B5CF6' : '#F59E0B' }}>
          {leftCount} remaining
        </div>
      </div>

      <div className="pills-grid">
        <AnimatePresence>
          {pool.map((bh) => {
            const isSelected = selections.includes(bh);
            const isDisabled = !isSelected && selections.length >= 5;

            return (
              <motion.button
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={bh}
                className={`pill-button ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                onClick={() => toggleSelection(bh)}
                disabled={isDisabled && !isSelected}
                whileTap={{ scale: isDisabled ? 1 : 0.98 }}
              >
                <div style={{ flex: 1, lineHeight: '1.4', fontSize: '0.9rem' }}>{bh}</div>
                <div className="indicator">
                  {isSelected && <Check size={14} color="white" />}
                </div>
              </motion.button>
            )
          })}
        </AnimatePresence>
      </div>

      <div className="flex-between">
        <div className="text-muted" style={{ fontSize: '0.875rem' }}>
           Part {phase + 1} of 2
        </div>
        <button 
          className="btn" 
          onClick={handleNext} 
          disabled={selections.length === 0}
        >
          Confirm & Continue
        </button>
      </div>

      <Toast 
        show={showToast} 
        message="Click Confirm and Continue or reselect your choices" 
        onClear={() => setShowToast(false)} 
      />
    </div>
  );
}
