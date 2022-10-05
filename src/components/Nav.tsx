import { useState } from "react";

const Nav = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <a href="">Home</a>
      <div>
        <label htmlFor=""></label>
        <input type="text" />
        <button>Search</button>
      </div>
      Recommendations Login Cart
    </div>
  );
};

export default Nav;
