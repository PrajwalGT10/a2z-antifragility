import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import dataMap from '../data.json';

const CATEGORIES = Object.keys(dataMap);

export default function Summary({ userDetails, categoryRanking, behaviorRanking, openFeedback = {}, onClearState }) {
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // idle, submitting, success, error

  useEffect(() => {
    if(onClearState) onClearState();
    submitToGoogleSheets();
  }, []);


  const getPayloadString = () => {
    const timestampToUse = new Date().toISOString();
    
    // Flat mapping array strictly matching the 63 column headers
    const flatDataArray = [
      timestampToUse,
      userDetails.firstName,
      userDetails.lastName,
      userDetails.email,
      userDetails.phone,
      categoryRanking.veryHigh.join(' | '),
      categoryRanking.high.join(' | '),
      categoryRanking.medium.join(' | '),
      categoryRanking.low.join(' | ')
    ];

    CATEGORIES.forEach(cat => {
      const bSet = behaviorRanking[cat] || { high: [], medium: [], low: [] };
      flatDataArray.push(bSet.high.join(' | '));
      flatDataArray.push(bSet.medium.join(' | '));
      flatDataArray.push(bSet.low.join(' | '));
    });

    // Append open feedback fields at the end
    flatDataArray.push(openFeedback.thoughts || '');
    flatDataArray.push(openFeedback.additionalBehaviors || '');
    flatDataArray.push(openFeedback.otherComments || '');

    return JSON.stringify({
      user: userDetails,
      categories: categoryRanking,
      behaviors: behaviorRanking,
      openFeedback,
      timestamp: timestampToUse,
      flatData: flatDataArray
    }, null, 2);
  };

  const submitToGoogleSheets = async () => {
    const GOOGLE_APP_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEET_URL || "";
    if (!GOOGLE_APP_SCRIPT_URL) {
      setSubmissionStatus('idle');
      return;
    }

    setSubmissionStatus('submitting');
    try {
      const res = await fetch(GOOGLE_APP_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: getPayloadString()
      });
      console.log('Sheet upload result:', await res.text());
      setSubmissionStatus('success');
    } catch (e) {
      console.error("Failed to submit to Google Sheets:", e);
      setSubmissionStatus('error');
    }
  };





  return (
    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <CheckCircle size={48} color="var(--success)" style={{ margin: '0 auto 1rem auto' }} />
        <h2 className="title">Assessment Complete!</h2>
        <p className="subtitle" style={{ marginBottom: '1rem' }}>Thank you, {userDetails.firstName}. Your behavioral assessment has been recorded.</p>
        
        {submissionStatus === 'error' && (
          <p style={{ color: 'var(--danger)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Failed to sync to Google Sheets.
          </p>
        )}

        {submissionStatus === 'success' && (
          <p style={{ color: 'var(--success)', fontWeight: 'bold' }}>✓ Synced with Google Sheets</p>
        )}
      </div>

      <div className="summary-section">
        <h3 className="summary-title">Top Priorities Overview</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '2rem' }}>
          <div>
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Top 5 Categories (Very High)</h4>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-main)', fontSize: '0.9rem' }}>
              {categoryRanking.veryHigh.map(cat => (
                <li key={cat} style={{ marginBottom: '0.25rem' }}>{cat}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#8B5CF6', marginBottom: '0.5rem' }}>Next 5 Categories (High)</h4>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-main)', fontSize: '0.9rem' }}>
              {categoryRanking.high.map(cat => (
                <li key={cat} style={{ marginBottom: '0.25rem' }}>{cat}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="summary-section" style={{ borderBottom: 'none' }}>
        <h3 className="summary-title">Behaviors for Very High Categories</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {categoryRanking.veryHigh.map(cat => (
            <div key={cat} style={{ background: 'var(--bg)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '1rem', color: 'var(--text-main)' }}>{cat}</div>
              <div>
                <span className="badge" style={{ borderColor: 'var(--primary)', color: 'var(--primary)', background: 'rgba(79, 70, 229, 0.05)' }}>High Priority Behaviors</span>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
                  {(behaviorRanking[cat]?.high || []).map(bh => (
                    <li key={bh} style={{ marginBottom: '0.25rem' }}>{bh}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Open Feedback Section */}
      {(openFeedback.thoughts || openFeedback.additionalBehaviors || openFeedback.otherComments) && (
        <div className="summary-section" style={{ borderBottom: 'none', marginTop: '1.5rem' }}>
          <h3 className="summary-title">Your Reflections</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {openFeedback.thoughts && (
              <div style={{ background: 'var(--bg)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--primary)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Thoughts on the Assessment</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.6' }}>{openFeedback.thoughts}</p>
              </div>
            )}
            {openFeedback.additionalBehaviors && (
              <div style={{ background: 'var(--bg)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid #8B5CF6' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Additional Behaviors Suggested</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.6' }}>{openFeedback.additionalBehaviors}</p>
              </div>
            )}
            {openFeedback.otherComments && (
              <div style={{ background: 'var(--bg)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--success)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Other Comments</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.6' }}>{openFeedback.otherComments}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
