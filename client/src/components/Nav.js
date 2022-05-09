import React, { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, history, useHistory, Redirect } from "react-router-dom";

import isAuth from "../middlewares/isAuth";

const Nav = () => {
  const [logged, setLogged] = useState(false);
  const history = useHistory();

  useEffect(() => {
    isAuth() ? setLogged(true) : setLogged(false);
    console.log(isAuth());
  });

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/cover");
    history.go(0)
  };

  return (
    <div>
      {logged ? (
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
              <Link>
                <h5 onClick={logout}>Logout</h5>
              </Link>
            </div>
          </Container>
        </Navbar>
      ) : (
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
                <h5>sign up</h5>
              </Link>
              <Link to="/login" className="link">
                <h5>sign in</h5>
              </Link>
            </div>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default Nav;
