import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getAllProduct from "../utils/getAllProduct";
import Preview from "../components/Preview";
import Recommendation from "../components/Recommendation";

const Search = () => {
  const { keyword } = useParams();

  const [searchResult, setSearchResult] = useState([]);
  const [sortingMethod, setSortingMethod] = useState("relevant");

  async function gerResults() {
    // get all products
    const allProduct = await getAllProduct();

    // filter
    // description
    // title
    // category
    sortResults(allProduct, sortingMethod);
  }

  async function sortResults(allProduct, method) {
    

    switch (method) {
      case "relevant":
      case "price":
      case "rating":

    }
    // sort by relevance (default)
    // sort by price (low to high)
    // sort by price (high to low)
    // sort by rate
    // sort by count
    // if result is empty, show "no result found"
  }

  useEffect(() => {
    gerResults();
  }, []);

  return (
    <main>
      <p>ui for method</p>
      <p>{searchResult}</p>
      <Recommendation />
    </main>
  );
};

export default Search;
