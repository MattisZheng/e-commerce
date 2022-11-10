import { useState, useEffect } from "react";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  // go to url with keyword
  function handleSubmit(e) {
    e.preventDefault();
    location.href = `/search/${keyword}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <label htmlFor="keyword">
        <input type="text" id="keyword" placeholder="search" autoComplete="off" onChange={handleChange} className="rounded-full w-4/5" />
      </label>
      <button>
        <img src="../../public/search.png" alt="" className="w-7" />
      </button>
    </form>
  );
};

export default SearchBox;
