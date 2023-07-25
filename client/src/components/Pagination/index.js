import PropTypes from "prop-types";
import "./pagination.css";

export const Pagination = ({
  totalItemsCount,
  pageNumber,
  onPageChange,
  itemsPerPage,
}) => {
  const numberOfPages = Math.ceil(totalItemsCount / itemsPerPage);
  const pageNumberButtons = Array(numberOfPages).fill(0);

  return (
    <div className="pagination-cards">
      <div className="pagination-buttons-container">
        <button
          className="btn outline"
          onClick={() => onPageChange(1)}
          disabled={pageNumber === 1}
        >
          {"<<"}
        </button>
        <button
          className="btn outline"
          onClick={() => onPageChange((pageNumber) => pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          {"<"}
        </button>
        {pageNumberButtons.map((n, i) => {
          return (
            <button
              className={`btn ${pageNumber === i + 1 ? "filled" : "outline"}`}
              key={i}
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </button>
          );
        })}
        <button
          className="btn outline"
          onClick={() => onPageChange((pageNumber) => pageNumber + 1)}
          disabled={numberOfPages === pageNumber}
        >
          {">"}
        </button>
        <button
          className="btn outline"
          onClick={() => onPageChange(numberOfPages)}
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
