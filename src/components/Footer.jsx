import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaTelegram } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Wave Animation */}
      <div className="wave-container">
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="url(#gradient1)" fillOpacity="0.5" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 0.5 }} />
            </linearGradient>
          </defs>
        </svg>
        <svg className="wave wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="url(#gradient2)" fillOpacity="0.3" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,186.7C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#4facfe', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#00f2fe', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">📚</div>
              <h3>EduPulse</h3>
            </div>
            <p className="footer-description">
              Empowering students to achieve their dreams through quality education. 
              Join thousands of successful students today.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaYoutube />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedinIn />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTelegram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/books">Books Store</Link></li>
              <li><Link to="/real-test">Test Series</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="footer-section">
            <h4 className="footer-heading">Popular Courses</h4>
            <ul className="footer-links">
              <li><Link to="/courses/jee">JEE Main & Advanced</Link></li>
              <li><Link to="/courses/neet">NEET UG</Link></li>
              <li><Link to="/courses/foundation">Foundation (6-10)</Link></li>
              <li><Link to="/courses/cbse">CBSE 11-12</Link></li>
              <li><Link to="/power-batch">Power Batch</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FiMail />
                <span>support@edupulse.com</span>
              </div>
              <div className="contact-item">
                <FiPhone />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <FiMapPin />
                <span>New Delhi, India</span>
              </div>
            </div>
            <div className="newsletter">
              <h5>Subscribe to Newsletter</h5>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <p>&copy; 2025 EduPulse. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/refund">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </footer>
  );
};

export default Footer;
