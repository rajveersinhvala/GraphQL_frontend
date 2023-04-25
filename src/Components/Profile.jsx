import React from "react";

const Profile = () => {
  return (
    <>
      <div className="container my-container">
        <div className="center-align">
          <img
            className="circle"
            style={{ border: "2px solid", marginTop: "10px" }}
            src="https://robohash.org/test.png?size=200x200"
            alt="pic"
          />
          <h5>User Name</h5>
          <h6>User Email</h6>
        </div>
        <blockquote>
          <h6>
            Quote - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h6>
          <p className="right-align"> ~ Author Name</p>
        </blockquote>
      </div>
    </>
  );
};

export default Profile;
