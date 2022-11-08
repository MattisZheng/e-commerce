import { useState } from "react";
import getAllProduct from "../utils/getAllProduct";

const Recommendation = () => {
  const [recommendation, setRecommendation] = useState([]);

  async function getRecommendation() {
    // get all products
    const allProduct = await getAllProduct();
    // randomly select 6 products
    setRecommendation(allProduct);
  }


  
  return <div>Recommendation</div>;
};

export default Recommendation;
