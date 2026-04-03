import React from 'react';
import { User, Mail, Phone } from 'lucide-react';

export default function UserDetails({ data, onUpdate, onNext }) {
  const handleChange = (e) => {
    onUpdate({ ...data, [e.target.name]: e.target.value });
  };

  const isComplete = data.firstName.trim() && data.lastName.trim() && data.email.trim();

  return (
    <div className="card">
      <h2 className="title">Welcome</h2>
      <p className="subtitle">Let's get started with your behavioral assessment.</p>

      <div className="form-group">
        <label>First Name *</label>
        <div style={{ position: 'relative' }}>
          <User className="indicator-icon" size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
          <input
            autoFocus
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
            className="form-input"
            style={{ paddingLeft: '40px' }}
            placeholder="Jane"
          />
        </div>
      </div>

      <div className="form-group">
        <label>Last Name *</label>
        <div style={{ position: 'relative' }}>
          <User className="indicator-icon" size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
            className="form-input"
            style={{ paddingLeft: '40px' }}
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="form-group">
        <label>Email *</label>
        <div style={{ position: 'relative' }}>
          <Mail className="indicator-icon" size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="form-input"
            style={{ paddingLeft: '40px' }}
            placeholder="jane.doe@example.com"
          />
        </div>
      </div>

      <div className="form-group">
        <label>Phone Number (Optional)</label>
        <div style={{ position: 'relative' }}>
          <Phone className="indicator-icon" size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
          <input
            type="tel"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            className="form-input"
            style={{ paddingLeft: '40px' }}
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <button className="btn" style={{ width: '100%' }} onClick={onNext} disabled={!isComplete}>
          Continue
        </button>
      </div>
    </div>
  );
}
