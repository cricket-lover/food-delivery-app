import { useReducer } from "react";
import { Outlet } from "react-router-dom";
import {
  RestaurantsContext,
  RestaurantsDispatchContext,
} from "./RestaurantsContext";
import {
  cartReducer,
  paginationReducer,
  queryReducer,
  restaurantsReducer,
} from "./reducers";
import { Header } from "./components";
import "./App.css";

function App() {
  const [displayOptions, displayOptionsDispatch] = useReducer(queryReducer, {
    query: "",
    sortOption: "deliveryTime",
    showPagination: false,
  });
  const [pageNumber, paginationDispatch] = useReducer(paginationReducer, 1);
  const [cartItems, cartDispatch] = useReducer(cartReducer, []);
  const [restaurants, restaurantsDispatch] = useReducer(restaurantsReducer, []);

  return (
    <RestaurantsContext.Provider
      value={{
        displayOptions,
        cartItems,
        restaurants,
        pageNumber,
      }}
    >
      <RestaurantsDispatchContext.Provider
        value={{
          displayOptionsDispatch,
          cartDispatch,
          restaurantsDispatch,
          paginationDispatch,
        }}
      >
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </RestaurantsDispatchContext.Provider>
    </RestaurantsContext.Provider>
  );
}

export default App;
