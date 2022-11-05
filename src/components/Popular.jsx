import { useState, useEffect } from "react";
import getAllProduct from "../utils/getAllProduct";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  // get all products
  async function getPopular() {
    getAllProduct();
  }
  // filter top 5 most popular products
  const top5 = popular.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 5);

  useEffect(() => {
    getPopular();
  }, [popular]);

  return (
    <div>
      <h2>Popular</h2>
    </div>
  );
};

export default Popular;
