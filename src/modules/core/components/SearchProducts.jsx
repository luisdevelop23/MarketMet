import React, { useContext, useState } from "react";
import { ProductContext } from "../../../context/ProductsContext";

const SearchProducts = () => {
  const { paginationFilterProducts,Product:ListProducts  } = useContext(ProductContext);
  const [Product, setProduct] = useState("");

  const searchProducts = (e) => {
    e.preventDefault();
    paginationFilterProducts(Product);
  };

  // console.log(ListProducts);

  return (
    <div className="flex w-6/12 items-center justify-center">
      <input
        className="w-10/12 rounded-l-xl py-2 pl-4 outline-none"
        type="search"
        name=""
        placeholder="Buscar..."
        onChange={(e) => setProduct(e.target.value)}
        value={Product}
       
      />
      <button
        onClick={searchProducts}
        className="w-1/12 rounded-r-xl bg-gray-5 py-2 text-white"
      >
        <i class="icon-[lucide--search] text-[18px]"></i>
      </button>
    </div>
  );
};

export default SearchProducts;
