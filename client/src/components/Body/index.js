import { useEffect, useState, useContext } from "react";
import { sortBy } from "lodash";
import { Sort, Cards, Pagination, Toggle } from "../../components";
import { RestaurantsContext } from "../../RestaurantsContext";

export const Body = () => {
  const { query } = useContext(RestaurantsContext);

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("/getAllRestaurants")
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
      })
      .catch((err) => console.warn(err.message));
  }, []);

  const [sort, setSort] = useState("relevance");
  const [pageNumber, setPageNumber] = useState(1);
  const [showPagination, setShowPagination] = useState(false);

  const searchResults = restaurants.filter((restaurant) => {
    return restaurant.data.name.toLowerCase().includes(query.toLowerCase());
  });

  const sortedRestaurants = sortBy(searchResults, [
    function (o) {
      return o.data[sort];
    },
  ]);
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
    <>
      <Toggle
        showPagination={showPagination}
        onPaginationToggle={setShowPagination}
      />
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
    </>
  );
};
