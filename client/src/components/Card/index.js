import PropTypes from "prop-types";
import { StarRating } from "../StarRating";

import { useEffect, useRef, useState } from "react";

import "./card.css";

export const Card = ({ image, name, rating, addToCart }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
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

  return (
    <div ref={ref} className={`card ${isVisible ? "" : "hidden"}`}>
      <img src={image} alt={name} className="restaurant-image" />
      <h3 className="restaurant-name">{name}</h3>
      <StarRating value={rating} />
      <button
        className={`btn filled`}
        onClick={() => {
          addToCart((items) => [...items, { image, name, rating }]);
          setIsAddedToCart(true);
        }}
      >
        {isAddedToCart ? "Remove to cart" : "Add to cart"}
      </button>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
  id: PropTypes.string,
};
