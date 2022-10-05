import { useState } from "react";

const Nav = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-between p-5">
      <div>
        <a href="">Home</a>
      </div>
      <div>
        <div>
          <label htmlFor=""></label>
          <input type="text" />
          <button>Search</button>
        </div>
        <div>Recommendations</div>
      </div>
      Login Cart
    </div>
  );
};

export default Nav;
