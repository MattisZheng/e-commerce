import { useState } from 'react';

const Product = ({
  id,
  title,
  price,
  image,
  description,
  category,
}: {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}) => {

  return (
    <section className="border-solid border-2 m-2">
      <div className="px-10 py-2 grid grid-cols-2">
        <div className="container border-solid border-2 m-2">
          <img src={image} alt={title} />
        </div>
        <div className="container border-solid border-2 m-2">
          <h2 className="text-3xl font-bold m-1">{title}</h2>
          <p>{category}</p>
          <div className="flex justify-between">
            <p>$ {price}</p>
          </div>
        </div>
      </div>
      
      <div className="border-solid border-2 m-2 p-2">
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Product;
