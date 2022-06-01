import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Navbar, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import isAuth from "../../middlewares/isAuth";

const Nav = ({ input, handleInput, rating, handleRating, cartItems }) => {
  const [logged, setLogged] = useState(false);
  const history = useHistory();

  useEffect(() => {
    isAuth() ? setLogged(true) : setLogged(false);
  });

  const ateurNavigate = () => {
    history.push("/ateurCelebre");
  };

  const bookListNavigate = () => {
    history.push("/bookList");
  };

  const cartNavigate = () => {
    history.push("/checkout");
  };

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/cover");
    history.go(0);
  };

  console.log("besssssemmmmmmmm", cartItems);

  return (
    <div>
      {logged ? (
        <Navbar bg="black" variant="dark">
          <Container id="container">
            <Navbar.Brand>
              <img
                alt=""
                src="http://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              TounesTa9ra
              <div onClick={() => history.push("/bookList")}>
                <input
                  style={{ marginLeft: "400px" }}
                  placeholder="search for a book here"
                  value={input}
                  onChange={handleInput}
                />
                <ReactStars
                  count={5}
                  value={rating}
                  onChange={handleRating}
                  size={32}
                  activeColor="#ffd700"
                  emptyIcon={<i className="far fa-star"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                />
              </div>
            </Navbar.Brand>
            <div className="my-links">
              <Link>
                <h5 onClick={bookListNavigate}>Book List</h5>
              </Link>
              <Link>
                <h5 onClick={ateurNavigate}>Ateur Celebres</h5>
              </Link>
              <Link onClick={cartNavigate}>
                <li className="nav-item">
                  <a className="nav-link" href="/cart">
                    CART : {cartItems.length} Items
                  </a>
                </li>
              </Link>
              <Link>
                <h5 onClick={logout}>Logout</h5>
              </Link>
            </div>
          </Container>
        </Navbar>
      ) : (
        <Navbar bg="#22559c" variant="dark">
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
