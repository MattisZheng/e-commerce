import Header from "../layouts/Header";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="recommendation"></div>
      <div className="categories">
        <a href="">Electronics</a>
        <a href="">Jewelry</a>
        <a href="">Man's</a>
        <a href="">Women's</a>
      </div>
      <Product item={1} />
    </div>
  );
};

export default Home;
