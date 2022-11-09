import React from "react";
import { useState } from "react";
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

const Auth = () => {
  // if token is incorrect, remove token from session storage and show login form

  // init authentication token
  sessionStorage.setItem("token", "...");
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const LogoutButton = <button onClick={localStorage.removeItem("token")}>Logout</button>;
  // remove token from session storage
  // if token is correct, show logout button
  const LoginButton = (
    <div>
      <button onClick={openModal}>Open Modal</button>
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
        <div>I am a modal</div>
        <form action="">
          <label htmlFor="">Username</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="text" />
          <button>Submit</button>
        </form>
      </Modal>
    </div>
  );
  // if token is empty, show login form

  return <div>{token === ".." ? LoginButton : LogoutButton}</div>;
};

export default Auth;
