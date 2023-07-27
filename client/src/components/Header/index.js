import { Link } from "react-router-dom";
import "./header.css";
import { CartIcon } from "../CartIcon";
import { InputBox } from "../InputBox";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="brand-name">
        <Link to={"/"}>FoodKaro</Link>
      </h1>
      <InputBox />
      <CartIcon />
    </header>
  );
};
