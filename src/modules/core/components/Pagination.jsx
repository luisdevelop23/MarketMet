import React, { useContext } from "react";
import { ProductContext } from "../../../context/ProductsContext";

const Pagination = () => {
  const { paginationProducts, page,totalPages } = useContext(ProductContext);
 
  return (
    <div className=" mt-8">
      <div className="mx-auto flex w-7/12 justify-between">
        <div>
          <button
            value="previous"
            onClick={(e) => paginationProducts(false)}
            className="flex items-center rounded-xl border-2 border-black px-7 py-2 text-xl font-bold"
          >
            <span className="icon-[ls--left]"></span>
            <span>Anterior</span>
          </button>
        </div>
        <div className="flex items-center">
          <span className="text-2xl font-bold">{page} / {totalPages}</span>
        </div>
        <div>
          <button
            value="next"
            onClick={(e) => paginationProducts(true)}
            className="flex items-center rounded-xl border-2 border-black px-7 py-2 text-xl font-bold"
          >
            <span>Siguiente</span>
            <span className="icon-[ls--right]"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
