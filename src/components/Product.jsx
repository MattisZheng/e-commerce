import React from "react";

const Product = ({ title, image, price, description, category }) => {
  return (
    <div className="px-10 py-2 flex">
      <div className="container border-black border-0">
        <img className="w-4/5" src={image} alt={title} />
      </div>
      <div className="container border-black border-0">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{category}</p>
        <p>{description}</p>
        <div className="flex justify-between">
          <p>$ {price}</p>
          <button className="border-1">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
