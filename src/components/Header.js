import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



function Navigation() {
    return (
        <Navbar expand="md">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Nav className="m-auto">
                <Nav.Link id="nav-item" href="/" >Home</Nav.Link>
                <Nav.Link id="nav-item" href="/cv">CV</Nav.Link>
                <Nav.Link id="nav-item" href="/research">Research</Nav.Link>
                {/* <Nav.Link id="nav-item" href="#blog" >Blog</Nav.Link>
                <Nav.Link id="nav-item" href="#photos">Fun Stuff</Nav.Link> */}
              </Nav>
          </Container>
        </Navbar>
    );
  }
  
  export default Navigation;