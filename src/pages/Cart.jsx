import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <FiShoppingBag className="empty-icon" />
        <h2>Your Cart is Empty</h2>
        <p>Add some amazing books and courses to get started!</p>
        <div className="empty-actions">
          <Link to="/books" className="btn btn-primary">Browse Books</Link>
          <Link to="/courses" className="btn btn-secondary">Explore Courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="cart-title">Shopping Cart ({cartItems.length} items)</h1>
        
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-type">{item.type === 'book' ? 'Book' : 'Course'}</p>
                  <p className="item-price">₹{item.price}</p>
                </div>
                <div className="item-quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <FiMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <FiPlus />
                  </button>
                </div>
                <div className="item-total">
                  <p>₹{item.price * item.quantity}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    <FiTrash2 /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{getCartTotal()}</span>
            </div>
            <div className="summary-row">
              <span>Discount</span>
              <span className="discount">-₹0</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>₹0</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>₹{getCartTotal()}</span>
            </div>
            <button className="btn btn-checkout" onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </button>
            <Link to="/books" className="continue-shopping">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
