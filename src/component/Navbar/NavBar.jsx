import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home">Our Services</Nav.Link>
            <Nav.Link href="#features">Why Us</Nav.Link>
            <Nav.Link href="#pricing">Testimonial</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Button className="bg-success">Register</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
