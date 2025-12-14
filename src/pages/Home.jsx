import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlay, FiArrowRight, FiBook, FiAward, FiUsers, FiStar } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Banner data - You can manually update images here
  const banners = [
    {
      id: 1,
      title: "Achieve Your JEE Dreams",
      subtitle: "Join India's Best JEE Preparation Platform",
      buttonText: "Explore Courses",
      buttonLink: "/courses/jee",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "NEET Excellence Awaits",
      subtitle: "Learn from Top Medical Entrance Experts",
      buttonText: "Start Learning",
      buttonLink: "/courses/neet",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Power Up Your Skills",
      subtitle: "Join Power Batch for Intensive Preparation",
      buttonText: "Join Now",
      buttonLink: "/power-batch",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "PW Store - Books & Materials",
      subtitle: "Get Best Quality Books at Affordable Prices",
      buttonText: "Shop Now",
      buttonLink: "/books",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200&h=600&fit=crop",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const goToSlide = (index) => {
    setCurrentBannerIndex(index);
  };

  const nextSlide = () => {
    setCurrentBannerIndex((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentBannerIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="home">
      {/* Hero Banner Carousel */}
      <section className="banner-carousel">
        <div className="banner-container">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`banner-slide ${index === currentBannerIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="banner-overlay" style={{ background: banner.gradient }}></div>
              <div className="banner-content">
                <h1 className="banner-title">{banner.title}</h1>
                <p className="banner-subtitle">{banner.subtitle}</p>
                <Link to={banner.buttonLink} className="banner-btn">
                  {banner.buttonText} <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
          
          <button className="banner-nav prev" onClick={prevSlide}>‹</button>
          <button className="banner-nav next" onClick={nextSlide}>›</button>
          
          <div className="banner-indicators">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentBannerIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <FiUsers className="stat-icon" />
              <h3>50,000+</h3>
              <p>Active Students</p>
            </div>
            <div className="stat-card">
              <FiBook className="stat-icon" />
              <h3>200+</h3>
              <p>Expert Teachers</p>
            </div>
            <div className="stat-card">
              <FiAward className="stat-icon" />
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
            <div className="stat-card">
              <FiStar className="stat-icon" />
              <h3>4.9/5</h3>
              <p>Student Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="section popular-courses">
        <div className="container">
          <h2 className="section-title">Popular <span className="gradient-text">Courses</span></h2>
          <p className="section-subtitle">Choose from our most sought-after programs</p>
          
          <div className="courses-grid">
            {popularCoursesData.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                  <span className="course-badge">{course.badge}</span>
                </div>
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-meta">
                    <span><FiUsers /> {course.students}</span>
                    <span><FiStar /> {course.rating}</span>
                  </div>
                  <div className="course-footer">
                    <div className="price">
                      <span className="original">₹{course.originalPrice}</span>
                      <span className="current">₹{course.currentPrice}</span>
                    </div>
                    <Link to={`/courses/${course.id}`} className="btn btn-primary">Enroll Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Why Choose <span className="gradient-text">EduPulse</span></h2>
          <p className="section-subtitle">Experience the future of online education</p>
          
          <div className="features-grid">
            {featuresData.map((feature, index) => (
              <div key={index} className="feature-box">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Success Journey?</h2>
            <p>Join 50,000+ students already learning with EduPulse</p>
            <div className="cta-buttons">
              <Link to="/courses" className="btn btn-large btn-white">
                Explore Courses <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-large btn-outline-white">
                Talk to Counselor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data
const popularCoursesData = [
  {
    id: 'jee',
    title: 'JEE Main & Advanced',
    description: 'Complete IIT-JEE preparation with live classes and test series',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400',
    badge: 'Bestseller',
    students: '15K+',
    rating: '4.9',
    originalPrice: '15999',
    currentPrice: '8999'
  },
  {
    id: 'neet',
    title: 'NEET UG Preparation',
    description: 'Medical entrance exam prep with experienced faculty',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400',
    badge: 'Popular',
    students: '12K+',
    rating: '4.8',
    originalPrice: '14999',
    currentPrice: '7999'
  },
  {
    id: 'cbse',
    title: 'CBSE 11-12',
    description: 'Board exam preparation with concept clarity',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
    badge: 'New',
    students: '20K+',
    rating: '4.9',
    originalPrice: '9999',
    currentPrice: '5999'
  }
];

const featuresData = [
  {
    icon: '🎥',
    title: 'Live Interactive Classes',
    description: 'Engage with expert teachers in real-time with instant doubt resolution'
  },
  {
    icon: '📚',
    title: 'Study Material',
    description: 'Access comprehensive notes, PDFs, and practice questions'
  },
  {
    icon: '✅',
    title: 'Test Series',
    description: 'Regular tests with detailed analytics and performance insights'
  },
  {
    icon: '📱',
    title: 'Learn Anywhere',
    description: 'Access on mobile, tablet, or desktop. Learn at your own pace'
  },
  {
    icon: '👨‍🏫',
    title: 'Expert Faculty',
    description: 'Learn from IIT-JEE and NEET toppers with years of experience'
  },
  {
    icon: '💰',
    title: 'Affordable Pricing',
    description: 'Quality education at prices that won\'t break the bank'
  }
];

export default Home;
