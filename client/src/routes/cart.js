import { useContext } from "react";
import { RestaurantsContext } from "../RestaurantsContext";
import { StarRating } from "../components/StarRating";
import { CDN_URL } from "../constants";
import { TrashIcon } from "../components";

import "./cart.css";

export const Cart = () => {
  const { cartItems } = useContext(RestaurantsContext);
  console.log(cartItems);

  if (cartItems.length === 0) {
    return <div className="cart-page-container">Cart Empty</div>;
  }

  console.log(cartItems);
  return (
    <div className="cart-page-container">
      {cartItems.map(({ item, quantity }) => {
        return (
          <div key={item.id} className="cart-item">
            <img
              src={CDN_URL + item.cloudinaryImageId}
              alt={item.name}
              className="cart-image"
            />
            <span className="cart-item-name">
              {item.name}
              <StarRating value={item.avgRating} />
            </span>
            <span className="cost">
              <span className="currency-symbol">₹</span>
              {item.costForTwo / 100}
            </span>
            <div className="buttons-container btn filled">
              <span>-</span>
              <span>{quantity}</span>
              <span>+</span>
            </div>
            <TrashIcon />
          </div>
        );
      })}
    </div>
  );
};
