import { Link } from 'react-router-dom';

const Preview = ({ id, title, price, image, rate, count }) => {
  return (
    <div >
      <Link to={`/item/${id}`} target="_blank">
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>$ {price}</p>
        <p>{rate}</p>
        <p>{count}</p>
      </Link>
    </div>
  );
};

export default Preview;
