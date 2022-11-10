import { Link } from "react-router-dom";

import SearchBox from "../components/SearchBox";
import Recommendation from "../components/Recommendation";
import Auth from "../components/Auth";
import Cart from "../components/Cart";

const Header = () => {
  return (
    <header className="flex h-24 bg-slate-500 items-center">
      <div className="flex-auto">
        <Link to="/" className="relative">
          <img src="../../public/polaroid-camera_512.png" alt="" className="w-20" />
        </Link>
      </div>
      <div className="flex-auto">
        <SearchBox />
        <Recommendation />
      </div>
      <div className="flex-auto">
        <Auth />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
