import { useState } from "react";
import sortBy from "lodash/sortBy";
import { restaurants } from "./data/restaurants";
import { InputBox, Sort, Pagination, Cards, Toggle } from "./components";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("relevance");
  const [pageNumber, setPageNumber] = useState(1);
  const [showPagination, setShowPagination] = useState(false);

  const searchResults = restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(query.toLowerCase());
  });

  const sortedRestaurants = sortBy(searchResults, [sort]);

  const itemsPerPage = 10;
  const startIndex = itemsPerPage * (pageNumber - 1);
  const endIndex = startIndex + itemsPerPage - 1;

  const currentPageRestaurants = sortedRestaurants.slice(
    startIndex,
    endIndex + 1
  );

  const restaurantsToShow = showPagination
    ? currentPageRestaurants
    : sortedRestaurants;

  return (
    <div className="app">
      <Toggle
        showPagination={showPagination}
        onPaginationToggle={setShowPagination}
      />
      <InputBox onQueryChange={setQuery} />
      <Sort onSortChange={setSort} />
      <Cards restaurants={restaurantsToShow} />
      {showPagination && (
        <Pagination
          totalItemsCount={sortedRestaurants.length}
          pageNumber={pageNumber}
          onPageChange={setPageNumber}
          itemsPerPage={itemsPerPage}
        />
      )}
    </div>
  );
}

export default App;
