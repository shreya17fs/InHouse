// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import JobList from './pages/JobList';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Hire from './pages/Hire'; // Import the new Hire page
import './styles/App.css';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'jobs':
        return <JobList />;
      case 'profile':
        return <Profile />;
      case 'login':
        return <Login />;
      case 'signup':
        return <Signup />;
      case 'hire': // Add this case
        return <Hire />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header setPage={setPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;


