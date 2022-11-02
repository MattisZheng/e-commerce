const Header = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="searchBox">
        <label htmlFor=""></label>
        <input type="text" />
        <button>Search</button>
      </div>
      <div>
        <div>Cart</div>
        <div>Auth</div>
      </div>
    </div>
  );
};

export default Header;
