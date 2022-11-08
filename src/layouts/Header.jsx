import { useState } from "react";
import { Link } from "react-router-dom";

import SearchBox from "../components/SearchBox";
import Recommendation from "../components/Recommendation";
import Auth from "../components/Auth";
import Cart from "../components/Cart";

const Header = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token") ? sessionStorage.getItem("token") : sessionStorage.setItem("token", ""));

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="flex h-24 bg-slate-500">
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div>
        <SearchBox />
        <Recommendation />
      </div>
      <div>
        <Auth token={token} />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
