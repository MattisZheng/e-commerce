import { Link } from 'react-router-dom';

const Preview = ({ id, title, price, image, rating }) => {
  return (
    <div className="h-auto border-black order-solid border-2 m-10 p-2 bg-slate-500 ">
      <Link to={`/item/${id}`} target="_blank">
        <img src={image} alt={title} className="h-48" />
        <p>{title}</p>
        <p className="h-auto">
          $ {price} / {rating.rate && rating.rate} / {rating.count && rating.count}
        </p>
      </Link>
    </div>
  );
};

export default Preview;
