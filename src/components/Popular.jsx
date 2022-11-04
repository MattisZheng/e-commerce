import { useState, useEffect } from "react";
import getAllProduct from "../utils/getAllProduct";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  // get all products
  async function getPopular() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setPopular(data);
    } catch (error) {
      console.error(error);
    }
  }
  // filter top 5 most popular products
  const top5 = popular.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 5);

  useEffect(() => {
    getPopular();
  }, [popular]);

  return (
    <div>
      {/* render top5 */}
      {top5.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.rating.rate}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Popular;
