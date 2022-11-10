import { useState, useEffect } from 'react';

const Product = ({
  id,
  title,
  image,
  price,
  description,
  category,
}: {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}) => {
  const [count, setCount] = useState(0);

  function handleMinus(e: any) {
    e.preventDefault();
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handlePlus(e: any) {
    e.preventDefault();
    setCount(count + 1);
  }

  function handleAddToCartClick(itemId: string, count: number) {
    // check item by id
    sessionStorage.getItem(itemId);
    // if item is not in cart, add item to cart
    // if item is in cart, update item count
    sessionStorage.setItem(itemId, count);
  }

  return (
    <section>
      <div className="px-10 py-2 grid grid-cols-2">
        <div className="container border-black border-0">
          <img className="w-4/5" src={image} alt={title} />
        </div>
        <div className="container border-black border-0">
          <h2 className="text-3xl font-bold m-1">{title}</h2>
          <p>{category}</p>
          <div className="flex justify-between">
            <p>$ {price}</p>
            <button onClick={handleMinus}>-</button>
            {count}
            <button onClick={handlePlus}>-</button>

            <button onClick={handleAddToCartClick(id.toString(), count)} className="border-1">
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Product;
