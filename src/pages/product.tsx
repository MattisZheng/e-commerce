import Nav from "../components/Nav/Nav";
import Side from "../components/Side/Side";
import Footer from "../components/Footer/Footer";

import { useState, useEffect } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);

  async function getProduct(item: any) {
    const res = await fetch(`https://fakestoreapi.com/products/${item}`);
    const data = await res.json();
    setProduct(data);
  }

  useEffect(() => {
    getProduct(1);
  }, []);

  return (
    <div>
      <Nav />
      <Side />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <Footer />
    </div>
  );
};

export default Product;
