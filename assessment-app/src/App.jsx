import { useState, useEffect } from 'react';
import UserDetails from './components/UserDetails';
import CategorySorting from './components/CategorySorting';
import BehaviorSorting from './components/BehaviorSorting';
import OpenFeedback from './components/OpenFeedback';
import Summary from './components/Summary';
import { motion, AnimatePresence } from 'framer-motion';
import { Save } from 'lucide-react';
import data from './data.json';
import './index.css';

const CATEGORIES = Object.keys(data);
const STORAGE_KEY = 'gym_assessment_state';

function App() {
  const loadState = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to load state", e);
    }
    return null;
  };

  const initialState = loadState();

  // Global State
  const [step, setStep] = useState(initialState?.step || 0);
  const [userDetails, setUserDetails] = useState(initialState?.userDetails || { firstName: '', lastName: '', email: '', phone: '' });
  const [categoryRanking, setCategoryRanking] = useState(initialState?.categoryRanking || { veryHigh: [], high: [], medium: [], low: [] });
  const [behaviorRanking, setBehaviorRanking] = useState(initialState?.behaviorRanking || {});
  const [openFeedback, setOpenFeedback] = useState(initialState?.openFeedback || { thoughts: '', additionalBehaviors: '', otherComments: '' });

  // Auto-save to localStorage
  useEffect(() => {
    // Only save if we haven't reached the final screen (we want to clear it on finish)
    if (step < 3 + CATEGORIES.length) {
      const stateToSave = { step, userDetails, categoryRanking, behaviorRanking, openFeedback };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    }
  }, [step, userDetails, categoryRanking, behaviorRanking]);

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep((s) => s + 1);
  };

  const prevStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep((s) => s - 1);
  };

  const handleManualSave = () => {
    alert("Progress auto-saved successfully! You may close this tab and resume later from this exact device/browser.");
  };

  const handleFinish = () => {
    // Remove local storage on final screen mount
    localStorage.removeItem(STORAGE_KEY);
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset the assessment? All current progress will be lost.")) {
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    }
  };

  const renderStep = () => {
    if (step === 0) {
      return (
        <UserDetails
          data={userDetails}
          onUpdate={setUserDetails}
          onNext={nextStep}
        />
      );
    }

    if (step === 1) {
      return (
        <CategorySorting
          categories={CATEGORIES}
          ranking={categoryRanking}
          onComplete={(newRanking) => {
            setCategoryRanking(newRanking);
            nextStep();
          }}
        />
      );
    }

    // Steps 2 to 19 are Behavior Sorting
    if (step >= 2 && step < 2 + CATEGORIES.length) {
      const orderedCategories = [
        ...categoryRanking.veryHigh,
        ...categoryRanking.high,
        ...categoryRanking.medium,
        ...categoryRanking.low
      ];
      
      const currentCatIndex = step - 2;
      const currentCategory = orderedCategories[currentCatIndex];

      return (
        <BehaviorSorting
          key={currentCategory} // Force unmount/remount on category change
          category={currentCategory}
          behaviors={data[currentCategory]}
          onComplete={(ranking) => {
            setBehaviorRanking(prev => ({
              ...prev,
              [currentCategory]: ranking
            }));
            nextStep();
          }}
          onBack={prevStep}
          currentCatIndex={currentCatIndex}
          totalCats={CATEGORIES.length}
        />
      );
    }

    // Step 2 + CATEGORIES.length is the Open Feedback step
    if (step === 2 + CATEGORIES.length) {
      return (
        <OpenFeedback
          feedback={openFeedback}
          onUpdate={setOpenFeedback}
          onNext={nextStep}
          onBack={prevStep}
        />
      );
    }

    // Final step: Summary + submission
    return (
      <Summary
        userDetails={userDetails}
        categoryRanking={categoryRanking}
        behaviorRanking={behaviorRanking}
        openFeedback={openFeedback}
        onClearState={handleFinish}
      />
    );
  };

  const totalSteps = 3 + CATEGORIES.length; // +1 for OpenFeedback step
  const progressPercentage = Math.min(((step + 1) / totalSteps) * 100, 100);

  return (
    <div className="wizard-container">
      {step < totalSteps - 1 && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Learnability Gym Assessment</div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={handleReset}
                className="btn btn-secondary" 
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', color: 'var(--danger)', borderColor: 'var(--danger)' }}>
                Reset
              </button>
              <button 
                onClick={handleManualSave}
                className="btn btn-secondary" 
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                <Save size={14} /> Save & Exit
              </button>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
