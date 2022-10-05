import Nav from "../components/Nav/Nav";
import Side from "../components/Side";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const Product = () => {
  interface IProduct {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  }

  const [product, setProduct] = useState<IProduct>({ id: 0, title: "test", price: 0, category: "test", description: "test", image: "test" });

  async function getProduct(item: any) {
    const res = await fetch(`https://fakestoreapi.com/products/${item}`);
    const data = await res.json();
    setProduct(data);
  }

  useEffect(() => {
    getProduct(1);
  }, []);

  return (
    <>
      <Nav />
      <Side />
      <h1>{product.title}</h1>
      <div className="container border-black">
        <img className="w-64" src={product.image} alt={product.title} />
      </div>
      <p>$ {product.price}</p>
      coupon shipping specs add to Cart combination
      <p>{product.description}</p>
      <p>review</p>
      <p>QA</p>
      recommendation
      <Footer />
    </>
  );
};

export default Product;
