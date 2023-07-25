import { Link } from "react-router-dom";
import "./header.css";
import { CartIcon } from "../CartIcon";
import { InputBox } from "../InputBox";

export const Header = ({ brandName, setQuery, count }) => {
  return (
    <header className="header">
      <h1 className="brand-name">
        <Link to={"/"}>{brandName}</Link>
      </h1>
      <InputBox onQueryChange={setQuery} />
      <CartIcon count={count} />
    </header>
  );
};
