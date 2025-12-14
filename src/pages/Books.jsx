import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiStar, FiSearch } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import './Books.css';

const Books = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();

  const books = [
    {
      id: 'book-1',
      title: 'JEE Main Physics Complete Guide',
      author: 'Dr. Rajesh Kumar',
      category: 'jee',
      price: 599,
      originalPrice: 899,
      rating: 4.8,
      reviews: 256,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300',
      bestseller: true
    },
    {
      id: 'book-2',
      title: 'NEET Biology Mastery',
      author: 'Dr. Priya Sharma',
      category: 'neet',
      price: 549,
      originalPrice: 799,
      rating: 4.9,
      reviews: 342,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300',
      bestseller: true
    },
    {
      id: 'book-3',
      title: 'Mathematics Problem Solving',
      author: 'Prof. Amit Verma',
      category: 'jee',
      price: 649,
      originalPrice: 949,
      rating: 4.7,
      reviews: 198,
      image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=300',
      bestseller: false
    },
    {
      id: 'book-4',
      title: 'Chemistry Complete Package',
      author: 'Dr. Sunita Patel',
      category: 'jee',
      price: 699,
      originalPrice: 999,
      rating: 4.8,
      reviews: 289,
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300',
      bestseller: false
    },
    {
      id: 'book-5',
      title: 'NEET Chemistry Solved Papers',
      author: 'Dr. Arun Singh',
      category: 'neet',
      price: 499,
      originalPrice: 699,
      rating: 4.6,
      reviews: 187,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300',
      bestseller: false
    },
    {
      id: 'book-6',
      title: 'CBSE Physics Class 12',
      author: 'NCERT Experts',
      category: 'cbse',
      price: 399,
      originalPrice: 599,
      rating: 4.9,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300',
      bestseller: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Books' },
    { id: 'jee', name: 'JEE' },
    { id: 'neet', name: 'NEET' },
    { id: 'cbse', name: 'CBSE' },
    { id: 'foundation', name: 'Foundation' }
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (book) => {
    addToCart({
      id: book.id,
      name: book.title,
      price: book.price,
      image: book.image,
      type: 'book'
    });
    alert(`${book.title} added to cart!`);
  };

  return (
    <div className="books-page">
      <div className="books-hero">
        <div className="container">
          <h1>PW Store - Books & Materials</h1>
          <p>Get the best quality educational books at affordable prices</p>
        </div>
      </div>

      <div className="container books-content">
        {/* Search and Filter */}
        <div className="books-toolbar">
          <div className="search-box">
            <FiSearch />
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="books-grid">
          {filteredBooks.map(book => (
            <div key={book.id} className="book-card">
              {book.bestseller && <span className="bestseller-badge">Bestseller</span>}
              
              <Link to={`/books/${book.id}`} className="book-image">
                <img src={book.image} alt={book.title} />
              </Link>
              
              <div className="book-info">
                <Link to={`/books/${book.id}`}>
                  <h3>{book.title}</h3>
                </Link>
                <p className="book-author">by {book.author}</p>
                
                <div className="book-rating">
                  <div className="stars">
                    <FiStar className="filled" />
                    <span>{book.rating}</span>
                  </div>
                  <span className="reviews">({book.reviews} reviews)</span>
                </div>
                
                <div className="book-price">
                  <span className="original">₹{book.originalPrice}</span>
                  <span className="current">₹{book.price}</span>
                  <span className="discount">
                    {Math.round((1 - book.price / book.originalPrice) * 100)}% OFF
                  </span>
                </div>
                
                <div className="book-actions">
                  <button 
                    className="btn btn-cart"
                    onClick={() => handleAddToCart(book)}
                  >
                    <FiShoppingCart /> Add to Cart
                  </button>
                  <Link 
                    to={`/books/${book.id}`}
                    className="btn btn-buy"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredBooks.length === 0 && (
          <div className="no-results">
            <h3>No books found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
