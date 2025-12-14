import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RealTest.css';

const RealTest = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  // Sample enrolled students data
  const enrolledStudents = [
    { id: 1, name: 'Rahul Sharma', enrollmentDate: 'Dec 10, 2025' },
    { id: 2, name: 'Priya Patel', enrollmentDate: 'Dec 9, 2025' },
    { id: 3, name: 'Amit Kumar', enrollmentDate: 'Dec 8, 2025' },
    { id: 4, name: 'Sneha Gupta', enrollmentDate: 'Dec 7, 2025' },
    { id: 5, name: 'Vikash Singh', enrollmentDate: 'Dec 6, 2025' },
    { id: 6, name: 'Anjali Mehta', enrollmentDate: 'Dec 5, 2025' },
    { id: 7, name: 'Rohit Verma', enrollmentDate: 'Dec 4, 2025' },
  ];

  const handleJoinClick = () => {
    navigate('/join');
  };

  return (
    <div className="real-test-page">
      {/* Header similar to home page */}
      <header className="realtest-header">
        <div className="header-container">
          <div className="logo">
            <img src="/pwlogo.png" alt="EduPulse Logo" className="logo-img" />
            <span className="logo-text">EduPulse</span>
          </div>
          <nav className="nav-menu">
            <a href="/" className="nav-link">Home</a>
            <a href="/register" className="nav-link">Register</a>
          </nav>
        </div>
      </header>

      <div className="real-test-container">
        {/* Left Section - Course Image and Details */}
        <div className="course-section">
          <div className="course-image-container">
            <img 
              src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="REAL TEST Course" 
              className="course-image"
            />
            <div className="course-overlay">
              <h2 className="course-title">REAL TEST</h2>
              <div className="manual-lakshya">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                  alt="Manual Lakshya" 
                  className="lakshya-image"
                />
                <span className="lakshya-text">MANUAL LAKSHYA</span>
              </div>
            </div>
          </div>
          
          <div className="course-details">
            <div className="price-section">
              <span className="original-price">₹1999</span>
              <span className="discounted-price">₹999</span>
              <span className="discount-badge">50% OFF</span>
            </div>
            
            <button className="buy-button" onClick={() => setShowPopup(true)}>
              Buy Now
            </button>
          </div>
        </div>

        {/* Right Section - Enrolled Students */}
        <div className="students-section">
          <h3 className="section-title">Enrolled Students</h3>
          <div className="students-list">
            {enrolledStudents.map(student => (
              <div key={student.id} className="student-card">
                <div className="student-info">
                  <div className="student-avatar">
                    {student.name.charAt(0)}
                  </div>
                  <div className="student-details">
                    <h4 className="student-name">{student.name}</h4>
                    <p className="enrollment-date">Enrolled: {student.enrollmentDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-content">
              <div className="popup-icon">✓</div>
              <h3 className="popup-title">Join REAL TEST Series</h3>
              <p className="popup-description">
                Get access to premium test series with detailed analytics and performance reports.
              </p>
              <div className="popup-actions">
                <button className="popup-cancel" onClick={() => setShowPopup(false)}>
                  Cancel
                </button>
                <button className="popup-join" onClick={handleJoinClick}>
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RealTest;