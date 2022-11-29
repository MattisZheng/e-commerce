// fetch all products from api

export default async function getAllProduct() {
  const res: Response = await fetch(`http://fakestoreapi.com/products`);
  try {
    const data: any = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
