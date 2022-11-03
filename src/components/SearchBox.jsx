import {useState, useEffect} from 'react';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');

  return (
    
      <div className="searchBox">
        <label htmlFor=""></label>
        <input type="text" />
        <button>Search</button>
      </div>
  );
};

export default SearchBox;
