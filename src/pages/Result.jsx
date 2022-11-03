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
    try {
    }
    catch (err) {
      console.err("err", err);
    }
  }

  useEffect(() => {
    getResults(keyword);
    console.log("getResults");
  }, []);

  return <div>{data}</div>;
};

export default Result;
