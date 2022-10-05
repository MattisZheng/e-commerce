
import { useState, useEffect } from "react";

const Search = () => {
  const [result, setResult] = useState<any>([]);

  async function getResult() {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    setResult(data);
    console.log(result);
  }

  useEffect(() => {
    getResult();
  }, []);

  return (
    <div>

      Sort Order Display
      {result.map((item: any) => (
        <div key={item.id}>
          <img className="w-16" src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <p>$ {item.price}</p>
        </div>
      ))}

    </div>
  );
};

export default Search;
