import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Modal.setAppElement("#yourAppElement");

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
      <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
  // if token is empty, show login form

  return <div>{token === "..." ? LoginButton : LogoutButton}</div>;
};

export default Auth;
