import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section>
      <Link to="/search/electronics">Electronics</Link>
      <Link>Jewelry</Link>
      <Link>Man's</Link>
      <Link>Women's</Link>
    </section>
  );
};

export default Category;
