import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import SearchProducts from "../hook/SearchProducts";

const Navbar = () => {
  const { user, session } = useContext(AuthContext);

  return (
    <nav className="w-full bg-slate-200">
      <div className="top-0 z-10 h-16"></div>
      <div className="fixed top-0 z-20 flex h-16 w-full justify-center bg-slate-200 shadow-md">
        <div className="flex w-11/12 max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="nnf-semi-bold flex items-center text-xl sm:text-2xl md:text-3xl"
          >
            MARKET
            <span className="icon-[fa-solid--meteor] ml-2 text-blue-1"></span>
          </Link>

          {/* Search bar (hidden on small screens) */}
          <div className="hidden flex-1 px-4 lg:flex">
            <SearchProducts />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 w-full  md:w-4/12  justify-around">
            {/* My Account */}
            <Link
              to="/myaccount/myProfile"
              className="text-xl hover:text-blue-2 sm:text-2xl md:text-3xl"
            >
              <span className="icon-[icon-park-outline--like]"></span>
            </Link>

            {/* Basket */}
            <Link
              to="/basket"
              className="text-xl hover:text-blue-2 sm:text-2xl md:text-3xl"
            >
              <span className="icon-[mdi--cart-outline]"></span>
            </Link>

            {/* User Info */}
            {user && session && (
              <div className=" items-center lg:flex hidden md:block ">
                <span className="icon-[solar--user-circle-bold-duotone] text-2xl text-blue-2 sm:text-3xl md:text-4xl">
                  {""}
                </span>
                <span className="nnf-semi-bold pl-2 text-sm sm:text-base">
                  Hello, {user.names}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search bar for small screens */}
      <div className="block w-full p-4 lg:hidden">
        <SearchProducts />
      </div>
    </nav>
  );
};

export default Navbar;
