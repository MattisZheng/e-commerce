import { Link } from 'react-router-dom';
import SearchBox from '../components/SearchBox';

const Header = () => {
  return (
    <header className="flex bg-gray-500 justify-center">
      <div className="border-solid border-2 m-2">
        <Link to="/">Home</Link>
      </div>
      <div className="border-solid border-2 m-2">
        <SearchBox />
      </div>
      <div className="border-solid border-2 m-2 flex flex-col justify-evenly ">
        <div>Auth</div>
        <div>Cart</div>
      </div>
    </header>
  );
};

export default Header;
