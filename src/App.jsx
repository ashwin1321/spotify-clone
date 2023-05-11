import React from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import { Container, Row, Col } from 'reactstrap';
import { Outlet } from 'react-router-dom';

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
    </>
  );
}

export default App;