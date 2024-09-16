import React from "react";
import SearchProducts from "./SearchProducts";

const Navbar = () => {
  return (
    <div className="flex h-16 justify-center bg-slate-200">
      <div className="flex w-10/12 bg-slate-200">
        <div className="nnf-semi-bold flex w-4/12 items-center justify-center text-[30px]">
          MARKET
          <i class="icon-[fa-solid--meteor] text-blue-2"></i>
        </div>
      
        <SearchProducts/>
        <div className="flex w-1/12 items-center justify-center">
          <a href="#" className="text-[30px]">
            <i class="icon-[icon-park-outline--like]"></i>
          </a>
        </div>
        <div className="flex w-1/12 items-center justify-center">
          <a href="#" className="text-[30px]">
            <i class="icon-[mdi--cart-outline]"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
