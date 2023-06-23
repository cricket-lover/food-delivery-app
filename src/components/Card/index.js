import PropTypes from "prop-types";
import { StarRating } from "../StarRating";

import "./card.css";

export const Card = ({ image, name, rating }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="restaurant-image" />
      <h3 className="restaurant-name">{name}</h3>
      <StarRating value={rating} />
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
  id: PropTypes.string,
};
