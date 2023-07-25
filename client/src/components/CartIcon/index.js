import { Link } from "react-router-dom";
import cartImage from "../../images/cart-shopping-solid.svg";
import "./cart-icon.css";

export const CartIcon = ({ count }) => {
  return (
    <Link to={"/cart"}>
      <div className="cart">
        <span className="cart-items-count">{count ? count : ""}</span>
        <img src={cartImage} alt="cart-icon" className="cart-icon" />
      </div>
    </Link>
  );
};
