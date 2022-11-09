export default async function getAllProduct() {
  const res = await fetch(`http://fakestoreapi.com/products`);
  try {
    const data = await res.json();
    return data;
  }
  catch (err) {
    console.error(err);
  }
}
