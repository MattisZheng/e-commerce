import { Link } from 'react-router-dom';

import SearchBox from '../components/SearchBox';
import Recommendation from '../components/Recommendation';

const Header = () => {
  return (
    <header className="flex bg-teal-500 justify-center">
      <div>
        <Link to="/">
          <img src="../../public/images/polaroid-camera_512.png" alt="logo" className="w-20" />
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
