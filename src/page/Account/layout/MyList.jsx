import React, { useEffect } from "react";
import ProductFavorite from "../components/ProductFavorite";

const MyList = () => {
  return (
    <div className="m-4 w-11/12 flex-col rounded-xl  bg-white p-6 shadow-lg md:w-9/12">
      <div className="">
        <h1 className="nnf-semi-bold pb-5 text-2xl">My favorite products</h1>
        <div className="grid grid-cols-1 gap-10 overflow-auto h-80 p-4">
          <ProductFavorite />
          <ProductFavorite />
          <ProductFavorite />
          <ProductFavorite />
          <ProductFavorite />
          <ProductFavorite />
          <ProductFavorite />
          <ProductFavorite />
        </div>
      </div>
    </div>
  );
};

export default MyList;
