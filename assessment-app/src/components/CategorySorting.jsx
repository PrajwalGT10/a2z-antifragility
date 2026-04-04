import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import Toast from './Toast';

export default function CategorySorting({ categories, ranking, onComplete }) {
  const [phase, setPhase] = useState(0); // 0 = Very High, 1 = High, 2 = Medium

  // Internal State
  const [pool, setPool] = useState([]);
  const [selections, setSelections] = useState([]);
  const [showToast, setShowToast] = useState(false);

  // Result bins
  const [results, setResults] = useState({
    veryHigh: ranking.veryHigh || [],
    high: ranking.high || [],
    medium: ranking.medium || [],
    low: ranking.low || [],
  });

  useEffect(() => {
    // Show all available categories for the current phase from the start
    const alreadyRanked = [
      ...results.veryHigh,
      ...results.high,
      ...results.medium,
      ...results.low
    ];
    const newPool = categories.filter(c => !alreadyRanked.includes(c));
    setPool(newPool);
  }, [categories, phase, results]);

  const toggleSelection = (category) => {
    if (selections.includes(category)) {
      setSelections(selections.filter(c => c !== category));
      setShowToast(false);
    } else {
      if (selections.length < 5) {
        const newSelections = [...selections, category];
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
      setResults({ ...results, veryHigh: selections });
      setSelections([]);
      setPhase(1);
    } else if (phase === 1) {
      setResults({ ...results, high: selections });
      setSelections([]);
      setPhase(2);
    } else if (phase === 2) {
      const finalResults = {
        ...results,
        medium: selections,
        low: pool.filter(c => !selections.includes(c))
      };
      setResults(finalResults);
      setSelections([]);
      onComplete(finalResults);
    }
  };

  const getPhaseConfig = () => {
    switch(phase) {
      case 0: return {
        title: "Very High Priority", 
        desc: "Please select 1 to 5 MOST IMPORTANT categories from the list below.",
        color: 'var(--primary)',
        bg: 'rgba(79, 70, 229, 0.1)'
      };
      case 1: return {
        title: "High Priority", 
        desc: "From the remaining options, select 1 to 5 HIGHLY IMPORTANT categories.",
        color: '#8B5CF6',
        bg: 'rgba(139, 92, 246, 0.1)'
      };
      case 2: return {
        title: "Medium Priority", 
        desc: "Finally, select 1 to 5 MODERATELY IMPORTANT categories.",
        color: '#F59E0B',
        bg: 'rgba(245, 158, 11, 0.1)'
      };
      default: return {};
    }
  };

  const config = getPhaseConfig();
  const leftCount = 5 - selections.length;

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <h2 className="title" style={{ color: config.color }}>{config.title}</h2>
          <p className="subtitle">{config.desc} ({pool.length} total options)</p>
        </div>
        <div style={{ background: config.bg, color: config.color, padding: '0.5rem 1rem', borderRadius: '999px', fontWeight: 'bold' }}>
          {leftCount} remaining
        </div>
      </div>

      <div className="pills-grid">
        <AnimatePresence>
          {pool.map((cat) => {
            const isSelected = selections.includes(cat);
            const isDisabled = !isSelected && selections.length >= 5;

            return (
              <motion.button
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={cat}
                className={`pill-button ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                onClick={() => toggleSelection(cat)}
                disabled={isDisabled && !isSelected}
                whileTap={{ scale: isDisabled ? 1 : 0.98 }}
              >
                <div style={{ flex: 1 }}>{cat}</div>
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
           Part {phase + 1} of 3
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
