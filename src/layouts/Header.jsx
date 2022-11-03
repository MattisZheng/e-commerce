import Cart from "../components/Cart";
import Auth from "../components/Auth";

const Header = () => {
  return (
    <header>
      <h1>
        <a href="">Home</a>
      </h1>
      
      <div>
        <Cart/>
      </div>
    </header>
  );
};

export default Header;
