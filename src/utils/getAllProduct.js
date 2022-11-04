const getAllProduct = async () => {
  const res = await fetch(`http://fakestoreapi.com/products`);
  const data = await res.json();
  return data;
};

export default getAllProduct;
