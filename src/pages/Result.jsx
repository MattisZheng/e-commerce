import { useState, useEffect } from "react";

const Result = ({ keyword }) => {
  const [results, setResults] = useState([]);

  async function getAllProducts() {
    try {
      const res = await fetch(`fetch('https://fakestoreapi.com/products`); // fetch from api
      const data = await res.json(); // parse json
      setResults(data); // set data to state
    } catch (err) {
      console.error("err", err);
    }
  }

  async function getResults(keyword) {
    results.filter((result) => {
      if (result.title.includes(keyword)) {
        return result;
      }
    });
  }

  useEffect(() => {
    getAllProducts(keyword);
    console.log("getResults");
  }, []);

  return <div>{data}</div>;
};

export default Result;
