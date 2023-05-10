import React from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import LoginForm from './components/forms/loginForm';
import SignInForm from './components/forms/signinForm';
import './App.css';

function HomePage() {
  return (
    <>
      <div className="d-grid app">
        <Sidebar />
        <div className='content'>
          <Navbar />
          <Footer />
        </div>
      </div>
      <LoginForm />
      {/* <SignInForm /> */}
    </>
  );
}

export default HomePage;