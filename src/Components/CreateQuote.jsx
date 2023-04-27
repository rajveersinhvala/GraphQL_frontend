import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_QUOTE } from "../GqlOpr/mutations";
import { GET_ALL_QUOTES } from "../GqlOpr/queries";

const CreateQuote = () => {
  const [createQuote, { data, loading, error }] = useMutation(CREATE_QUOTE, {
    refetchQueries: [GET_ALL_QUOTES, "getallquotes"],
  });

  const [quote, setQuote] = useState();

  const handlesubmit = (e) => {
    e.preventDefault();
    createQuote({
      variables: {
        name: quote,
      },
    });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.log(error.message);
  }

  return (
    <>
      <div className="container my-container">
        {error && <div className="red card-panel">{error.message}</div>}
        {data && <div className="green card-panel">{data.quote}</div>}
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
