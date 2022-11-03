import Cart from "../components/Cart";

const Header = () => {
  return (
    <header>
      <h1>
        <a href="">Home</a>
      </h1>
      <div className="searchBox">
        <label htmlFor=""></label>
        <input type="text" />
        <button>Search</button>
      </div>
      <div>
        <Cart/>
      </div>
    </header>
  );
};

export default Header;
