import { useState } from 'react';

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
      <input
        type="text"
        id="keyword"
        placeholder="search"
        autoComplete="off"
        onChange={handleChange}
        className="rounded-full pl-4 border-solid border-2 m-2 p-2"
      />
      <button className="border-solid border-2 m-2">Search</button>
    </form>
  );
};

export default SearchBox;
