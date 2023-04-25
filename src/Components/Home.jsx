import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_QUOTES } from "../GqlOpr/queries";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);

  if (loading) return <h1>Loading...</h1>;

  if (error) {
    console.log("🚀 ~ file: Home.jsx:11 ~ Home ~ error:", error.message);
  }

  if (data.quotes.length == 0) {
    return <h1>No Data</h1>;
  }

  return (
    <>
      <div className="container my-container">
        {data.quotes.map((quote, ind) => {
          return (
            <blockquote key={ind}>
              <h6>{quote.name}</h6>
              <p className="right-align">
                {" "}
                ~ {quote.by.firstname ? quote.by.firstname : "NULL"}
              </p>
            </blockquote>
          );
        })}
      </div>
    </>
  );
};

export default Home;
