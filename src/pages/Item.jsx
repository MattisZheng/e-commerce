import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import Recommendation from "../components/Banner";

const Item = () => {
  let { id } = useParams();

  const [product, setProduct] = useState({});

  async function getItem(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`); // fetch from api
    try {
      const data = await res.json(); // parse json
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
    // set data to state
  }

  useEffect(() => {
    getItem(id);
  }, []);

  return (
    <main>
      <Product />
      <h1>{product.title}</h1>
      <div className="container border-black">
        <img className="w-64" src={product.image} alt={product.title} />
      </div>
      <p>$ {product.price}</p>
      add to cart
      <p>{product.description}</p>
      <p>{product.rating ? product.rating.rate : ""}</p>
      <p>{product.rating ? product.rating.count : ""}</p>
      <div>
        <div>recommendation</div>
      </div>
    </main>
  );
};

export default Item;
