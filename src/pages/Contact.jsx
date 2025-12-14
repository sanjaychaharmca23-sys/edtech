import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div className="container" style={{ padding: '100px 20px', minHeight: '80vh' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '30px auto' }}>
        <input type="text" placeholder="Name" required style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ddd' }} 
          value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
        <input type="email" placeholder="Email" required style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ddd' }}
          value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
        <textarea placeholder="Message" required style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ddd', minHeight: '150px' }}
          value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
