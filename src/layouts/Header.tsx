import { Link } from 'react-router-dom';

import SearchBox from '../components/SearchBox';
import Recommendation from '../components/Recommendation';

const Header = () => {
  return (
    <header className="flex bg-gray-500 justify-center">
      <div className="flex">
        <Link to="/" className="text-center align-middle hover:bg-gray-700">
          Home
        </Link>
      </div>
      <div>
        <SearchBox />
        <Recommendation />
      </div>
      <div>
        <div>Auth</div>
        <div>Cart</div>
      </div>
    </header>
  );
};

export default Header;
