import { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { StarRating } from "../StarRating";
import { RestaurantsDispatchContext } from "../../RestaurantsContext";
import { CDN_URL } from "../../constants";
import "./card.css";

export const Card = ({ data }) => {
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

  const handleOnClick = () => {
    cartDispatch({
      type: "add_to_cart",
      item: { cloudinaryImageId, name, avgRating, id },
    });
  };

  return (
    <div ref={ref} className={`card ${isVisible ? "" : "hidden"}`}>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="restaurant-image"
      />
      <h3 className="restaurant-name">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="cost-and-time">
        <h5>₹{costForTwo / 100} FOR TWO</h5>
        <h5>{deliveryTime} mins</h5>
      </div>
      <StarRating value={avgRating} />
      <button className={`btn filled`} onClick={handleOnClick}>
        Add to cart
      </button>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};
