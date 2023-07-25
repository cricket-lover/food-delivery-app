import { useEffect, useState } from "react";
import sortBy from "lodash/sortBy";
import { Sort, Pagination, Cards, Toggle, Header } from "./components";
import "./App.css";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("relevance");
  const [pageNumber, setPageNumber] = useState(1);
  const [showPagination, setShowPagination] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("/getAllRestaurants")
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
      })
      .catch((err) => console.warn(err.message));
  }, []);

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
      <Header
        brandName={"FoodKaro"}
        count={cartItems.length}
        setQuery={setQuery}
      />
      <Toggle
        showPagination={showPagination}
        onPaginationToggle={setShowPagination}
      />
      <Sort onSortChange={setSort} />
      <Cards restaurants={restaurantsToShow} addToCart={setCartItems} />
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
