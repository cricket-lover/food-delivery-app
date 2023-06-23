import { useState } from "react";
import sortBy from "lodash/sortBy";
import { restaurants } from "./data/restaurants";
import { InputBox, Sort, Pagination } from "./components";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("relevance");

  const searchResults = restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(query);
  });

  const sortedRestaurants = sortBy(searchResults, [sort]);

  return (
    <div className="app">
      <InputBox onQueryChange={setQuery} />
      <Sort onSortChange={setSort} />
      <Pagination restaurants={sortedRestaurants} />
    </div>
  );
}

export default App;
