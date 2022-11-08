import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section className="grid grid-cols-4">
      <div className="">
        <Link to="/search/electronics">Electronics</Link>
      </div>
      <div>
        <Link to="/search/electronics">Jewelry</Link>
      </div>
      <div>
        <Link to="/search/electronics">Man's</Link>
      </div>
      <div>
        <Link to="/search/electronics">Women's</Link>
      </div>
    </section>
  );
};

export default Category;
