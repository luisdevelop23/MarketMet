import { Link } from "react-router-dom";
import SearchProducts from "../hook/SearchProducts";
import { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";

const Navbar = () => {
  const { login, user } = useContext(LoginContext);

  return (
    <div className="w-full">
      <div className="top-0 z-10 h-16"></div>
      <div className="fixed top-0 z-20 flex h-16 w-full justify-center bg-slate-200">
        <div className="flex w-10/12 justify-between">
          <Link
            to="/"
            className="nnf-semi-bold flex w-3/12 items-center justify-center text-[30px]"
          >
            MARKET
            <span className="icon-[fa-solid--meteor] text-blue-1"></span>
          </Link>

          <SearchProducts />

          <div className="flex w-1/12 items-center justify-center">
            <Link to="/myaccount/myProfile" className="text-[30px] hover:text-blue-2">
              <span className="icon-[icon-park-outline--like]"></span>
            </Link>
          </div>
          <div className="flex w-1/12 items-center justify-center">
            <Link to="/basket" className="text-[30px] hover:text-blue-2">
              <span className="icon-[mdi--cart-outline]"></span>{" "}
            </Link>
          </div>
          {login ? (
            <div className="flex w-2/12 items-center  justify-center">
              <span className="icon-[solar--user-circle-bold-duotone] text-blue-2 text-[40px]">
                {""}
              </span>
              <span className="pl-2 text-[15px] nnf-semi-bold">Hello, {user.username}</span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
