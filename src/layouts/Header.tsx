import { Link } from 'react-router-dom';

import SearchBox from '../components/SearchBox';
import Recommendation from '../components/Recommendation';

const Header = () => {
  return (
    <header className="flex bg-gray-500 justify-center">
      <div className="flex border-solid border-2 m-2">
        <Link to="/" className="text-center align-middle hover:bg-gray-700">
          Home
        </Link>
      </div>
      <div className="border-solid border-2 m-2">
        <SearchBox />
        <Recommendation />
      </div>
      <div className="border-solid border-2 m-2">
        <div>Auth</div>
        <div>Cart</div>
      </div>
    </header>
  );
};

export default Header;
