import { useState } from "react";
import { Link } from "react-router-dom";

import SearchBox from "../components/SearchBox";
import Recommendation from "../components/Recommendation";
import Auth from "../components/Auth";
import Cart from "../components/Cart";

const Header = () => {
  return (
    <header className="flex h-24 bg-slate-500">
      <div className="flex-auto">
        <Link to="/">Logo</Link>
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
