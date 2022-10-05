import { useState } from "react";

const Nav = () => {
  const [search, setSearch] = useState("search box");

  return (
    <div className="flex justify-between p-5">
      <div>
        <a href="">Home</a>
      </div>
      <div>
        <div className="border-2" >
          <label htmlFor=""></label>
          <input type="text" placeholder={search} />
          <button>Search</button>
        </div>
        <div>Recommendations</div>
      </div>
      Login Cart
    </div>
  );
};

export default Nav;
