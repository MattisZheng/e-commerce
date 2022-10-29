import { useState } from "react";

const Side = () => {
  async function getCategories() {
    const res = await fetch(`https://fakestoreapi.com/products/categories`);
    const data = await res.json();
    console.log(data);
  }

  return (
    <div>
      <ul>
        <li>Electronics</li>
        <li>Jewelry</li>
        <li>Men's</li>
        <li>Women's</li>
      </ul>
    </div>
  );
};

export default Side;
