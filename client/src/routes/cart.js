import { useContext } from "react";
import {
  RestaurantsContext,
  RestaurantsDispatchContext,
} from "../RestaurantsContext";
import { StarRating } from "../components/StarRating";
import { API_URL, CDN_URL } from "../constants";
import { TrashIcon } from "../components";

import "./cart.css";
import { loadScript } from "../utils/razorpay";

export const Cart = () => {
  const { cartItems } = useContext(RestaurantsContext);
  const { cartDispatch } = useContext(RestaurantsDispatchContext);

  const handleClearCart = () => {
    cartDispatch({
      type: "clear_cart",
      item: cartItems,
    });
  };

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const response = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result;
    const options = {
      key: "rzp_test_3O7kpMd8UDq8yp", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Yummy Tummy",
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await fetch(`${API_URL}/payment/success`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((res) => res.json());

        alert(result.msg);
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

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
      <p>Order above items now!</p>
      <button className="App-link" onClick={displayRazorpay}>
        Pay ₹500
      </button>
    </div>
  );
};
