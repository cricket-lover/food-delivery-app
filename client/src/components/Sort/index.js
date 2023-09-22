import PropTypes from "prop-types";
import { useContext } from "react";
import { RestaurantsDispatchContext } from "../../RestaurantsContext";

export const Sort = ({ onSortChange }) => {
  const { displayOptionsDispatch } = useContext(RestaurantsDispatchContext);

  return (
    <div>
      <label>Sort By: </label>
      <select
        className="rounded-md font-bold p-2 outline-none cursor-pointer border border-solid border-current text-current bg-transparent"
        onChange={(e) =>
          displayOptionsDispatch({ type: "sort", sortOption: e.target.value })
        }
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
