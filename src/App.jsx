import React from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';

function HomePage() {
  return (
    <div className="home-page">
      <Sidebar />
      <Navbar />

    </div>
  );
}

export default HomePage;