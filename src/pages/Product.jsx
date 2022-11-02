import { useState, useEffect } from "react";

const Product = ({item}) => {
  const [product, setProduct] = useState({ id: 0, title: "test", price: 0, category: "test", description: "test", image: "test" });

  // fetch product from api
  async function getProduct(item) {
    const res = await fetch(`https://fakestoreapi.com/products/${1}`);
    const data = await res.json();
    setProduct(data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default Product;
