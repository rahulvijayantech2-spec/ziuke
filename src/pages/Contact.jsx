import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;

    if (!name || !email || !phone || !subject || !message) {
      setIsError(true);
      setStatus('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsError(true);
      setStatus('Please enter a valid email address.');
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setIsError(true);
      setStatus('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsError(false);
    setStatus('Thank you! Your message has been sent successfully.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name[span_26](start_span)[span_26](end_span):</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Email[span_27](start_span)[span_27](end_span):</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Phone Number[span_28](start_span)[span_28](end_span):</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Subject[span_29](start_span)[span_29](end_span):</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Message[span_30](start_span)[span_30](end_span):</label>
          <textarea name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="btn" style={{ width: '100%' }}>Submit[span_31](start_span)[span_31](end_span)</button>

        {status && <p className={`status-msg ${isError ? 'error' : 'success'}`}>{status}</p>}
      </form>
    </div>
  );
}

export default Contact;