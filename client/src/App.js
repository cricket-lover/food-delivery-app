import { useState } from "react";
import { Header } from "./components";
import "./App.css";
import { Body } from "./components/Body";
import { RestaurantsContext } from "./RestaurantsContext";

function App() {
  const [query, setQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  return (
    <RestaurantsContext.Provider value={{ query, cartItems }}>
      <div className="app">
        <Header brandName={"FoodKaro"} setQuery={setQuery} />
        <Body setCartItems={setCartItems} />
      </div>
    </RestaurantsContext.Provider>
  );
}

export default App;
