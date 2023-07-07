import PropTypes from "prop-types";
import "./input-box.css";
import { debounce } from "lodash";

export const InputBox = ({ onQueryChange }) => {
  const debounced = debounce(onQueryChange, 200, {});
  return (
    <div className="search-container">
      <input
        onChange={(e) => {
          debounced(e.target.value);
        }}
        className="search-input"
      />
    </div>
  );
};

InputBox.propTypes = {
  onQueryChange: PropTypes.func,
};
