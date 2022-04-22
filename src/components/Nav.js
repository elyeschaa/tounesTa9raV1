import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container id="container">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="http://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          TounesTa9ra
        </Navbar.Brand>
        <div className="my-links">
        <Link to="/register" className="link">
          <h5>sign in</h5>
        </Link>
        <Link to="/login" className="link">
          <h5>sign up</h5>
        </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Nav;
