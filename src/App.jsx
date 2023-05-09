import React from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import './App.css';

function HomePage() {
  return (
    <div className="d-grid app">
      <Sidebar />
      <div className='content'>
        <Navbar />
        <br />
        <Footer />
      </div>

    </div>
  );
}

export default HomePage;