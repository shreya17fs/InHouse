// src/pages/Signup.js
import React from 'react';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  const handleSignup = (email, password) => {
    console.log('User signed up with:', email, password);
    // Implement signup logic here
  };

  return (
    <div>
      <SignupForm onSignup={handleSignup} />
    </div>
  );
};

export default Signup;
