import { useState, useEffect } from "react";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  // go to url with keyword
  const handleSubmit = (e) => {
    e.preventDefault();
    location.href = `/search/${keyword}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="keyword"></label>
      <input type="text" id="keyword" onChange={handleChange} />
      <button>Search</button>
    </form>
  );
};

export default SearchBox;
