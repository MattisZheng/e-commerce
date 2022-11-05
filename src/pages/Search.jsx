import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getAllProduct from "../utils/getAllProduct";
import Preview from "../components/Preview";
import Recommendation from "../components/Recommendation";

const Search = () => {
  const { keyword } = useParams();

  const [sortingMethod, setSortingMethod] = useState("relevant");

  async function gerResults() {
    const allProduct = await getAllProduct();
    console.log(allProduct);
    // filter
    sortResults(allProduct, sortingMethod);
    // title
    // description
    // category
  }

  async function sortResults(allProduct, method) {
    // sort by relevance (default)
    // sort by price
    // sort by rate
    // sort by count
    // if result is empty, show "no result found"
  }

  useEffect(() => {
    gerResults();
  }, []);

  return (
    <main>
      search
      <p>{keyword}</p>
      <Recommendation />
    </main>
  );
};

export default Search;
