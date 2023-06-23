export const Toggle = ({ showPagination, onPaginationToggle }) => {
  return (
    <div className="toggle">
      <span>Pagination: </span>
      <button onClick={(e) => onPaginationToggle(!showPagination)}>
        {showPagination ? "ON" : "OFF"}
      </button>
    </div>
  );
};
