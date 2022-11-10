import { useState, useEffect } from "react";

// cartItem


// load cart from session storage

const Cart = () => {
  sessionStorage.setItem("cart", JSON.stringify([]));

  // cart icon

  // cart modal

  async function getCart() {
    // get cart from local storage
    // if cart is empty, show "cart is empty"
    // if cart is not empty, show cart
  }

  return <div>Cart</div>;
};

export default Cart;
