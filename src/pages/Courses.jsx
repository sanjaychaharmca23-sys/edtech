import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Courses.css';

const Courses = () => {
  const { addToCart } = useCart();
  const [animatedCounts, setAnimatedCounts] = useState({});
  const [showRewardsPopup, setShowRewardsPopup] = useState(false);
  const [rewardMessage, setRewardMessage] = useState('');
  const navigate = useNavigate();

  const courses = [
    {
      id: 'jee',
      title: 'JEE Main & Advanced 2025',
      description: 'Complete IIT-JEE preparation with live classes, test series, and doubt clearing sessions led by top IIT faculty.',
      price: 8999,
      originalPrice: 15999,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400',
      rating: 4.9,
      students: '15000',
      duration: '12 months',
      category: 'Engineering',
      popular: true,
      type: 'paid',
      earlyBirdOffer: true,
      discount: 45
    },
    {
      id: 'neet',
      title: 'NEET UG 2025',
      description: 'Medical entrance exam preparation with experienced faculty and comprehensive study material for NEET aspirants.',
      price: 7999,
      originalPrice: 14999,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400',
      rating: 4.8,
      students: '12000',
      duration: '12 months',
      category: 'Medical',
      popular: false,
      type: 'paid',
      earlyBirdOffer: false,
      discount: 47
    },
    {
      id: 'cbse',
      title: 'CBSE Class 11-12',
      description: 'Board exam preparation with concept clarity, practice tests, and personalized learning paths for CBSE students.',
      price: 5999,
      originalPrice: 9999,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
      rating: 4.9,
      students: '20000',
      duration: '24 months',
      category: 'Boards',
      popular: true,
      type: 'paid',
      earlyBirdOffer: true,
      discount: 40
    },
    {
      id: 'foundation',
      title: 'Foundation Course (6-10)',
      description: 'Build a strong foundation in Math & Science for competitive exams with interactive learning modules.',
      price: 4999,
      originalPrice: 7999,
      image: 'https://images.unsplash.com/photo-1509062522246-375596ef158f?w=400',
      rating: 4.7,
      students: '8000',
      duration: '24 months',
      category: 'Foundation',
      popular: false,
      type: 'paid',
      earlyBirdOffer: false,
      discount: 38
    },
    {
      id: 'jee-crash',
      title: 'JEE Crash Course',
      description: 'Intensive revision program covering all important topics for JEE Main & Advanced in a short period.',
      price: 6999,
      originalPrice: 11999,
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400',
      rating: 4.8,
      students: '5000',
      duration: '3 months',
      category: 'Engineering',
      popular: true,
      type: 'paid',
      earlyBirdOffer: true,
      discount: 42
    },
    {
      id: 'neet-crash',
      title: 'NEET Crash Course',
      description: 'Quick revision and practice for NEET UG with mock tests and expert guidance.',
      price: 5999,
      originalPrice: 9999,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400',
      rating: 4.7,
      students: '3500',
      duration: '3 months',
      category: 'Medical',
      popular: false,
      type: 'paid',
      earlyBirdOffer: false,
      discount: 34
    },
    {
      id: 'internship-free',
      title: 'Free Internship Program',
      description: 'Get real-world experience with our industry partner internships. No fees, just dedication required!',
      price: 0,
      originalPrice: 0,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
      rating: 4.9,
      students: '2500',
      duration: '3 months',
      category: 'Internship',
      popular: true,
      type: 'free',
      earlyBirdOffer: false,
      discount: 0
    },
    {
      id: 'scholarship-test',
      title: 'Scholarship Test Preparation',
      description: 'Prepare for various scholarship exams with our specialized course. Completely free for eligible students!',
      price: 0,
      originalPrice: 0,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
      rating: 4.8,
      students: '1800',
      duration: '2 months',
      category: 'Scholarship',
      popular: false,
      type: 'free',
      earlyBirdOffer: false,
      discount: 0
    }
  ];

  useEffect(() => {
    const timers = {};
    courses.forEach(course => {
      const finalCount = parseInt(course.students.replace(/,/g, ''));
      let currentCount = 0;
      timers[course.id] = setInterval(() => {
        if (currentCount < finalCount) {
          currentCount += Math.ceil(finalCount / 50);
          if (currentCount > finalCount) currentCount = finalCount;
          setAnimatedCounts(prev => ({
            ...prev,
            [course.id]: currentCount.toLocaleString()
          }));
        } else {
          clearInterval(timers[course.id]);
        }
      }, 30);
    });
    return () => {
      Object.values(timers).forEach(timer => clearInterval(timer));
    };
  }, []);

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleEnrollClick = (course) => {
    if (course.type === 'free') {
      // For free courses, show terms and conditions first
      if (window.confirm(`Terms & Conditions for ${course.title}:

1. This is a free course with no monetary cost.
2. Students must attend 80% of live sessions.
3. Assignments must be submitted on time.
4. Certificate will be awarded on completion.

Do you agree to these terms?`)) {
        // Simulate enrollment process
        setTimeout(() => {
          // Show rewards for free course enrollment
          const rewards = ['🎁 Free Notebook Set', '📚 Digital Study Material', '🎓 Certificate of Completion', '🎖️ Achievement Badge'];
          const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
          setRewardMessage(`Congratulations! You've unlocked ${randomReward} for enrolling in ${course.title}!`);
          setShowRewardsPopup(true);
          
          // Navigate to dashboard after showing reward
          setTimeout(() => {
            setShowRewardsPopup(false);
            navigate('/student-dashboard');
          }, 3000);
        }, 1000);
      }
    } else {
      // For paid courses, navigate to enrollment page
      navigate(`/enroll/${course.id}`);
    }
  };

  const handleCloseRewardsPopup = () => {
    setShowRewardsPopup(false);
    navigate('/student-dashboard');
  };

  return (
    <div className="courses-page">
      {/* Rewards Popup */}
      {showRewardsPopup && (
        <div className="rewards-overlay">
          <div className="rewards-popup">
            <div className="reward-icon">🎉</div>
            <h3>Reward Unlocked!</h3>
            <p>{rewardMessage}</p>
            <button className="close-reward-btn" onClick={handleCloseRewardsPopup}>
              Continue to Dashboard
            </button>
          </div>
        </div>
      )}

      <div className="page-hero">
        <div className="hero-content">
          <h1>Explore Our Courses</h1>
          <p>Learn from the best teachers and achieve your goals with our expertly crafted curriculum</p>
          <div className="hero-stats">
            <div className="stat-item"><span className="stat-number">2M+</span><span className="stat-label">Students Enrolled</span></div>
            <div className="stat-item"><span className="stat-number">50+</span><span className="stat-label">Expert Teachers</span></div>
            <div className="stat-item"><span className="stat-number">95%</span><span className="stat-label">Success Rate</span></div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={course.id} className={`course-card ${course.popular ? 'popular' : ''} ${course.type === 'free' ? 'free-course' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
              {course.popular && <div className="popular-badge"><span>🔥 Most Popular</span></div>}
              {course.type === 'free' && <div className="free-badge"><span>🆓 FREE</span></div>}
              {course.earlyBirdOffer && <div className="early-bird-badge"><span>🐦 Early Bird Offer</span></div>}
              
              <div className="image-container">
                <img src={course.image} alt={course.title} />
                <div className="overlay"><span className="category">{course.category}</span></div>
              </div>
              
              <div className="course-content">
                <div className="course-header">
                  <h3>{course.title}</h3>
                  <div className="rating">
                    <span>⭐ {course.rating}</span>
                    <span className="students-count">👥 {animatedCounts[course.id] || '0'} students</span>
                  </div>
                </div>
                
                <p className="course-description">{course.description}</p>
                <div className="course-details"><span>📅 {course.duration}</span></div>
                
                <div className="course-pricing">
                  {course.type === 'free' ? (
                    <div className="free-price">
                      <span className="current">Absolutely FREE</span>
                      <div className="free-note">No hidden costs, just pure learning!</div>
                    </div>
                  ) : (
                    <>
                      <span className="original">₹{formatNumber(course.originalPrice)}</span>
                      <span className="current">₹{formatNumber(course.price)}</span>
                      <span className="discount">{Math.round((1 - course.price / course.originalPrice) * 100)}% OFF</span>
                      <div className="savings">You save ₹{formatNumber(course.originalPrice - course.price)}</div>
                      {course.earlyBirdOffer && (
                        <div className="early-bird-offer">
                          ⏰ Limited time offer - Enroll now to save extra!
                        </div>
                      )}
                    </>
                  )}
                </div>
                
                <div className="course-actions">
                  <button 
                    onClick={() => handleEnrollClick(course)} 
                    className={`btn ${course.type === 'free' ? 'btn-success' : 'btn-primary'}`}
                  >
                    {course.type === 'free' ? 'Enroll Free' : 'Buy Now'}
                  </button>
                  <Link to={`/courses/${course.id}`} className="btn btn-outline">View Details</Link>
                </div>
                
                {course.type === 'paid' && (
                  <div className="gift-section">
                    <div className="gift-icon">🎁</div>
                    <div className="gift-text">
                      <strong>Special Gift:</strong> Enroll now and get free pen set + study materials worth ₹999!
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;