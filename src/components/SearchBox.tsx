import { useState, useEffect } from 'react';
import Recommendation from './Recommendation';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');

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
      <input type="text" id="keyword" placeholder="search" autoComplete="off" onChange={handleChange} className="rounded-full pl-4" />
      <button>
        <img src="../../public/images/search_512.png" alt="search" className="w-8 m-1" />
      </button>
    </form>
  );
};

export default SearchBox;
