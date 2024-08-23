// src/pages/JobList.js
import React from 'react';
import JobCard from '../components/JobCard';

const JobList = () => {
  const jobs = [
    { title: 'Electrician', description: 'Install and repair electrical systems.', location: 'New Delhi' },
    { title: 'Plumber', description: 'Fix leaks and install plumbing.', location: 'Mumbai' },
    { title: 'Carpenter', description: 'Build and repair wooden structures.', location: 'Chicago' },
    { title: 'Watchmen', description: 'keep an eye on the entry and exit of the society.', location: 'Noida' },
  ];

  return (
    <div>
      <h1>Available Jobs</h1>
      <div>
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            description={job.description}
            location={job.location}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;

