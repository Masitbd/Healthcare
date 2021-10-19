import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>please register</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="your email" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
          />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Re-Enter your password"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <Link to="/login">Already registeded</Link>
      </div>
    </div>
  );
};

export default Register;
