import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';



function Navigation() {
    return (
        <Navbar expand="md">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Nav className="m-auto">
                <Nav.Link as={Link} to="/" id="nav-item">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/cv" id="nav-item">
                  CV
                </Nav.Link>
                <Nav.Link as={Link} to="/research" id="nav-item">
                  Research
                </Nav.Link>
              </Nav>
          </Container>
        </Navbar>
    );
  }
  
  export default Navigation;