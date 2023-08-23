import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container_SignUp">
      <form />
      <h2 className="Heading">Sign Up</h2>
      <br />
      <li>
        <label>First Name :</label>
        <input type="text" placeholder="Enter your first name" required />
      </li>
      <br />
      <li>
        <label>Last Name :</label>
        <input type="text" placeholder="Enter your last name" required />
      </li>
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
      <li>
        <label>Confirm Password :</label>
        <input type="password" placeholder="Enter your password" required />
      </li>
      <br />
      <li>
        <label>Contact Number :</label>
        <input type="number" placeholder="Enter your contact number" required />
      </li>
      <br />
      <center>
        <button className="logIn" type="submit">
          Sign Up
        </button>
      </center>

      <h5>
        Already a member? <Link to="/Signin">Sign&nbsp;In</Link>
      </h5>

      <form />
    </div>
  );
};

export default SignUp;
