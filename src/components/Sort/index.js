import PropTypes from "prop-types";

export const Sort = ({ onSortChange }) => {
  return (
    <div>
      <label>Sort By: </label>
      <select onChange={(e) => onSortChange(e.target.value)}>
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
