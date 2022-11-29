import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getAllProduct from '../utils/getAllProduct';
import getRandomFromArray from '../utils/getRandomFromArray';
import getShortenedTitle from '../utils/getShortPathName';

const Recommendation = () => {
  const [recommendation, setRecommendation] = useState<any>([]);

  // get recommendation from api
  async function getRecommendation() {
    // get all products
    const allProduct: string[] = await getAllProduct();
    // randomly select 6 products
    setRecommendation(getRandomFromArray(3, allProduct));
  }
  useEffect(() => {
    getRecommendation();
  }, []);

  return (
    <div className="flex flex-wrap">
      {recommendation &&
        recommendation.map((product: any) => (
          <div className=" text-sm" key={product.id}>
            <Link to={`./item/${product.id}`} target="_blank">
              {getShortenedTitle(10, product.title)}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Recommendation;
