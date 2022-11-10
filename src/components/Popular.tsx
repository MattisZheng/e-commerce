import { useState, useEffect } from "react";
import getAllProduct from "../utils/getAllProduct";
import Preview from "./Preview";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  async function getPopular() {
    // get all products
    const allProduct = await getAllProduct();
    // filter top 5 most popular products
    setPopular(allProduct.sort((a, b) => b.rating.count - a.rating.count).slice(0, 5));
  }

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <section className="grid grid-cols-4">
      {popular.map((item) => {
        return <Preview id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} />;
      })}
    </section>
  );
};

export default Popular;
