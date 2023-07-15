import { Button, Container, Nav, Navbar } from "react-bootstrap";
import img_logo from "../../assets/img/img_logo.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg md" className="bg-navbar">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img src={img_logo} alt="" className="w-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#ourservices">Our Services</Nav.Link>
            <Nav.Link href="#whyus">Why Us</Nav.Link>
            <Nav.Link href="#testimonial">Testimonial</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>
          <Button className="bg-success">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
