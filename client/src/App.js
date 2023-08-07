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
  userReducer,
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
  const [user, userDispatch] = useReducer(
    userReducer,
    localStorage.getItem("user")
  );

  return (
    <RestaurantsContext.Provider
      value={{
        displayOptions,
        cartItems,
        restaurants,
        pageNumber,
        user,
      }}
    >
      <RestaurantsDispatchContext.Provider
        value={{
          displayOptionsDispatch,
          cartDispatch,
          restaurantsDispatch,
          paginationDispatch,
          userDispatch,
        }}
      >
        <div className="app">
          <Header />
          <main className="main-container">
            <Outlet />
          </main>
        </div>
      </RestaurantsDispatchContext.Provider>
    </RestaurantsContext.Provider>
  );
}

export default App;
