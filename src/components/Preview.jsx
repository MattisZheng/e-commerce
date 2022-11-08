import { Link } from "react-router-dom";

const Preview = ({ id, title, price, image, rating, className }) => {
  return (
    <div className={className}>
      <Link to={`/item/${id}`}>
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>{price}</p>
        <p>{rating.rate}</p>
      </Link>
    </div>
  );
};

export default Preview;
