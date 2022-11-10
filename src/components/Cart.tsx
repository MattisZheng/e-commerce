import React from "react";
import { useState, useEffect } from "react";
// @ts-ignore third party library
import Modal from "react-modal";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    zIndex: 10,
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
    zIndex: 11,
  },
};

Modal.setAppElement(document.getElementById("root"));

const Cart = () => {
  const [cart, setCart] = useState([]);

  // load cart from session storage
  sessionStorage.getItem("cart");

  // cart modal

  async function getCart() {
    // get cart from local storage
    // if cart is empty, show "cart is empty"
    // if cart is not empty, show cart
  }

  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  function renderCart() {
    // render cart items
  }

  return (
    <div>
      <button onClick={openModal}>
        <img src="../../public/shopping-cart_512.png" alt="Cart" className="w-7" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        preventScroll={true}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>{cart}</div>
      </Modal>
    </div>
  );
};

export default Cart;
