import { useState } from "react";
import getAllProduct from "../utils/getAllProduct";
import getRandomFromArray from "../utils/getRandomFromArray";

const Recommendation = () => {
  const [recommendation, setRecommendation] = useState([]);

  async function getRecommendation() {
    // get all products
    const allProduct = await getAllProduct();
    // randomly select 6 products
    setRecommendation(getRandomFromArray(6, allProduct));
  }

  return <div>{recommendation}</div>;
};

export default Recommendation;
