import { useReducer } from "react";
import { Outlet } from "react-router-dom";
import {
  RestaurantsContext,
  RestaurantsDispatchContext,
} from "./RestaurantsContext";
import { cartReducer, queryReducer } from "./reducers";
import { Header } from "./components";
import "./App.css";

function App() {
  const [query, queryDispatch] = useReducer(queryReducer, "");
  const [cartItems, cartDispatch] = useReducer(cartReducer, []);

  return (
    <RestaurantsContext.Provider value={{ query, cartItems }}>
      <RestaurantsDispatchContext.Provider
        value={{ queryDispatch, cartDispatch }}
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
