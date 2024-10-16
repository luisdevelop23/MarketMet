import { Link } from "react-router-dom";
import SearchProducts from "../hook/SearchProducts";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="top-0 z-10 h-16"></div>
      <div className="fixed top-0 z-20 flex h-16 w-full justify-center bg-slate-200">
        <div className="flex w-10/12 bg-slate-200">
          <Link
            to="/"
            className="nnf-semi-bold flex  w-3/12 items-center justify-center text-[30px]"
          >
            MARKET
            <i className="icon-[fa-solid--meteor] text-blue-1"></i>
          </Link>

          <SearchProducts />
          <div className="flex w-1/12 items-center justify-center">
            <Link to="/myList" className="text-[30px] hover:text-gray-3">
              <i className="icon-[icon-park-outline--like]"></i>
            </Link>
          </div>
          <div className="flex w-1/12 items-center justify-center">
            <Link to="/basket" className="text-[30px] hover:text-gray-3">
              <i className="icon-[mdi--cart-outline]"></i>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
