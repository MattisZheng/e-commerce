import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section>
      <Link to="/search/electronics">Electronics</Link>
      <Link to="/search/electronics">Jewelry</Link>
      <Link to="/search/electronics">Man's</Link>
      <Link to="/search/electronics">Women's</Link>
    </section>
  );
};

export default Category;
