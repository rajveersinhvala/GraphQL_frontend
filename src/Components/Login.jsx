import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../GqlOpr/mutations";

const Login = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({});

  const [signinUser, { data, loading, error }] = useMutation(LOGIN_USER);

  if (loading) return <h1>Loading...</h1>;

  if (error) {
    console.log("🚀 ~ file: Signup.jsx:14 ~ Signup ~ error:", error.message);
  }

  if (data) {
    localStorage.setItem("token", data.user.token);
    navigate("/");
  }

  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setFormdata({
      [e.target.name]: "",
    });
    signinUser({
      variables: {
        usersingin: formdata,
      },
    });
  };

  return (
    <>
      <div className="container my-container">
        {error && <div className="red card-panel">{error.message}</div>}
        <h5>Login</h5>
        <form onSubmit={(e) => handlesubmit(e)}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handlechange(e)}
            required
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => handlechange(e)}
            required
          />
          <Link to="/signup">
            <p style={{ margin: "2px" }}>Don't have acoount ? </p>
          </Link>
          <button className="btn #3949ab indigo darken-1" type="submit">
            Log in
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
