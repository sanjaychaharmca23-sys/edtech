import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration successful!');
    navigate('/login');
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9fa' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', maxWidth: '400px', width: '100%' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Register</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required style={{ width: '100%', padding: '14px', marginBottom: '15px', borderRadius: '8px', border: '2px solid #e0e0e0' }}
            value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          <input type="email" placeholder="Email" required style={{ width: '100%', padding: '14px', marginBottom: '15px', borderRadius: '8px', border: '2px solid #e0e0e0' }}
            value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
          <input type="password" placeholder="Password" required style={{ width: '100%', padding: '14px', marginBottom: '20px', borderRadius: '8px', border: '2px solid #e0e0e0' }}
            value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>Register</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
