import { ProfileDropdown } from "./../ProfileDropdown/index";
import { Disclosure } from "@headlessui/react";
import { BrandLogo } from "../BrandLogo";
import { CartIcon } from "../CartIcon";
import { useContext, useEffect, useState } from "react";
import { RestaurantsContext } from "../../RestaurantsContext";
import { Link, useLocation } from "react-router-dom";
import { InputBox } from "../InputBox";

export const Header = () => {
  const { user } = useContext(RestaurantsContext);
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    setShowLogin(
      location.pathname !== "/login" && location.pathname !== "/register"
    );
  }, [location]);
  return (
    <Disclosure as={"nav"}>
      <div className="relative flex flex-wrap sm:flex-nowrap h-16 items-center justify-between bg-gray-800 mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <BrandLogo />
        <InputBox />
        <div className={`flex items-center`}>
          <CartIcon />
          {user ? (
            <ProfileDropdown />
          ) : (
            showLogin && (
              <Link
                to={"/login"}
                className="ml-2 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </Link>
            )
          )}
        </div>
      </div>
    </Disclosure>
  );
};
