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
        <div>Cart</div>
        <div>Auth</div>
      </div>
    </header>
  );
};

export default Header;
