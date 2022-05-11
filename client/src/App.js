import "./App.css";
import Nav from "./components/Nav";
import Cover from "./components/Cover";
import { Switch, Route, Redirect } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
// import Home from "./components/User/Landing/Home";

import isAuth from "./middlewares/isAuth";

import Home from "./pages/Home/Home.js";
// import BookDescription from "./pages/BookDescription/BookDescription.js";

import { useEffect, useState } from "react";

import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/books/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Nav />
      <Switch>
        {/* <Route path="/bookDescription" render={() => <BookDescription />} /> */}
        <Route
          exact
          path="/"
          render={() => <Home books={books} loading={loading} />}
        />
      </Switch>

      {/* {isAuth() ? <Redirect to="/home" /> : <Redirect to="/cover" />}
      <Switch>
        <Route path="/register" render={() => <Register />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/cover" render={() => <Cover />} />
        <Route path="/home" render={() => <Home />} />
      </Switch> */}
    </div>
  );
}

export default App;
