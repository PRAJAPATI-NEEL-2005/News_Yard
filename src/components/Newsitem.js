import React from "react";
import "./Newsitem.css";

const Newsitem = ({ title, description, imageurl, newsurl, publishdate, source, author }) => {
  // Format the date nicely
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown date";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  // Handle missing image
  const defaultImage = "https://via.placeholder.com/640x360?text=No+Image+Available";
  
  return (
    <div className="news-item">
      <div className="card news-card">
        <div className="source-badge">
          <span>{source || "Unknown"}</span>
        </div>
        
        <div className="image-container">
          <img
            src={imageurl || defaultImage}
            className="card-img-top"
            alt={title || "News image"}
            onError={(e) => {e.target.src = defaultImage}}
          />
          <div className="image-overlay"></div>
        </div>
        
        <div className="card-body">
          <h5 className="card-title">{title || "No title available"}</h5>
          
          <p className="card-text description">
            {description || "No description available"}
          </p>
          
          <div className="card-footer">
            <div className="meta-info">
              <div className="publish-date">
                <i className="fas fa-calendar-alt"></i>
                <span>{formatDate(publishdate)}</span>
              </div>
              
              {author && (
                <div className="author">
                  <i className="fas fa-user"></i>
                  <span>{author.length > 20 ? author.substring(0, 20) + '...' : author}</span>
                </div>
              )}
            </div>
            
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn read-more-btn"
            >
              Read More <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
