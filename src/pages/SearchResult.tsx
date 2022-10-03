import Nav from "../components/Nav/Nav";
import Side from "../components/Side/Side";
import Footer from "../components/Footer/Footer";

const SearchResult = () => {
  async function getProducts() {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
  }

  async function searchProduct() {}

  return (
    <div>
      <Nav />
      <Side />
      <Footer />
    </div>
  );
};

export default SearchResult;
