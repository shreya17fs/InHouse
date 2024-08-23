// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Blue Collar Jobs Platform</h1>
        <p>Your gateway to finding skilled tradespeople and job opportunities.</p>
        <button onClick={() => alert('LogIn/SignUp')}>Get Started</button>
      </section>
      
      <section className="search">
        <input type="text" placeholder="Search for jobs or employers" />
        <button>Search</button>
      </section>
      
      <section className="featured">
        <h2>Featured Jobs</h2>
        <p>"Plumber"</p>
        <p>"Electrician"</p>
      </section>
      
      <section className="benefits">
        <h2>Why Choose Us?</h2>
        <div className="benefit">
          <h3>Easy to Use</h3>
          <p>Our platform is user-friendly and intuitive.</p>
        </div>
        <div className="benefit">
          <h3>Wide Reach</h3>
          <p>Connect with thousands of skilled professionals and employers.</p>
        </div>
        {/* Add more benefits */}
      </section>
      
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="step">
          <h3>1. Sign Up</h3>
          <p>Create an account to get started.</p>
        </div>
        <div className="step">
          <h3>2. Find Jobs</h3>
          <p>Search for job opportunities or post a job.</p>
        </div>
        <div className="step">
          <h3>3. Apply or Hire</h3>
          <p>Apply for jobs or connect with potential hires.</p>
        </div>
      </section>
      
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <p>"I turned from jobless to a well-paying job through InHouse."</p>
        <p>"Easiest job portal to use"</p>
      </section>
      
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: support@InHouse.com</p>
      </section>
    </div>
  );
};

export default Home;
