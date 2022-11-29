import { useState } from 'react';
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
    <form onSubmit={handleSubmit} className="border-solid border-2 m-2">
      <input type="text" id="keyword" placeholder="search" autoComplete="off" onChange={handleChange} className="rounded-full pl-4" />
      <button className="border-solid border-2 m-2">Search</button>
      <Recommendation />
    </form>
  );
};

export default SearchBox;
