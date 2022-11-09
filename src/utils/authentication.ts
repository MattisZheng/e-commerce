async function authentication(username: string, password: string) {
  const res = await fetch("http://localhost:3000/api/auth", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  try {
    const token = await res.json();
    console.log(token);
    return token;
  } catch (err) {
    console.error(err);
  }
}

export default authentication;
