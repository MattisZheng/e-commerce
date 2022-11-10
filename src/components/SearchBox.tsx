import { useState, useEffect } from "react";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");

  function handleChange(e: any) {
    setKeyword(e.target.value);
  }

  // go to url with keyword
  function handleSubmit(e: any) {
    e.preventDefault();
    location.href = `/search/${keyword}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <label htmlFor="keyword"></label>
      <input type="text" id="keyword" placeholder="search" autoComplete="off" onChange={handleChange} className="rounded-full w-4/5 " />
      <button>
        <img src="../../public/search_512.png" alt="" className="w-7 m-1" />
      </button>
    </form>
  );
};

export default SearchBox;
