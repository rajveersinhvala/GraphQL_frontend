import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SIGNUP_USER } from "../GqlOpr/mutations";

const Signup = () => {
  const [formdata, setFormdata] = useState({});

  const [signupUser, { data, loading, error }] = useMutation(SIGNUP_USER);

  if (loading) return <h1>Loading...</h1>;

  if (error) {
    console.log("🚀 ~ file: Signup.jsx:14 ~ Signup ~ error:", error.message);
  }

  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    signupUser({
      variables: {
        userNew: formdata,
      },
    });
    setFormdata({});
  };

  return (
    <>
      <div className="container my-container">
        {error && <div className="red card-panel">{error.message}</div>}
        {data && data.user && (
          <div className="green card-panel">
            {data.user.firstName} is SignUp. You can login.
          </div>
        )}
        <h5>Signup</h5>
        <form onSubmit={(e) => handlesubmit(e)}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={(e) => handlechange(e)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={(e) => handlechange(e)}
            required
          />
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
          <Link to="/login">
            <p style={{ margin: "2px" }}>Alredy have acoount ? </p>
          </Link>
          <button className="btn #3949ab indigo darken-1" type="submit">
            Sing Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
