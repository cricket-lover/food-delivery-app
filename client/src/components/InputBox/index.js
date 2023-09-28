import { useContext } from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";
import { RestaurantsDispatchContext } from "../../RestaurantsContext";

export const InputBox = () => {
  const { displayOptionsDispatch } = useContext(RestaurantsDispatchContext);

  const onQueryChange = (query) => {
    displayOptionsDispatch({
      type: "searched",
      query: query,
    });
  };

  const debounced = debounce(onQueryChange, 200, {});
  return (
    <div className="mx-auto text-slate-50 p-2 order-last w-full flex gap-4 items-center border-solid border-current border rounded-lg px-2 h-8 shadow-md mr-auto sm:order-none sm:max-w-lg sm:mx-4 sm:mt-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="h-4 fill-current"
      >
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
      <input
        onChange={(e) => {
          debounced(e.target.value);
        }}
        className="bg-transparent placeholder:italic placeholder:text-slate-500 outline-none border-none text-base"
        placeholder="Search for restaurants..."
      />
    </div>
  );
};

InputBox.propTypes = {
  onQueryChange: PropTypes.func,
};
