import "./App.css";
import Nav from "./components/Nav";
import Cover from "./components/Cover";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" render={()=><Cover />} />
        <Route path="/register" render={()=><Register/>} />
        <Route path="/login" render={()=><Login/>} />

      </Switch>
    </div>
  );
}

export default App;
