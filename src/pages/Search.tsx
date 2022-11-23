import { useParams } from 'react-router-dom';
import SearchResult from '../components/SearchResult';
import Popular from '../components/Popular';

const Search = () => {
  const { keyword } = useParams();

  return (
    <main>
      <SearchResult keyword={keyword} />
      <Popular />
    </main>
  );
};

export default Search;
