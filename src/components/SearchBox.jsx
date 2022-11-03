import { useState, useEffect } from "react";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    console.log("keyword", keyword);
  }, [keyword]);

  return (
    <div className="searchBox">
      <label htmlFor=""></label>
      <input type="text" />
      <button>Search</button>
    </div>
  );
};

export default SearchBox;
