import logo from './logo.svg';
import { Nav, Navbar, Container } from 'react-bootstrap';
function Header(props){


    return(
      <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
      </Navbar>
    )
}

export default Header