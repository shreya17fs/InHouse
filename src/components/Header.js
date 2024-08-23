// src/components/Header.js
import React from 'react';

const Header = ({ setPage }) => {
  return (
    <header>
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('jobs')}>Jobs</button>
      <button onClick={() => setPage('profile')}>Profile</button>
      <button onClick={() => setPage('login')}>Login</button>
      <button onClick={() => setPage('signup')}>Signup</button>
      <button onClick={() => setPage('hire')}>Hire</button>
    </header>
  );
};

export default Header;
