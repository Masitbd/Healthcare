import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { singnInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    singnInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };
  return (
    <div className="login-form container">
      <div>
        <h2>Please login</h2>
        <form action="">
          <input type="email" name="" id="" placeholder="Enter your email" />
          <br />
          <input type="password" name="" id="" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          New to Health care system{" "}
          <Link to="/register">Create New Account</Link>
        </p>
        <button onClick={handleGoogleLogin}>Google signin</button>
      </div>
    </div>
  );
};

export default Login;
