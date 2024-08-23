// src/pages/Login.js
import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const handleLogin = (email, password) => {
    console.log('User logged in with:', email, password);
    // Implement login logic here
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;

