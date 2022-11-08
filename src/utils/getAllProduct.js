export default async function getAllProduct() {
  const res = await fetch(`http://fakestoreapi.com/products`);
  const data = await res.json();
  return data;
}
