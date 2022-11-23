import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getAllProduct from '../utils/getAllProduct';
import getRandomFromArray from '../utils/getRandomFromArray';
import getShortenedTitle from '../utils/getShortPathName';

const Recommendation = () => {
  const [recommendation, setRecommendation] = useState([]);

  // get recommendation from api
  async function getRecommendation() {
    // get all products
    const allProduct = await getAllProduct();
    // randomly select 6 products
    setRecommendation(getRandomFromArray(4, allProduct));
  }
  useEffect(() => {
    getRecommendation();
  }, []);

  return (
    <div className="flex flex-wrap">
      {recommendation.map((product) => (
        <div className=" text-sm" key={product.id}>
          <Link to={`/item/${product.id}`} target="_blank">
            {getShortenedTitle(15, product.title)}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Recommendation;
