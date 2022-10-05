import { useState } from "react";

const Nav = () => {
  // const text = navigator.clipboard.readText();

  const [search, setSearch] = useState("text");

  return (
    <div className="flex justify-between p-5">
      <div>
        <a href="" className="text-3xl">
          Home
        </a>
      </div>
      <div>
        <div className="border-2">
          <label htmlFor=""></label>
          <input type="text" placeholder={search} />
          <button>Search</button>
        </div>
        <div>Recommendations</div>
      </div>
      <div>Login Cart</div>
    </div>
  );
};

export default Nav;
