import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const handleBuyNow = () => {
    addToCart({ id, name: 'Sample Book', price: 599, image: 'https://via.placeholder.com/300', type: 'book' });
    navigate('/checkout');
  };

  return (
    <div className="container" style={{ padding: '100px 20px', minHeight: '80vh' }}>
      <h1>Book Details: {id}</h1>
      <button onClick={handleBuyNow} className="btn btn-primary">Buy Now</button>
    </div>
  );
};

export default BookDetails;
