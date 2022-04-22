import React from "react";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";

const Register = () => {
  return (
    <div className="register">
      <h1>
        Welcome To Our <span style={{ color: "brown" }}>Community</span>{" "}
      </h1>
      <h1>
        <FaBook style={{ color: "brown" }} />
      </h1>
      <div className="my-input">
        <label>FirstName</label>
        <input type="text" name="firstname" />
        <label>LastName</label>
        <input type="text" name="lastname" />
        <label>Email</label>
        <input type="text" name="email" />
        <label>Adress</label>
        <input type="text" />
        <label>Phone Number</label>
        <input type="number" name="phonenumber" />
        <label>Zipcode</label>
        <input type="number" name="zipcode" />
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <div className="last">
        <button>Sign Up</button>
        <h5>Already a member ? </h5>

        <h5>
          <Link to="/login" style={{ color: "brown", textDecoration: "none" }}>
            Sign In
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Register;
