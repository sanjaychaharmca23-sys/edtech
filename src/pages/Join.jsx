import React, { useState } from 'react';
import './Join.css';

const Join = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    paymentMethod: 'credit-card'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for joining! We will send you confirmation details shortly.');
  };

  return (
    <div className="join-page">
      <div className="join-container">
        <div className="join-header">
          <h1>Join REAL TEST Series</h1>
          <p>Complete the form below to get access to our premium test series</p>
        </div>

        <div className="join-content">
          <form className="join-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label>Payment Method</label>
              <div className="payment-options">
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit-card"
                    checked={formData.paymentMethod === 'credit-card'}
                    onChange={handleChange}
                  />
                  <span>Credit/Debit Card</span>
                </label>
                
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleChange}
                  />
                  <span>UPI Payment</span>
                </label>
                
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="net-banking"
                    checked={formData.paymentMethod === 'net-banking'}
                    onChange={handleChange}
                  />
                  <span>Net Banking</span>
                </label>
              </div>
            </div>

            <div className="terms-section">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>I agree to the <a href="#terms">Terms & Conditions</a> and <a href="#privacy">Privacy Policy</a></span>
              </label>
            </div>

            <button type="submit" className="join-submit-button">
              Proceed to Payment (₹999)
            </button>
          </form>

          <div className="benefits-section">
            <h3>Why Join REAL TEST Series?</h3>
            <ul>
              <li>Real exam pattern practice tests</li>
              <li>Detailed performance analytics</li>
              <li>Expert solutions for all questions</li>
              <li>Rank prediction and comparison</li>
              <li>24/7 access to test portal</li>
              <li>Regular updates with new tests</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;