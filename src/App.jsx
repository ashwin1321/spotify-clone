import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Container, Row, Col } from 'reactstrap';
import { Outlet } from 'react-router-dom';
import PlaySongs from './components/Card/PlayCard';
import { user } from './store/recoilState'
import { useRecoilValue } from 'recoil';
import './App.css';

function App() {

  const loggedIn = useRecoilValue(user);

  return (
    <>
      <Container fluid className="p-0">
        <Row className="m-0">
          <Col lg={2} className="position-fixed p-0 d-none d-lg-block siddebar">
            <Sidebar />
          </Col>
          <Col lg={10} md={12} className="p-0 offset-lg-2  contentt" >
            <Navbar />
            <Outlet />
            <Footer />
          </Col>
          {loggedIn ? <PlaySongs /> : null}
        </Row>
      </Container>
    </>
  );
}

export default App;