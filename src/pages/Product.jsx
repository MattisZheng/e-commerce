import { useState, useEffect } from "react";
import Item from "../components/Item";
import Recommendation from "../components/Recommendation";
import Header from "../layouts/Header";

const Product = ({ item }) => {
  const [product, setProduct] = useState({
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 4.5,
      count: 120,
    },
  });

  async function getItem(item) {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${item}`); // fetch from api
      const data = await res.json(); // parse json
      console.log(data);
      setProduct(data);
    } catch (err) {
      console.error("err", err);
    }
    // set data to state
  }

  useEffect(() => {
    getItem(item);
    console.log("getItem");
  }, []);

  const [recommendation, setRecommendation] = useState([]);

  async function getRecommendation(category) {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/category/${category}`); // fetch from api
      const data = await res.json(); // parse json
      setRecommendation(data); // set data to state
    } catch (err) {
      console.error("err", err);
    }
  }

  useEffect(() => {
    getRecommendation(product.category);
    console.log("getRecommendation");
    console.log(recommendation);
  }, [product]);

  return (
    <div>
      <Header />
      <h1>{product.title}</h1>
      <div className="container border-black">
        <img className="w-64" src={product.image} alt={product.title} />
      </div>
      <p>$ {product.price}</p>
      add to cart
      <p>{product.description}</p>
      <p>{product.rating.rate}</p>
      <p>{product.rating.count}</p>
      <div>
        <div>recommendation</div>
      </div>
    </div>
  );
};

export default Product;
