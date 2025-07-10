import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import analytics from '../utils/analytics';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Track page views
  useEffect(() => {
    analytics.trackPageView(location.pathname);
  }, [location.pathname]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    analytics.trackEvent('toggle_dark_mode', { enabled: !darkMode });
  };

  const categories = [
    { name: 'Home', path: '/' },
    { name: 'Business', path: '/business' },
    { name: 'Entertainment', path: '/entertainment' },
    { name: 'General', path: '/general' },
    { name: 'Health', path: '/health' },
    { name: 'Science', path: '/science' },
    { name: 'Sports', path: '/sports' },
    { name: 'Technology', path: '/technology' }
  ];

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div className="brand-logo">
              <i className="fas fa-newspaper"></i>
              <span>NewsYard</span>
            </div>
          </Link>
          
          {/* Dark mode toggle button - visible on all screen sizes */}
          <div className="navbar-actions mobile-visible">
            <button
              className="action-btn theme-toggle-btn"
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? (
                <i className="fas fa-sun"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </button>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {categories.map((category) => (
                <li className="nav-item" key={category.path}>
                  <Link
                    className={`nav-link ${location.pathname === category.path ? 'active' : ''}`}
                    to={category.path}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop-only actions (hidden on mobile) */}
            <div className="navbar-actions desktop-only">
              <button
                className="action-btn theme-toggle-btn"
                onClick={toggleDarkMode}
                aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {darkMode ? (
                  <i className="fas fa-sun"></i>
                ) : (
                  <i className="fas fa-moon"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
