import React from 'react';
import './Vidyapeeth.css';

const Vidyapeeth = () => {
  // Center data
  const centers = [
    {
      id: 1,
      name: "Delhi Central Hub",
      location: "South Delhi, New Delhi",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",
      students: "2,500+",
      courses: "15+",
      rating: "4.9",
      features: ["Air Conditioning", "Smart Boards", "Library Access", "Wi-Fi"],
      popular: true
    },
    {
      id: 2,
      name: "Mumbai Learning Center",
      location: "Andheri West, Mumbai",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600",
      students: "1,800+",
      courses: "12+",
      rating: "4.8",
      features: ["Parking", "Cafeteria", "Lab Facilities", "Wi-Fi"],
      popular: false
    },
    {
      id: 3,
      name: "Bangalore Tech Campus",
      location: "Koramangala, Bangalore",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600",
      students: "2,200+",
      courses: "18+",
      rating: "4.9",
      features: ["24/7 Access", "Gaming Zone", "Mentor Rooms", "Wi-Fi"],
      popular: true
    },
    {
      id: 4,
      name: "Chennai Excellence Center",
      location: "Anna Nagar, Chennai",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
      students: "1,500+",
      courses: "10+",
      rating: "4.7",
      features: ["AC Classrooms", "Study Pods", "Printing", "Wi-Fi"],
      popular: false
    },
    {
      id: 5,
      name: "Hyderabad Innovation Hub",
      location: "HITEC City, Hyderabad",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039187?w=600",
      students: "1,900+",
      courses: "14+",
      rating: "4.8",
      features: ["VR Labs", "Co-working", "Meeting Rooms", "Wi-Fi"],
      popular: true
    },
    {
      id: 6,
      name: "Kolkata Heritage Center",
      location: "Salt Lake, Kolkata",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039187?w=600",
      students: "1,200+",
      courses: "8+",
      rating: "4.6",
      features: ["Heritage Building", "Garden Area", "Café", "Wi-Fi"],
      popular: false
    }
  ];

  // Features data
  const features = [
    {
      icon: "🏫",
      title: "World-Class Infrastructure",
      description: "Modern facilities with smart classrooms, high-speed internet, and comfortable seating for optimal learning."
    },
    {
      icon: "👨‍🏫",
      title: "Expert Faculty",
      description: "Learn from industry experts and top educators who bring real-world experience to the classroom."
    },
    {
      icon: "📚",
      title: "Comprehensive Resources",
      description: "Access to extensive library, digital resources, practice materials, and mock tests."
    },
    {
      icon: "🏆",
      title: "Proven Results",
      description: "Our students consistently achieve top ranks in competitive exams with our proven methodologies."
    },
    {
      icon: "💼",
      title: "Career Guidance",
      description: "Personalized career counseling and placement assistance to help you achieve your goals."
    },
    {
      icon: "👥",
      title: "Community Learning",
      description: "Join a vibrant community of learners, participate in group studies and peer discussions."
    }
  ];

  return (
    <div className="vidyapeeth-page">
      {/* Hero Section */}
      <div className="vidyapeeth-hero">
        <div className="hero-content">
          <h1>Vidyapeeth Centers</h1>
          <p>Experience the future of learning at our state-of-the-art offline centers across India</p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Cities</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">Centers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2M+</span>
              <span className="stat-label">Students</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="section-title">
          <h2>Why Choose Our Centers?</h2>
          <p>Our offline learning centers combine traditional teaching excellence with modern amenities</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Centers Section */}
      <div className="centers-section">
        <div className="section-title">
          <h2>Our Learning Centers</h2>
          <p>Find a Vidyapeeth center near you and join our community of achievers</p>
        </div>
        
        <div className="centers-grid">
          {centers.map((center, index) => (
            <div 
              key={center.id} 
              className="center-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {center.popular && (
                <div className="center-badge">
                  <span>🔥 Most Popular</span>
                </div>
              )}
              
              <div className="center-image">
                <img src={center.image} alt={center.name} />
              </div>
              
              <div className="center-content">
                <h3>{center.name}</h3>
                
                <div className="center-location">
                  <span>📍</span>
                  <span>{center.location}</span>
                </div>
                
                <div className="center-stats">
                  <div className="stat">
                    <div className="stat-value">{center.students}</div>
                    <div className="stat-label">Students</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">{center.courses}</div>
                    <div className="stat-label">Courses</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">⭐ {center.rating}</div>
                    <div className="stat-label">Rating</div>
                  </div>
                </div>
                
                <div className="center-features">
                  {center.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                
                <div className="center-actions">
                  <button className="btn btn-primary">Visit Center</button>
                  <button className="btn btn-outline">Contact Us</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Learning Journey?</h2>
          <p>Join thousands of students who have achieved their dreams with Vidyapeeth's offline learning centers</p>
          <a href="#contact" className="cta-button">Find Your Nearest Center</a>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <div className="section-title">
          <h2>Our Presence Across India</h2>
          <p>With centers in major cities, quality education is just around the corner</p>
        </div>
        
        <div className="map-container">
          <div className="map-placeholder">
            <span>🗺️ Interactive Map Coming Soon</span>
            <span>See all our centers across India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vidyapeeth;