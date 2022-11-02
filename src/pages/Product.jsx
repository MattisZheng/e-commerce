import { useState, useEffect } from "react";
import Item from "../components/Item";
import Recommendation from "../components/Recommendation";


const Product = ({ item }) => {
  const [product, setProduct] = useState({
    id: 1,
    title: "title",
    price: 9999.99,
    description: "description",
    category: "category",
    image: "image link",
    rating: { rate: 0.0, count: 0 },
  });

  // fetch product from api
  async function getProduct(item) {
    const res = await fetch(`https://fakestoreapi.com/products/${item}`); // fetch from api
    const data = await res.json(); // parse json
    setProduct(data); // set data to state
  }

  useEffect(() => {
    getProduct(item);
    console.log("item");
  }, []);

  const [recommendation, setRecommendation] = useState();

  async function getRecommendation(category) {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`); // fetch from api
    const data = await res.json(); // parse json
    setRecommendation(data); // set data to state
  }

  useEffect(() => {
    getRecommendation(product.category);
    console.log("recommendation");
  }, [product]);

  return (
    <div>
      <Header />
      <Item item={product} />
      <Recommendation recommendation={recommendation} />
      <h1>{product.title}</h1>
      <div className="container border-black">
        <img className="w-64" src={product.image} alt={product.title} />
      </div>
      <p>$ {product.price}</p>
      add to cart
      <p>{product.description}</p>
      <p>{product.rating.rate}</p>
      <p>{product.rating.count}</p>
      <div >
        <div>
          {recommendation &&
            recommendation.map((item) => (
              <div key={item.id}>
                <img className="w-64" src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <p>{item.price}</p>
                <p>{item.rating.rate}</p>
                <p>{item.rating.count}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
