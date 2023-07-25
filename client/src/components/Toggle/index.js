import "./toggle.css";

export const Toggle = ({ showPagination, onPaginationToggle }) => {
  return (
    <div className="toggle">
      <span>Pagination: </span>
      <button
        className="btn outline"
        onClick={(e) => onPaginationToggle(!showPagination)}
      >
        {showPagination ? "ON" : "OFF"}
      </button>
    </div>
  );
};
