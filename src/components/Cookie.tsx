const Cookie = () => {
  function handleClick() {
    console.log("The link was clicked.");
  }

  return (
    <div className="">
      <button onClick={handleClick}>x</button>
      <p>Surprise! This website does not use cookies at all. Here, have some cookies instead.</p>
    </div>
  );
};

export default Cookie;
