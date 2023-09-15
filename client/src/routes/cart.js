import { useContext, useEffect, useState } from "react";
import {
  RestaurantsContext,
  RestaurantsDispatchContext,
} from "../RestaurantsContext";
import { StarRating } from "../components/StarRating";
import { API_URL, CDN_URL } from "../constants";
import { TrashIcon } from "../components";
import { displayRazorpay } from "../utils/razorpay";

import "./cart.css";
import { enqueueSnackbar } from "notistack";

export const Cart = () => {
  const { cartItems } = useContext(RestaurantsContext);
  const { cartDispatch } = useContext(RestaurantsDispatchContext);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const amount = cartItems.reduce((c, e) => {
      c += e.item.costForTwo * e.quantity;
      return c;
    }, 0);
    setAmount(amount);
  }, [cartItems]);

  const paymentHandler = async (data) => {
    const res = await fetch(`${API_URL}/payment/success`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();

    if (result.success) {
      enqueueSnackbar(result.msg, { variant: "success" });
      handleClearCart();
    }
  };

  const handleClearCart = () => {
    cartDispatch({
      type: "clear_cart",
      item: cartItems,
    });
  };

  if (cartItems.length === 0) {
    return <div className="cart-page-container">Cart Empty</div>;
  }

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
      <button className="btn filled" onClick={handleClearCart}>
        Clear Cart
      </button>
      <div className="cart-item">
        <p>Order above items now!</p>
        <button
          className="btn filled"
          onClick={() => displayRazorpay({ amount }, paymentHandler)}
        >
          Pay ₹{amount / 100}
        </button>
      </div>
    </div>
  );
};
