import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCreditCard, FiLock, FiCheck } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    
    // Simulating payment gateway integration
    // In real app, integrate with Razorpay/Stripe
    const options = {
      key: 'YOUR_RAZORPAY_KEY', // Replace with actual key
      amount: getCartTotal() * 100, // Amount in paise
      currency: 'INR',
      name: 'EduPulse',
      description: 'Course/Book Purchase',
      handler: function (response) {
        alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
        clearCart();
        navigate('/profile');
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone
      },
      theme: {
        color: '#667eea'
      }
    };

    // Uncomment when Razorpay is integrated
    // const rzp = new window.Razorpay(options);
    // rzp.open();

    // For demo purposes
    setTimeout(() => {
      alert('Payment Successful! (Demo Mode)');
      clearCart();
      navigate('/profile');
    }, 1000);
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Checkout</h1>
        
        <div className="checkout-layout">
          <div className="checkout-form">
            <form onSubmit={handlePayment}>
              <section className="form-section">
                <h2><FiCheck /> Contact Information</h2>
                <div className="form-grid">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </section>

              <section className="form-section">
                <h2><FiCheck /> Billing Address</h2>
                <div className="form-grid">
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address *"
                    required
                    className="full-width"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City *"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State *"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="pincode"
                    placeholder="PIN Code *"
                    required
                    value={formData.pincode}
                    onChange={handleInputChange}
                  />
                </div>
              </section>

              <section className="form-section">
                <h2><FiCreditCard /> Payment Method</h2>
                <div className="payment-methods">
                  <label className={`payment-option ${paymentMethod === 'card' ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <div className="option-content">
                      <FiCreditCard />
                      <span>Credit/Debit Card</span>
                    </div>
                  </label>
                  <label className={`payment-option ${paymentMethod === 'upi' ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <div className="option-content">
                      <span>📱</span>
                      <span>UPI</span>
                    </div>
                  </label>
                  <label className={`payment-option ${paymentMethod === 'netbanking' ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="netbanking"
                      checked={paymentMethod === 'netbanking'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <div className="option-content">
                      <span>🏦</span>
                      <span>Net Banking</span>
                    </div>
                  </label>
                </div>
              </section>

              <button type="submit" className="btn-pay">
                <FiLock /> Pay ₹{getCartTotal()}
              </button>
              
              <p className="security-note">
                <FiLock /> Your payment information is secure and encrypted
              </p>
            </form>
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-items">
              {cartItems.map(item => (
                <div key={item.id} className="summary-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <span className="item-price">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="summary-totals">
              <div className="total-row">
                <span>Subtotal</span>
                <span>₹{getCartTotal()}</span>
              </div>
              <div className="total-row">
                <span>Tax</span>
                <span>₹0</span>
              </div>
              <div className="total-row grand-total">
                <span>Total</span>
                <span>₹{getCartTotal()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
