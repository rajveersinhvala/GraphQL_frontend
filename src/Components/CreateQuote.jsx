import React, { useState } from "react";

const CreateQuote = () => {
  const [quote, setQuote] = useState();

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("🚀 ~ file: CreateQuote.jsx:5 ~ CreateQuote ~ quote:", quote);
  };

  return (
    <>
      <div className="container my-container">
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            placeholder="Enter a quote"
          />
          <button className="btn #3949ab indigo darken-1">
            Create a Quote
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateQuote;
