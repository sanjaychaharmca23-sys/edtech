import React from 'react';
import './Upskilling.css';

const Upskilling = () => {
  // Programs data
  const programs = [
    {
      id: 1,
      name: "Data Science & Analytics",
      description: "Master the art of data analysis, machine learning, and AI with hands-on projects and real-world case studies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      duration: "6 Months",
      level: "Beginner to Advanced",
      projects: "12+",
      popular: true
    },
    {
      id: 2,
      name: "Digital Marketing Mastery",
      description: "Become an expert in SEO, SEM, social media marketing, and analytics with practical campaigns.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
      duration: "4 Months",
      level: "Intermediate",
      projects: "8+",
      popular: false
    },
    {
      id: 3,
      name: "Cloud Computing & DevOps",
      description: "Learn AWS, Azure, Docker, Kubernetes, and CI/CD pipelines for modern infrastructure management.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae6b91?w=600",
      duration: "5 Months",
      level: "Intermediate to Expert",
      projects: "10+",
      popular: true
    },
    {
      id: 4,
      name: "Cybersecurity Specialist",
      description: "Protect digital assets with advanced security techniques, ethical hacking, and threat analysis.",
      image: "https://images.unsplash.com/photo-156301727-70a08a0d3ba0?w=600",
      duration: "6 Months",
      level: "Beginner to Advanced",
      projects: "9+",
      popular: false
    },
    {
      id: 5,
      name: "UI/UX Design Pro",
      description: "Create stunning user experiences with Figma, Adobe XD, prototyping, and user research methods.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600",
      duration: "4 Months",
      level: "Beginner to Intermediate",
      projects: "15+",
      popular: true
    },
    {
      id: 6,
      name: "Blockchain & Cryptocurrency",
      description: "Understand blockchain technology, smart contracts, and decentralized applications development.",
      image: "https://images.unsplash.com/photo-1620336655052-b57986f5a26a?w=600",
      duration: "5 Months",
      level: "Intermediate to Expert",
      projects: "7+",
      popular: false
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: "🎓",
      title: "Industry Expert Instructors",
      description: "Learn from professionals with real-world experience in their respective fields."
    },
    {
      icon: "💼",
      title: "Job Placement Assistance",
      description: "Get career support, resume building, and interview preparation for top companies."
    },
    {
      icon: "🔧",
      title: "Hands-On Projects",
      description: "Apply your skills with practical projects that build your professional portfolio."
    },
    {
      icon: "🌐",
      title: "Global Certification",
      description: "Earn recognized certifications to boost your career prospects worldwide."
    },
    {
      icon: "👥",
      title: "Community Support",
      description: "Join a vibrant community of learners and professionals for networking."
    },
    {
      icon: "🔄",
      title: "Lifetime Access",
      description: "Access course materials forever and get updates as industry evolves."
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      content: "The Data Science program completely transformed my career. I went from a basic analyst to leading ML projects at my company within 8 months!",
      author: "Priya Sharma",
      role: "Senior Data Scientist, TechCorp",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100"
    },
    {
      id: 2,
      content: "The practical approach of the Digital Marketing course helped me launch my own agency. The mentorship and project work were invaluable.",
      author: "Rahul Verma",
      role: "Founder, MarketMasters Agency",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100"
    },
    {
      id: 3,
      content: "Upskilling with this program gave me the confidence to negotiate a 40% salary increase. The skills are directly applicable to real-world challenges.",
      author: "Anjali Patel",
      role: "Cloud Solutions Architect, CloudFirst Inc",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100"
    }
  ];

  return (
    <div className="upskilling-page">
      {/* Hero Section */}
      <div className="upskilling-hero">
        <div className="hero-content">
          <h1>Upskilling Programs</h1>
          <p>Transform your career with cutting-edge skills demanded by today's job market</p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Graduates</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Programs</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Placement Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="programs-section">
        <div className="section-title">
          <h2>Popular Upskilling Programs</h2>
          <p>Choose from our industry-aligned programs designed by experts</p>
        </div>
        
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div 
              key={program.id} 
              className="program-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {program.popular && (
                <div className="program-badge">
                  <span>🔥 Most Popular</span>
                </div>
              )}
              
              <div className="program-image">
                <img src={program.image} alt={program.name} />
              </div>
              
              <div className="program-content">
                <h3>{program.name}</h3>
                <p className="program-description">{program.description}</p>
                
                <div className="program-meta">
                  <div className="meta-item">
                    <div className="meta-value">{program.duration}</div>
                    <div className="meta-label">Duration</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-value">{program.level}</div>
                    <div className="meta-label">Level</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-value">{program.projects} Projects</div>
                    <div className="meta-label">Hands-On</div>
                  </div>
                </div>
                
                <div className="program-actions">
                  <button className="btn btn-primary">Enroll Now</button>
                  <button className="btn btn-outline">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <div className="section-title">
          <h2>Why Upskill With Us?</h2>
          <p>We provide everything you need for a successful career transformation</p>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="section-title">
          <h2>Success Stories</h2>
          <p>Hear from our graduates who transformed their careers</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={testimonial.avatar} alt={testimonial.author} />
                </div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Career?</h2>
          <p>Join thousands of professionals who have accelerated their careers with our upskilling programs</p>
          <a href="#enroll" className="cta-button">Start Your Journey Today</a>
        </div>
      </div>
    </div>
  );
};

export default Upskilling;