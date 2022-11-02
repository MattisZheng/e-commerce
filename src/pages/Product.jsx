import { useState, useEffect } from "react";

const Product = () => {
  const [product, setProduct] = useState({
    id: 1,
    title: "title",
    price: 9999.99,
    description:
      "description",
    category: "category",
    image: "image link",
    rating: { rate: 0.0, count: 0 },
  });

  // fetch product from api
  async function getProduct() {
    const res = await fetch(`https://fakestoreapi.com/products/1`); // fetch from api
    const data = await res.json(); // parse json
    setProduct(data); // set data to state
  }

  useEffect(() => {
    getProduct();
    console.log(product);
  }, [product]);

  return (
    <div>
      <h1>{product.title}</h1>
      <div className="container border-black">
        <img className="w-64" src={product.image} alt={product.title} />
      </div>
      <p>$ {product.price}</p>
      add to cart
      <p>{product.description}</p>
      <p>{product.rating.rate}</p>
      recommendation
    </div>
  );
};

export default Product;
