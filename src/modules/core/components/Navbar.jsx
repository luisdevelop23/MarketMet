import { Link } from "react-router-dom";
import SearchProducts from "../hook/SearchProducts";

const Navbar = () => {
  return (
    <div className="flex h-16 justify-center bg-slate-200 fixed top-0 w-full z-20">
      <div className="flex w-10/12 bg-slate-200">
        <Link to="/" className="nnf-semi-bold flex w-4/12 items-center justify-center text-[30px]">
          MARKET
          <i className="icon-[fa-solid--meteor] text-blue-1"></i>
        </Link>
      
        <SearchProducts/>
        <div className="flex w-1/12 items-center justify-center">
          <Link to="/myList" className="text-[30px]">
            <i className="icon-[icon-park-outline--like]"></i>
          </Link>
        </div>
        <div className="flex w-1/12 items-center justify-center">
          <Link to="/basket" className="text-[30px]">
            <i className="icon-[mdi--cart-outline]"></i>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
