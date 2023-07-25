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
        <option value="relevance">Relevance</option>
        <option value="name">Name</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

Sort.propTypes = {
  onSortChange: PropTypes.func,
};
