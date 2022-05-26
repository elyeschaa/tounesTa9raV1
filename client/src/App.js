//Packages
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

//Components
import Auteurcelebre from "./components/Auteur/Auteurcelebre";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import BookCard from "./components/BookCard/BookCard";

//Pages
import Home from "./pages/Home/Home";
import BookDescription from "./pages/BookDescription/BookDescription";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [input, setInput] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    axios
      .get("/api/books/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })

      .catch((err) => console.log(err));
  }, []);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <Nav
        input={input}
        handleInput={handleInput}
        rating={rating}
        handleRating={handleRating}
      />
      <Switch>
        <Route exact path="/ateurCelebre" render={() => <Auteurcelebre />} />
        <Route
          path="/bookList"
          render={() => (
            <BookCard books={books} input={input} rating={rating} />
          )}
        />
        <Route
          exact
          path="/"
          render={() => <Home books={books} loading={loading} />}
        />

        <Route
          path="/bookDescription/:id"
          render={() => <BookDescription books={books} />}
        />

        <Route path="/register" render={() => <Register />} />
        <Route path="/login" render={() => <Login />} />
      </Switch>
    </div>
  );
}

export default App;
