import React from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import LoginForm from './components/forms/loginForm';
import SignInForm from './components/forms/signinForm';
import HomePage from './page/Homepage/index';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>


      <Container fluid className="p-0">
        <Row className="m-0">
          <Col md={2} className="position-fixed p-0 ">
            <Sidebar />
          </Col>
          <Col md={10} className="p-0 offset-2 img" >
            <Navbar />
            <Outlet />
            <Footer />
          </Col>
        </Row>
      </Container>
      {/* <LoginForm />
      <SignInForm /> */}
    </>
  );
}

export default App;