import PropTypes from "prop-types";
import "./sort.css";

export const Sort = ({ onSortChange }) => {
  return (
    <div className="sort-container">
      <label>Sort By: </label>
      <select
        className="btn outline"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="deliveryTime">Delivery Time</option>
        <option value="name">Name</option>
        <option value="avgRating">Rating</option>
        <option value="costForTwo">Cost</option>
      </select>
    </div>
  );
};

Sort.propTypes = {
  onSortChange: PropTypes.func,
};
