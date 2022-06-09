import React from "react";
import { FaBook } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Actions/actions";
import { useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [newUser, setNewUser] = useState({});
  const userLogin = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    dispatch(login({ newUser, history }));
  };

  return (
    <div className="register">
      <h1>
        Welcome To Our <span style={{ color: "#9fd3c7" }}>Community</span>{" "}
      </h1>
      <h1>
        <FaBook style={{ color: "#9fd3c7" }} />
      </h1>
      <div className="my-input">
        <label>Email</label>
        <input type="text" name="email" onChange={userLogin} />

        <label>Password</label>
        <input type="password" name="password" onChange={userLogin} />
      </div>
      <div className="last">
        <button style={{backgroundColor:"#9fd3c7"}} onClick={handleLogin}>Connect</button>
      </div>
    </div>
  );
};
export default Login;
