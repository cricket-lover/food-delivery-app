import PropTypes from "prop-types";
import { debounce } from "lodash";
import search from "../../images/magnifying-glass-solid.svg";
import "./input-box.css";

export const InputBox = ({ onQueryChange }) => {
  const debounced = debounce(onQueryChange, 200, {});
  return (
    <div className="search-container">
      <img src={search} alt="search-icon" className="search-icon" />
      <input
        onChange={(e) => {
          debounced(e.target.value);
        }}
        className="search-input"
        placeholder="Search for restaurants"
      />
    </div>
  );
};

InputBox.propTypes = {
  onQueryChange: PropTypes.func,
};
