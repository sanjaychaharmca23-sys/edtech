import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EnrollmentPage.css';

const EnrollmentPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [showTermsPopup, setShowTermsPopup] = useState(false);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const [showHurryPopup, setShowHurryPopup] = useState(false);
  const [showOTPPopup, setShowOTPPopup] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    lastCourse: '',
    agreeToTerms: false
  });

  // Course data - in a real app, this would come from an API
  const courseData = {
    jee: {
      title: 'JEE Main & Advanced 2025',
      description: 'Complete IIT-JEE preparation with live classes, test series, and doubt clearing sessions led by top IIT faculty.',
      price: 8999,
      originalPrice: 15999,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400',
      rating: 4.9,
      students: '15,000+',
      duration: '12 months',
      category: 'Engineering',
      facilities: [
        'Live interactive classes with IIT faculty',
        'Daily practice problems with detailed solutions',
        'Weekly test series with performance analysis',
        'Doubt clearing sessions 24/7',
        'Study material in digital and physical format',
        'Personalized learning dashboard',
        'Access to recorded lectures for 2 years',
        'Mock interviews and career counseling'
      ]
    },
    neet: {
      title: 'NEET UG 2025',
      description: 'Medical entrance exam preparation with experienced faculty and comprehensive study material for NEET aspirants.',
      price: 7999,
      originalPrice: 14999,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400',
      rating: 4.8,
      students: '12,000+',
      duration: '12 months',
      category: 'Medical',
      facilities: [
        'Expert faculty with medical background',
        'Comprehensive biology, chemistry, and physics modules',
        'Monthly major test series with ranking',
        'Specialized NEET pattern practice questions',
        'Personal mentorship program',
        'Revision modules for quick recap',
        'Access to medical journals and research papers',
        'Career guidance for medical specialization'
      ]
    },
    cbse: {
      title: 'CBSE Class 11-12',
      description: 'Board exam preparation with concept clarity, practice tests, and personalized learning paths for CBSE students.',
      price: 5999,
      originalPrice: 9999,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
      rating: 4.9,
      students: '20,000+',
      duration: '24 months',
      category: 'Boards',
      facilities: [
        'NCERT aligned curriculum',
        'Chapter-wise detailed explanations',
        'Sample papers for all subjects',
        'Previous year question bank with solutions',
        'Personalized study planner',
        'Regular assessment and progress tracking',
        'Interactive quizzes for better retention',
        'Parent-teacher consultation sessions'
      ]
    }
  };

  const course = courseData[courseId] || courseData.jee;

  // Show hurry popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHurryPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Countdown for OTP resend
  useEffect(() => {
    let interval = null;
    if (otpSent && countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown => countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setOtpSent(false);
    }
    return () => clearInterval(interval);
  }, [otpSent, countdown]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEnrollClick = () => {
    setShowOTPPopup(true);
  };

  const handleSendOTP = () => {
    if (!formData.phone || formData.phone.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    
    // Simulate sending OTP
    setOtpSent(true);
    setCountdown(30);
    alert(`OTP sent to ${formData.phone}`);
  };

  const handleVerifyOTP = () => {
    if (!otp || otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP');
      return;
    }
    
    // Simulate OTP verification
    setShowOTPPopup(false);
    setShowTermsPopup(true);
  };

  const handleTermsAccept = () => {
    setShowTermsPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    setShowTermsPopup(false);
    setShowThankYouPopup(true);
  };

  const closeHurryPopup = () => {
    setShowHurryPopup(false);
  };

  const closeThankYouPopup = () => {
    setShowThankYouPopup(false);
    // Redirect to student dashboard page after thank you
    navigate('/student-dashboard');
  };

  const openWhatsApp = () => {
    const message = `Hi, I'm interested in enrolling in the ${course.title}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="enrollment-page">
      {/* WhatsApp Icon */}
      <div className="whatsapp-icon" onClick={openWhatsApp}>
        <span className="whatsapp-icon-inner">💬</span>
      </div>

      {/* Hurry Up Popup */}
      {showHurryPopup && (
        <div className="popup-overlay">
          <div className="hurry-popup">
            <div className="popup-header">
              <h3>⏰ Hurry Up!</h3>
              <button className="close-btn" onClick={closeHurryPopup}>×</button>
            </div>
            <div className="popup-content">
              <p>Limited seats available for {course.title}!</p>
              <p>Enroll now to secure your spot and get exclusive early bird discounts.</p>
              <button className="cta-button" onClick={handleEnrollClick}>Enroll Now</button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile OTP Popup */}
      {showOTPPopup && (
        <div className="popup-overlay">
          <div className="otp-popup">
            <div className="popup-header">
              <h3>Mobile Verification</h3>
              <button className="close-btn" onClick={() => setShowOTPPopup(false)}>×</button>
            </div>
            <div className="popup-content">
              <p>Enter your mobile number to receive an OTP for verification</p>
              
              <div className="form-group">
                <label htmlFor="phone-otp">Mobile Number *</label>
                <input
                  type="tel"
                  id="phone-otp"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter 10-digit mobile number"
                  maxLength="10"
                  required
                />
              </div>
              
              {!otpSent ? (
                <button className="submit-btn" onClick={handleSendOTP}>
                  Send OTP
                </button>
              ) : (
                <>
                  <div className="form-group">
                    <label htmlFor="otp">Enter OTP *</label>
                    <input
                      type="text"
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                      placeholder="Enter 6-digit OTP"
                      maxLength="6"
                      required
                    />
                  </div>
                  
                  <div className="otp-actions">
                    <button className="submit-btn" onClick={handleVerifyOTP}>
                      Verify OTP
                    </button>
                    
                    {countdown > 0 ? (
                      <p className="resend-text">Resend OTP in {countdown} seconds</p>
                    ) : (
                      <button className="resend-btn" onClick={handleSendOTP}>
                        Resend OTP
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Terms and Conditions Popup */}
      {showTermsPopup && (
        <div className="popup-overlay">
          <div className="terms-popup">
            <div className="popup-header">
              <h3>Terms & Conditions</h3>
              <button className="close-btn" onClick={() => setShowTermsPopup(false)}>×</button>
            </div>
            <div className="popup-content">
              <form onSubmit={handleSubmit} className="enrollment-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone-display">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone-display"
                    value={formData.phone}
                    readOnly
                    className="readonly-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastCourse">Last Course Enrolled (if any)</label>
                  <input
                    type="text"
                    id="lastCourse"
                    name="lastCourse"
                    value={formData.lastCourse}
                    onChange={handleInputChange}
                    placeholder="Enter previous course name"
                  />
                </div>
                
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                    />
                    <span>I agree to the <a href="#terms" onClick={(e) => e.preventDefault()}>Terms & Conditions</a> and <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a></span>
                  </label>
                </div>
                
                <div className="form-actions">
                  <button type="button" className="cancel-btn" onClick={() => setShowTermsPopup(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn">
                    Submit Enrollment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Popup */}
      {showThankYouPopup && (
        <div className="popup-overlay">
          <div className="thank-you-popup">
            <div className="popup-content">
              <div className="success-icon">✓</div>
              <h3>Thank You for Enrolling!</h3>
              <p>Congratulations! You have successfully enrolled in <strong>{course.title}</strong>.</p>
              <p>We've sent a confirmation email to <strong>{formData.email}</strong> with further instructions.</p>
              <p>Our team will contact you shortly to assist with the next steps.</p>
              <button className="done-btn" onClick={closeThankYouPopup}>Done</button>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <div className="enrollment-content">
          {/* Left Side - 3D Animated Picture */}
          <div className="left-section">
            <div className="animated-3d-container">
              <div className="cube">
                <div className="face front">
                  <img src={course.image} alt="Course" />
                </div>
                <div className="face back">
                  <div className="feature-icon">📚</div>
                </div>
                <div className="face right">
                  <div className="feature-icon">🎓</div>
                </div>
                <div className="face left">
                  <div className="feature-icon">💡</div>
                </div>
                <div className="face top">
                  <div className="feature-icon">🏆</div>
                </div>
                <div className="face bottom">
                  <div className="feature-icon">🚀</div>
                </div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-element">⭐</div>
              <div className="floating-element">🎯</div>
              <div className="floating-element">📈</div>
            </div>
          </div>

          {/* Right Side - Enrollment Information */}
          <div className="right-section">
            <div className="breadcrumb">
              <a href="/">Home</a> / <a href="/courses">Courses</a> / <span>Enrollment</span>
            </div>

            <div className="course-header">
              <span className="category-badge">{course.category}</span>
              <h1>{course.title}</h1>
              <p className="course-description">{course.description}</p>
            </div>

            <div className="course-meta">
              <div className="meta-item">
                <span className="meta-icon">⭐</span>
                <span className="meta-value">{course.rating}/5.0</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">👥</span>
                <span className="meta-value">{course.students} enrolled</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📅</span>
                <span className="meta-value">{course.duration}</span>
              </div>
            </div>

            <div className="pricing-section">
              <div className="price-container">
                <span className="original-price">₹{course.originalPrice.toLocaleString()}</span>
                <span className="current-price">₹{course.price.toLocaleString()}</span>
                <span className="discount-badge">
                  {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                </span>
              </div>
              <div className="savings">You save ₹{(course.originalPrice - course.price).toLocaleString()}</div>
            </div>

            <div className="enrollment-steps">
              <h2>How to Enroll</h2>
              <div className="steps-container">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Choose Your Plan</h3>
                    <p>Select the course that fits your learning needs and budget.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Make Payment</h3>
                    <p>Complete secure payment through our trusted gateway.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Get Instant Access</h3>
                    <p>Receive login credentials and start learning immediately.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="facilities-section">
              <h2>What You'll Get</h2>
              <ul className="facilities-list">
                {course.facilities.map((facility, index) => (
                  <li key={index} className="facility-item">
                    <span className="check-icon">✓</span>
                    {facility}
                  </li>
                ))}
              </ul>
            </div>

            <div className="cta-section">
              <button className="enroll-button" onClick={handleEnrollClick}>
                Enroll Now for ₹{course.price.toLocaleString()}
              </button>
              <p className="money-back">30-Day Money Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentPage;