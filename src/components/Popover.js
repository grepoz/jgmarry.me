// Popover.js
import React from 'react';
import '../styles/popover.css';

const Popover = ({ text,imagePath }) => {
  return (
    <div className="popover-container">
      {text}
      <div className="popover">
        <img src={imagePath} alt="Popover content" />
      </div>
    </div>
  );
};

export default Popover;
