import Nav from "../components/Nav/Nav";
import Side from "../components/Side/Side";
import Footer from "../components/Footer/Footer";

import { useState } from "react";

const SearchResult = () => {
  const [result, setResult] = useState<string>("");

  async function getResult() {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
  }

  async function searchProduct() {}

  return (
    <div>
      <Nav />
      <Side />
      Sort Order Display
      <Footer />
    </div>
  );
};

export default SearchResult;
