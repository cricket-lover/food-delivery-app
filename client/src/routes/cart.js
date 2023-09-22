import { useContext, useEffect, useState } from "react";
import {
  RestaurantsContext,
  RestaurantsDispatchContext,
} from "../RestaurantsContext";
import { StarRating } from "../components/StarRating";
import { API_URL, CDN_URL } from "../constants";
import { TrashIcon } from "../components";
import { displayRazorpay } from "../utils/razorpay";

import { enqueueSnackbar } from "notistack";
import { decreaseQuantity, increaseQuantity } from "../utils/cart";

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
    return <div className="flex flex-col gap-4 items-center">Cart Empty</div>;
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      {cartItems.map(({ item, quantity }) => {
        return (
          <div
            key={item.id}
            className="flex items-center gap-4 shadow-md rounded-lg w-full p-4 justify-between"
          >
            <img
              src={CDN_URL + item.cloudinaryImageId}
              alt={item.name}
              className=" w-20 rounded-full aspect-square"
            />
            <span className="text-center w-40">
              {item.name}
              <StarRating value={item.avgRating} />
            </span>
            <span className="text-3xl font-bold">
              <span className="text-base">₹</span>
              {item.costForTwo / 100}
            </span>
            <div className="flex items-center justify-center gap-4 rounded-md font-bold p-2 outline-none border-none cursor-pointer bg-primary-color text-primary-color-light">
              <span
                onClick={() =>
                  decreaseQuantity(cartDispatch, { item, quantity })
                }
              >
                -
              </span>
              <span>{quantity}</span>
              <span
                onClick={() =>
                  increaseQuantity(cartDispatch, { item, quantity })
                }
              >
                +
              </span>
            </div>
            <TrashIcon />
          </div>
        );
      })}
      <button
        className="rounded-md font-bold p-2 outline-none border-none cursor-pointer bg-primary-color text-primary-color-light"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="flex items-center gap-4 shadow-md rounded-md w-full p-4 justify-between">
        <p>Order above items now!</p>
        <button
          className="rounded-md font-bold p-2 outline-none border-none cursor-pointer bg-primary-color text-primary-color-light"
          onClick={() => displayRazorpay({ amount }, paymentHandler)}
        >
          Pay ₹{amount / 100}
        </button>
      </div>
    </div>
  );
};
