import { Link } from "react-router-dom";

import SearchBox from "../components/SearchBox";
import Auth from "../components/Auth";
import Cart from "../components/Cart";

const Header = ({token}) => {
  return (
    <header className="flex">
      <div>
        <h1>
          <Link to="/">Home</Link>
        </h1>
      </div>
      <div>
        <SearchBox />
      </div>
      <div>
        <Auth token={token} />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
