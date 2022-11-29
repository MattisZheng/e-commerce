import { useState } from 'react';
import { Link } from 'react-router-dom';
import Recommendation from './Recommendation';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');

  function handleChange(e: any) {
    setKeyword(e.target.value);
  }

  return (
    <div>
      <div className="flex">
        <input type="text" id="keyword" placeholder="search" autoComplete="off" onChange={handleChange} className="rounded-full pl-4" />
        <div className="border-solid border-2 m-2">
          <Link to={`/search/${keyword}`}>Link</Link>
        </div>
      </div>
      <Recommendation />
    </div>
  );
};

export default SearchBox;
