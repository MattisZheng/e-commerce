import Recommendation from './Recommendation';

const SearchBox = () => {

  // go to url with keyword

  return (
    <form className="flex">
      <input type="text" id="keyword" placeholder="search" autoComplete="off" className="rounded-full pl-4" />
      <button>
        <img src="../../public/images/search_512.png" alt="search" className="w-8 m-1" />
      </button>
    </form>
  );
};

export default SearchBox;
