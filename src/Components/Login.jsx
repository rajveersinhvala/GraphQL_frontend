import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formdata, setFormdata] = useState({});

  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("🚀 ~ file: Login.jsx:16 ~ handlesubmit ~ formdata:", formdata);
    setFormdata({
      [e.target.name]: "",
    });
  };

  return (
    <>
      <div className="container my-container">
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
