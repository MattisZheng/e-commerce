import { useState, useEffect } from "react";

const Sale = () => {
  const [sale, setSale] = useState([]);

  async function getSale() {
    try {
      const res = await fetch("https://fakestoreapi.com/products?limit=5");
      const data = await res.json();
      setSale(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getSale();
  }, []);

  return <div></div>;
};

export default Sale;
