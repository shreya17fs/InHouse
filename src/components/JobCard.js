// src/components/JobCard.js
import React from 'react';
import './JobCard.css';

const JobCard = ({ title, description, location }) => {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

export default JobCard;
