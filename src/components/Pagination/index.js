import PropTypes from "prop-types";
import { Cards, NoCardsFound } from "../";
import { useState } from "react";

import "./pagination.css";

export const Pagination = ({ restaurants }) => {
  const [pageNumber, setPageNumber] = useState(1);

  if (restaurants.length === 0) {
    return <NoCardsFound msg={"No Restarants Found"} />;
  }

  const itemsPerPage = 10;
  const count = Math.ceil(restaurants.length / itemsPerPage);
  const startIndex = itemsPerPage * (pageNumber - 1);
  const endIndex = startIndex + itemsPerPage - 1;
  const pageNumberButtons = Array(count).fill(0);

  return (
    <div className="pagination-cards">
      <Cards restaurants={restaurants.slice(startIndex, endIndex + 1)} />
      <div className="pagination-buttons-container">
        <button
          className="pagination-button"
          onClick={() => setPageNumber(1)}
          disabled={pageNumber === 1}
        >
          {"<<"}
        </button>
        <button
          className="pagination-button"
          onClick={() => setPageNumber((pageNumber) => pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          {"<"}
        </button>
        {pageNumberButtons.map((n, i) => {
          return (
            <button
              className={`pagination-button ${
                pageNumber === i + 1 && "active"
              }`}
              key={i}
              onClick={() => setPageNumber(i + 1)}
            >
              {i + 1}
            </button>
          );
        })}
        <button
          className="pagination-button"
          onClick={() => setPageNumber((pageNumber) => pageNumber + 1)}
          disabled={count === pageNumber}
        >
          {">"}
        </button>
        <button
          className="pagination-button"
          onClick={() => setPageNumber(count)}
          disabled={pageNumber === count}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  restaurants: PropTypes.array,
};
