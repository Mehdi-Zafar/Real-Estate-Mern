import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="container_SignIn">
      <form />
      <h2 className="Heading">Login</h2>
      <br />
      <li>
        <label>Email :</label>
        <input type="email" placeholder="Enter your email" required />
      </li>
      <br />
      <li>
        <label>Password :</label>
        <input type="password" placeholder="Enter your password" required />
      </li>
      <br />
      <center>
        <button className="logIn" type="submit">
          Sign In
        </button>
      </center>

      <h5>
        Don't have an account? <Link to="/signup">Sign&nbsp;Up</Link>
      </h5>

      <form />
    </div>
  );
};

export default SignIn;
