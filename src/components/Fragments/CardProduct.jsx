import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="flex flex-col justify-between w-full max-w-sm mx-2 my-2 bg-gray-800 border border-gray-700 rounded-lg shadow bg-grey-800">{children}</div>;
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="h-full px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">{name.substring(0, 20)}</h5>
        <p className="text-white text-m">{children.substring(0, 100)}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  // const { price, handleAddToCart, id } = props;
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">$ {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</span>
      {/* <Button classname="bg-blue-500" onClick={() => handleAddToCart(id)}> */}
      <Button classname="bg-blue-500" onClick={() => dispatch(addToCart({ id, qty: 1 }))}>
        Add to cart
      </Button>
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img src={image} className="object-cover w-full p-8 rounded-t-lg h-60" alt={image} />
    </Link>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
