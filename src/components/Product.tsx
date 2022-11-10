const Product = ({ title, image, price, description, category }) => {
  return (
    <section>
      <div className="px-10 py-2 grid grid-cols-2">
        <div className="container border-black border-0">
          <img className="w-4/5" src={image} alt={title} />
        </div>
        <div className="container border-black border-0">
          <h2 className="text-3xl font-bold m-1">{title}</h2>
          <p>{category}</p>
          <div className="flex justify-between">
            <p>$ {price}</p>
            <button className="border-1">add to cart</button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Product;
