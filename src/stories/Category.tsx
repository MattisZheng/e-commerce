import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section className="grid grid-cols-4">
      <div className="bg-green-400 hover:bg-green-600">
        <Link to="/search/electronics">Electronics</Link>
      </div>
      <div className="bg-yellow-300	hover:bg-yellow-500">
        <Link to="/search/electronics">Jewelry</Link>
      </div>
      <div className="bg-blue-500 hover:bg-blue-700">
        <Link to="/search/electronics">Man's</Link>
      </div>
      <div className="bg-red-500 hover:bg-red-700">
        <Link to="/search/electronics">Women's</Link>
      </div>
    </section>
  );
};

export default Category;
