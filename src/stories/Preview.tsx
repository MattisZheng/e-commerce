import { Link } from "react-router-dom";

const Preview = ({ id, title, price, image, rate, count, className }) => {
  return (
    <div className={className}>
      <Link to={`/item/${id}`} target="_blank">
        <img src={image} alt={title} className="w-4/5"/>
        <p>{title}</p>
        <p>$ {price}</p>
        <p>{rate}</p>
        <p>{count}</p>
      </Link>
    </div>
  );
};

export default Preview;
