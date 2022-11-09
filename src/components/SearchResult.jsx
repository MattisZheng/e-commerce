import { useState, useEffect } from "react";
import getAllProduct from "../utils/getAllProduct";
import Preview from "./Preview";

function SearchResult({ keyword }) {
  const [searchResult, setSearchResult] = useState([]);
  const [sortingMethod, setSortingMethod] = useState("relevant");

  async function gerResults() {
    // get all products
    const allProduct = await getAllProduct();
    // get filtered products
    async function filterResults(allProduct) {
      let filteredResults = [];
      // filter by title
      filteredResults = allProduct.filter((item) => {
        return item.title.toLowerCase().includes(keyword.toLowerCase());
      });
      return filteredResults;
    }

    const filteredResults = await filterResults(allProduct);

    // sort filtered products
    async function sortResults(filteredResults, sortingMethod) {
      switch (sortingMethod) {
        case "relevant":
          return filteredResults;
        case "price-high-low":
          return filteredResults.sort((a, b) => b.price - a.price);
        case "price-low-high":
          return filteredResults.sort((a, b) => a.price - b.price);
        case "rating":
          return filteredResults.sort((a, b) => b.rating.count - a.rating.count);
      }

      // sort by relevance (default)
      // sort by low to high
      // sort by high
      // sort by rate
      // sort by count
      // if result is empty, show "no result found"
    }

    const sortedResults = await sortResults(filteredResults, sortingMethod);

    setSearchResult(sortedResults);
  }

  useEffect(() => {
    gerResults();
  }, [searchResult]);

  function handleChange(e) {
    setSortingMethod(e.target.value);
  }

  return (
    <div>
      <div>
        <label htmlFor="method">sort by</label>
        <select name="method" id="" onChange={handleChange}>
          <option value="relevant">relevance</option>
          <option value="price-high-low">high</option>
          <option value="price-low-high">low</option>
          <option value="rating">rating</option>
        </select>
      </div>
      <div className="grid grid-cols-3">
        {
          // show search result
          searchResult
            ? searchResult.map((item) => {
                return (
                  <div key={item.id}>
                    <Preview
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      image={item.image}
                      rate={item.rating.rate}
                      count={item.rating.count}
                      className="text-gray-300"
                    />
                  </div>
                );
              })
            : "no result found"
        }
      </div>
    </div>
  );
}

export default SearchResult;
