import { useContext } from "react";
import {
  RestaurantsContext,
  RestaurantsDispatchContext,
} from "../../RestaurantsContext";

export const Toggle = () => {
  const { displayOptions } = useContext(RestaurantsContext);
  const { displayOptionsDispatch } = useContext(RestaurantsDispatchContext);
  const { showPagination } = displayOptions;
  return (
    <div>
      <span>Pagination: </span>
      <button
        className="rounded-md font-bold p-2 outline-none cursor-pointer border border-solid border-current text-current bg-transparent"
        onClick={(e) => displayOptionsDispatch({ type: "toggle_pagination" })}
      >
        {showPagination ? "Off" : "On"}
      </button>
    </div>
  );
};
