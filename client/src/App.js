import { useReducer } from "react";
import { Outlet } from "react-router-dom";
import { SnackbarProvider } from "notistack";
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

function App() {
  const existingCartItems =
    JSON.parse(localStorage.getItem("cart_items")) || [];
  const [displayOptions, displayOptionsDispatch] = useReducer(queryReducer, {
    query: "",
    sortOption: "deliveryTime",
    showPagination: false,
  });
  const [pageNumber, paginationDispatch] = useReducer(paginationReducer, 1);
  const [cartItems, cartDispatch] = useReducer(cartReducer, existingCartItems);
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
        <SnackbarProvider>
          <div className="flex flex-col gap-4 min-h-full">
            <Header />
            <main>
              <div className="flex flex-col gap-4 items-center mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <Outlet />
              </div>
            </main>
          </div>
        </SnackbarProvider>
      </RestaurantsDispatchContext.Provider>
    </RestaurantsContext.Provider>
  );
}

export default App;
