import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import BNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <BNavbar bg="dark" variant="dark">
      <Container>
        <BNavbar.Brand className="text-info" href="/">
          Shopping cart
        </BNavbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            active={pathname === "/tour"}
            href="#"
            role="link"
            onClick={() => navigate("/tour")}
          >
       Event location
          </Nav.Link>
          <Nav.Link
            active={pathname === "/cart"}
            href="#"
            onClick={() => navigate("/cart")}
            role="link"
          >
            My Cart
          </Nav.Link>
        </Nav>
      </Container>
    </BNavbar>
  );
};

export default Navbar;
