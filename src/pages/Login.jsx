import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('authToken', 'demo-token');
    alert('Login successful!');
    navigate('/profile');
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9fa' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', maxWidth: '400px', width: '100%' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required style={{ width: '100%', padding: '14px', marginBottom: '15px', borderRadius: '8px', border: '2px solid #e0e0e0' }}
            value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required style={{ width: '100%', padding: '14px', marginBottom: '20px', borderRadius: '8px', border: '2px solid #e0e0e0' }}
            value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>Login</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
