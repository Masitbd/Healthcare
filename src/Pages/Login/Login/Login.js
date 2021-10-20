import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { singnInUsingGoogle } = useAuth();
  const auth = getAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    singnInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 character long");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
    history.push("/");
  };
  return (
    <div className="login-form container">
      <Card className="bg-secondary my-4">
        <h2>Please login</h2>
        <form onSubmit={handleRegistration}>
          <input
            type="email"
            onBlur={handleEmailChange}
            name=""
            id=""
            placeholder="Enter your email"
          />
          <br />
          <input
            className="my-2"
            type="password"
            onBlur={handlePasswordChange}
            name=""
            placeholder="Enter password"
            id=""
          />
          <br />
          {error}
          <br />
          <input
            className="btn btn-danger w-100"
            type="submit"
            value="Submit"
          />
          {/*  {history.push("/")} */}
        </form>
        <p>
          New to Health care system{" "}
          <Link to="/register">Create New Account</Link>
        </p>
        <button className="btn btn-warning " onClick={handleGoogleLogin}>
          Google signin
        </button>
      </Card>
    </div>
  );
};

export default Login;
