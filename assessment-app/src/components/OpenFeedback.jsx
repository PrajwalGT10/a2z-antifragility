import { useState } from 'react';
import { MessageSquare, ChevronRight, ChevronLeft } from 'lucide-react';

export default function OpenFeedback({ feedback, onUpdate, onNext, onBack }) {
  const [thoughts, setThoughts] = useState(feedback?.thoughts || '');
  const [additionalBehaviors, setAdditionalBehaviors] = useState(feedback?.additionalBehaviors || '');
  const [otherComments, setOtherComments] = useState(feedback?.otherComments || '');

  const handleNext = () => {
    onUpdate({ thoughts, additionalBehaviors, otherComments });
    onNext();
  };

  const allEmpty = !thoughts.trim() && !additionalBehaviors.trim() && !otherComments.trim();

  return (
    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
        <MessageSquare size={24} color="var(--primary)" />
        <h2 className="title" style={{ margin: 0 }}>Your Reflections</h2>
      </div>
      <p className="subtitle" style={{ marginBottom: '2rem' }}>
        You're almost done! Before we wrap up, we'd love to hear your thoughts. All fields are optional — share as much or as little as you'd like.
      </p>

      {/* Question 1 */}
      <div className="form-group">
        <label htmlFor="thoughts" style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>
          What are your thoughts on this assessment?
        </label>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.5rem', marginTop: '0.25rem' }}>
          Did the categories and behaviors resonate with you? Was anything surprising or particularly meaningful?
        </p>
        <textarea
          id="thoughts"
          className="form-input"
          rows={4}
          placeholder="Share your reflections here…"
          value={thoughts}
          onChange={(e) => setThoughts(e.target.value)}
          style={{ resize: 'vertical', lineHeight: '1.6' }}
        />
      </div>

      {/* Question 2 */}
      <div className="form-group">
        <label htmlFor="additionalBehaviors" style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>
          Are there behaviors you feel should be included?
        </label>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.5rem', marginTop: '0.25rem' }}>
          If you practice behaviors that are important to you but weren't listed, describe them here. We actively use this feedback to evolve the assessment.
        </p>
        <textarea
          id="additionalBehaviors"
          className="form-input"
          rows={4}
          placeholder="e.g. 'I practice daily journaling as a reflection habit…'"
          value={additionalBehaviors}
          onChange={(e) => setAdditionalBehaviors(e.target.value)}
          style={{ resize: 'vertical', lineHeight: '1.6' }}
        />
      </div>

      {/* Question 3 */}
      <div className="form-group" style={{ marginBottom: '2rem' }}>
        <label htmlFor="otherComments" style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>
          Anything else you'd like to share?
        </label>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.5rem', marginTop: '0.25rem' }}>
          Questions, suggestions, context about your role, or anything else on your mind.
        </p>
        <textarea
          id="otherComments"
          className="form-input"
          rows={3}
          placeholder="Any other thoughts or context…"
          value={otherComments}
          onChange={(e) => setOtherComments(e.target.value)}
          style={{ resize: 'vertical', lineHeight: '1.6' }}
        />
      </div>

      {/* Optional skip notice */}
      {allEmpty && (
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.25rem', fontStyle: 'italic' }}>
          You can skip this section — just click Submit below.
        </p>
      )}

      {/* Navigation */}
      <div className="flex-between">
        <button className="btn btn-secondary" onClick={onBack} style={{ gap: '0.4rem' }}>
          <ChevronLeft size={16} /> Back
        </button>
        <button className="btn" onClick={handleNext} style={{ gap: '0.4rem' }}>
          Submit Assessment <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
