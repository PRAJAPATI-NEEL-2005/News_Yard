import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="spinner-inner"></div>
      </div>
      <p className="loading-text">Loading news...</p>
    </div>
  );
};

export default Spinner;
