import { Link } from 'react-router-dom';

import SearchBox from '../components/SearchBox';
import Recommendation from '../components/Recommendation';

const Header = () => {
  return (
    <header className="flex bg-gray-500 justify-center">
      <div>
        <Link to="/">
          Home
        </Link>
      </div>
      <div className="">
        <SearchBox />
        <Recommendation />
      </div>
      <div className=""></div>
    </header>
  );
};

export default Header;
