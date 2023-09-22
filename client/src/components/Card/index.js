import { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { StarRating } from "../StarRating";
import {
  RestaurantsContext,
  RestaurantsDispatchContext,
} from "../../RestaurantsContext";
import { CDN_URL } from "../../constants";
import { decreaseQuantity, increaseQuantity } from "../../utils/cart";

export const Card = ({ data }) => {
  const { cartItems } = useContext(RestaurantsContext);
  const { cartDispatch } = useContext(RestaurantsDispatchContext);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    id,
  } = data;

  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          setIsVisible(true);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(ref.current);
  }, []);

  const addToCart = () => {
    cartDispatch({
      type: "add_to_cart",
      item: {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
        id,
      },
    });
  };

  const cartItem = cartItems.find(({ item }) => item.name === name);
  return (
    <div
      ref={ref}
      className={
        "flex w-72 justify-around flex-col gap-2 shadow-lg bg-slate-200 p-4 rounded-lg " +
        (!isVisible && " opacity-0")
      }
    >
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="rounded-lg w-64 aspect-video"
      />
      <h3 className="font-bold uppercase">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="flex flex-col gap-2">
        <h5>₹{costForTwo / 100} FOR TWO</h5>
        <h5>{deliveryTime} mins</h5>
      </div>
      <StarRating value={avgRating} />
      {cartItem ? (
        <div className="flex justify-center items-center gap-4">
          <span
            className="rounded-md font-bold p-2 outline-none border-none cursor-pointer bg-primary-color text-primary-color-light"
            onClick={() => decreaseQuantity(cartDispatch, cartItem)}
          >
            -
          </span>
          <strong>{cartItem.quantity}</strong>
          <span
            className="rounded-md font-bold p-2 outline-none border-none cursor-pointer bg-primary-color text-primary-color-light"
            onClick={() => increaseQuantity(cartDispatch, cartItem)}
          >
            +
          </span>
        </div>
      ) : (
        <button
          className={`rounded-md font-bold p-2 outline-none border-none cursor-pointer bg-primary-color text-primary-color-light`}
          onClick={addToCart}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};
