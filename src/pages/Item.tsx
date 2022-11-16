import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import Recommendation from '../components/Banner';

const Item = () => {
  let { id } = useParams();

  const [product, setProduct] = useState({});

  // fetch product data from API
  async function getItem(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`); // fetch from api
    try {
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getItem(id);
  }, []);

  // let { rate, count } = product.rating;

  return (
    <main>
      <Product
        id={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
        description={product.description}
        category={product.category}
        // rate={rate}
        // count={count}
      />
      <Recommendation />
    </main>
  );
};

export default Item;
