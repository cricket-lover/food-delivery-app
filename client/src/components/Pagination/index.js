import PropTypes from "prop-types";
import { useContext } from "react";
import {
  RestaurantsContext,
  RestaurantsDispatchContext,
} from "../../RestaurantsContext";

export const Pagination = ({ totalItemsCount, itemsPerPage }) => {
  const { paginationDispatch } = useContext(RestaurantsDispatchContext);
  const { pageNumber } = useContext(RestaurantsContext);
  const numberOfPages = Math.ceil(totalItemsCount / itemsPerPage);
  const pageNumberButtons = Array(numberOfPages).fill(0);

  return (
    <div className="flex flex-col items-center">
      <div className="flex mt-8 gap-2">
        <button
          className="disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:hover:cursor-not-allowed rounded-md font-bold p-2 outline-none cursor-pointer border border-solid border-current text-current bg-transparent"
          onClick={() =>
            paginationDispatch({
              type: "first_page",
              pageNumber: 1,
            })
          }
          disabled={pageNumber === 1}
        >
          {"<<"}
        </button>
        <button
          className="disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:hover:cursor-not-allowed rounded-md font-bold p-2 outline-none cursor-pointer border border-solid border-current text-current bg-transparent"
          onClick={() => paginationDispatch({ type: "prev_page" })}
          disabled={pageNumber === 1}
        >
          {"<"}
        </button>
        {pageNumberButtons.map((n, i) => {
          return (
            <button
              className={`rounded-md font-bold p-2 outline-none cursor-pointer ${
                pageNumber === i + 1
                  ? "bg-primary-color text-primary-color-light"
                  : "border border-solid border-current text-current bg-transparent"
              }`}
              key={i}
              onClick={() =>
                paginationDispatch({
                  type: "click_page_number",
                  pageNumber: i + 1,
                })
              }
            >
              {i + 1}
            </button>
          );
        })}
        <button
          className="disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:hover:cursor-not-allowed rounded-md font-bold p-2 outline-none cursor-pointer border border-solid border-current text-current bg-transparent"
          onClick={() => paginationDispatch({ type: "next_page" })}
          disabled={numberOfPages === pageNumber}
        >
          {">"}
        </button>
        <button
          className="disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:hover:cursor-not-allowed rounded-md font-bold p-2 outline-none cursor-pointer border border-solid border-current text-current bg-transparent"
          onClick={() =>
            paginationDispatch({
              type: "last_page",
              pageNumber: numberOfPages,
            })
          }
          disabled={pageNumber === numberOfPages}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  totalItemsCount: PropTypes.number,
};
