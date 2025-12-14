import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './MobileEnrollment.css';

const MobileEnrollment = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState('mobile'); // mobile, otp, details, payment
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [studentName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  // Mock course data - in real app this would come from API
  const courseData = {
    jee: {
      id: 'jee',
      title: 'JEE Main & Advanced 2025',
      price: 8999,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400'
    },
    neet: {
      id: 'neet',
      title: 'NEET UG 2025',
      price: 7999,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400'
    },
    cbse: {
      id: 'cbse',
      title: 'CBSE Class 11-12',
      price: 5999,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400'
    },
    foundation: {
      id: 'foundation',
      title: 'Foundation Course (6-10)',
      price: 4999,
      image: 'https://images.unsplash.com/photo-1509062522246-375596ef158f?w=400'
    }
  };

  const currentCourse = courseData[courseId] || courseData.jee;

  const handleSendOTP = async () => {
    if (!mobileNumber || mobileNumber.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      setStep('otp');
      alert(`OTP sent to ${mobileNumber}`);
    }, 1500);
  };

  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP');
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep('details');
    }, 1500);
  };

  const handleProceedToPayment = async () => {
    if (!studentName || !email) {
      alert('Please fill in all required fields');
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep('payment');
    }, 1500);
  };

  const handlePayment = async () => {
    setIsLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      alert('Course enrolled successfully!');
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="mobile-enrollment-page">
      <div className="enrollment-container">
        {/* Header */}
        <div className="enrollment-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <h1>Enroll in Course</h1>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div className={`progress-step ${step === 'mobile' ? 'active' : ''}`}>1</div>
          <div className={`progress-step ${step === 'otp' ? 'active' : ''}`}>2</div>
          <div className={`progress-step ${step === 'details' ? 'active' : ''}`}>3</div>
          <div className={`progress-step ${step === 'payment' ? 'active' : ''}`}>4</div>
        </div>

        {/* Course Info */}
        <div className="course-preview">
          <img src={currentCourse.image} alt={currentCourse.title} />
          <div className="course-info">
            <h2>{currentCourse.title}</h2>
            <p className="price">₹{currentCourse.price}</p>
          </div>
        </div>

        {/* Mobile Number Step */}
        {step === 'mobile' && (
          <div className="enrollment-step">
            <h2>Enter Mobile Number</h2>
            <p>We'll send an OTP to verify your mobile number</p>
            
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <div className="mobile-input-container">
                <span className="country-code">+91</span>
                <input
                  type="tel"
                  id="mobile"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="Enter 10-digit mobile number"
                  maxLength="10"
                  className="mobile-input"
                />
              </div>
            </div>
            
            <button 
              className="btn btn-primary"
              onClick={handleSendOTP}
              disabled={isLoading}
            >
              {isLoading ? 'Sending OTP...' : 'Send OTP'}
            </button>
          </div>
        )}

        {/* OTP Verification Step */}
        {step === 'otp' && (
          <div className="enrollment-step">
            <h2>Verify OTP</h2>
            <p>Enter the 6-digit OTP sent to {mobileNumber}</p>
            
            <div className="form-group">
              <label htmlFor="otp">OTP</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                placeholder="Enter 6-digit OTP"
                maxLength="6"
                className="otp-input"
              />
            </div>
            
            <button 
              className="btn btn-primary"
              onClick={handleVerifyOTP}
              disabled={isLoading}
            >
              {isLoading ? 'Verifying...' : 'Verify OTP'}
            </button>
            
            <button 
              className="btn btn-outline"
              onClick={() => setStep('mobile')}
              disabled={isLoading}
            >
              Change Mobile Number
            </button>
          </div>
        )}

        {/* Student Details Step */}
        {step === 'details' && (
          <div className="enrollment-step">
            <h2>Student Details</h2>
            <p>Please provide your details to complete enrollment</p>
            
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter your full name"
                className="text-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="text-input"
              />
            </div>
            
            <button 
              className="btn btn-primary"
              onClick={handleProceedToPayment}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Proceed to Payment'}
            </button>
          </div>
        )}

        {/* Payment Step */}
        {step === 'payment' && (
          <div className="enrollment-step">
            <h2>Payment Options</h2>
            <p>Complete your payment to enroll in the course</p>
            
            <div className="payment-summary">
              <div className="payment-item">
                <span>Course Fee</span>
                <span>₹{currentCourse.price}</span>
              </div>
              <div className="payment-item">
                <span>Discount</span>
                <span className="discount">-₹1000</span>
              </div>
              <div className="payment-item total">
                <span>Total Amount</span>
                <span>₹{currentCourse.price - 1000}</span>
              </div>
            </div>
            
            <div className="payment-options">
              <h3>Select Payment Method</h3>
              <div className="payment-method">
                <input type="radio" id="upi" name="payment" defaultChecked />
                <label htmlFor="upi">UPI Payment</label>
              </div>
              <div className="payment-method">
                <input type="radio" id="card" name="payment" />
                <label htmlFor="card">Credit/Debit Card</label>
              </div>
              <div className="payment-method">
                <input type="radio" id="netbanking" name="payment" />
                <label htmlFor="netbanking">Net Banking</label>
              </div>
            </div>
            
            <button 
              className="btn btn-primary"
              onClick={handlePayment}
              disabled={isLoading}
            >
              {isLoading ? 'Processing Payment...' : `Pay ₹${currentCourse.price - 1000}`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileEnrollment;