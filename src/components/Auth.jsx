import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// onclick

// if token is empty, show login form
// if token is correct, show logout button
// if token is incorrect, remove token from local storage and show login form

const Auth = () => {
  // set token to session storage
  const [token, setToken] = useState(sessionStorage.getItem("token") ? sessionStorage.getItem("token") : sessionStorage.setItem("token", ""));

  const [isLoggedIn, In] = useState(false);

  async function checkToken() {
    const res = fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    });
    const json = await res.json();
    console.log(json);
    // check token
    // if token is correct, show logout button
    // if token is incorrect, remove token from local storage and show login form
  }

  // login form

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // get token from api
    // save token to local storage
    // check token
    const res = fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    });
    const json = await res.json();
    console.log(json);
  };

  const loginForm = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" onChange={handleUsername} />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" onChange={handlePassword} />
      <input
        type="
    "
      />
      <button>Login</button>
    </form>
  );

  // if login,
  return <div>{isLoggedIn ? <button onClick={() => setToken("")}>Logout</button> : loginForm}</div>;
};

export default Auth;
