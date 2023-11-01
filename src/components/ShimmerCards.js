import React, { useState, useEffect } from "react";
import "../App.css"; // Import your CSS file for styles

const ShimmerCards = () => {
  return (
    <div className="card-container">
      {Array(12).fill("").map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-line shimmer-title"></div>
          <div className="shimmer-line shimmer-content"></div>
          <div className="shimmer-line shimmer-content"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerCards;
