import "./App.css";
import Nav from "./components/Nav";
import Cover from "./components/Cover";
import { Switch, Route, Redirect } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/User/Landing/Home";

import isAuth from "./middlewares/isAuth";

function App() {
  return (
    <div className="App">
      <Nav />
      {isAuth() ? <Redirect to="/home" /> : <Redirect to="/cover" />}
      <Switch>
        <Route path="/register" render={() => <Register />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/cover" render={() => <Cover />} />
        <Route path="/home" render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
