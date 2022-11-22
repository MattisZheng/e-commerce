
const Preview = ({ id, title, price, image, rate, count, className }) => {
  return (
    <div className={className}>
      <img src={image} alt={title} className="w-4/5" />
      <p>{title}</p>
      <p>$ {price}</p>
      <p>{rate}</p>
      <p>{count}</p>
    </div>
  );
};

export default Preview;
