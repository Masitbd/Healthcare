import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { singnInUsingGoogle } = useAuth();
  return (
    <div>
      <h2>Please login</h2>
      <button onClick={singnInUsingGoogle}>Google signin</button>

      <Link to="/register">New user</Link>
    </div>
  );
};

export default Login;
