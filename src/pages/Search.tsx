import { useParams } from "react-router-dom";
import SearchResult from "../components/SearchResult";
import Recommendation from "../components/Banner";

const Search = () => {
  const { keyword } = useParams();

  return (
    <main>
      <SearchResult keyword={keyword} />
    </main>
  );
};

export default Search;
