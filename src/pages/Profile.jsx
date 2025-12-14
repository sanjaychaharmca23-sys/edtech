import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert('Logged out successfully!');
    navigate('/login');
  };

  return (
    <div className="container" style={{ padding: '100px 20px', minHeight: '80vh' }}>
      <h1>My Profile</h1>
      <div style={{ background: 'white', padding: '30px', borderRadius: '16px', marginTop: '30px', maxWidth: '600px' }}>
        <p><strong>Name:</strong> Demo User</p>
        <p><strong>Email:</strong> demo@edupulse.com</p>
        <button onClick={handleLogout} className="btn btn-primary" style={{ marginTop: '20px' }}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
