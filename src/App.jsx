import React from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import Footer from './components/footer';

function HomePage() {
  return (
    <div className="home-page">
      <Sidebar />
      <Navbar />
      <Footer />

    </div>
  );
}

export default HomePage;