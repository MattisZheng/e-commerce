import { Link } from 'react-router-dom';

const Preview = ({ id, title, price, image, rating }) => {
  return (
    <div className="h-auto border-black order-solid border-2 m-2 p-6\ bg-slate-500 ">
      <Link to={`/item/${id}`} target="_blank" className="">
        <div className="h-auto w-auto border-black order-solid border-2 m-2 p-2">
          <img src={image} alt={title} className="h-48" />
          <p>{title}</p>
          <p className="h-auto">
            $ {price} / {rating.rate && rating.rate} / {rating.count && rating.count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Preview;
