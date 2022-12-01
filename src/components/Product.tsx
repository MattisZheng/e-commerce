import { useState } from 'react';

const Product = ({
  title,
  price,
  image,
  description,
  category,
}: {
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}) => {
  return (
    <section>
      <div className="px-10 py-2">
        <div className="container">
          <img src={image} alt={title} />
        </div>
        <div className="container ">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p>{category}</p>
          <div className="flex justify-between">
            <p>$ {price}</p>
          </div>
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Product;
