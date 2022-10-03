import Nav from  "../components/Nav" ;
import Side from "../components/Side";
import Footer from "../components/Footer";

import { useState } from "react";

const SearchResult = () => {
  const [result, setResult] = useState<string>("");

  async function getResult() {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    setResult(data);
  }

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
