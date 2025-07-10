import React, { useState, useEffect } from 'react';
import './Footer.css';
import analytics from '../utils/analytics';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  // Initialize services and scroll listener
  useEffect(() => {
    
    
    // Add scroll listener for scroll-to-top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    analytics.trackEvent('scroll_to_top', { from: 'footer' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer Section */}
        <div className="footer-main">
          <div className="footer-section">
            <h3 className="footer-title">NewsApp</h3>
            <p className="footer-description">
              Stay informed with the latest news from around the world. 
              Your trusted source for breaking news, analysis, and insights.
            </p>
           
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Categories</h4>
            <ul className="footer-links">
              <li><a href="/business">Business</a></li>
              <li><a href="/technology">Technology</a></li>
              <li><a href="/sports">Sports</a></li>
              <li><a href="/entertainment">Entertainment</a></li>
              <li><a href="/health">Health</a></li>
              <li><a href="/science">Science</a></li>
            </ul>
          </div>

        

          
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} NewsApp. Made with ❤️ by Neel • All rights reserved
            </p>
            <div className="footer-bottom-links">
              <span className="footer-stats">
                <i className="fas fa-users"></i> 10K+ Readers
              </span>
              <span className="footer-stats">
                <i className="fas fa-newspaper"></i> 1000+ Articles
              </span>
              <span className="footer-stats">
                <i className="fas fa-globe"></i> 50+ Countries
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
