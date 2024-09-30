import React, { useContext, useState } from "react";
import { ProductContext } from "../../../context/ProductsContext";
import { Navigate, useNavigate } from "react-router-dom";


const SearchProducts = () => {
  const { paginationFilterProducts, Product: ListProducts } = useContext(ProductContext);
  const [Product, setProduct] = useState("");
  const navigate = useNavigate(); // Hook para navegar programáticamente

  const searchProducts = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    console.log(Product);
    paginationFilterProducts(Product); // Llama a la función para filtrar productos
    navigate(`/Product/${Product}`); // Redirige a la ruta deseada
    console.log('click navigate');
  };

  return (
    <div className="flex w-6/12 items-center justify-center">
      <input
        className="w-10/12 rounded-l-xl py-2 pl-4 outline-none"
        type="search"
        placeholder="Buscar..."
        onChange={(e) => setProduct(e.target.value)}
        value={Product}
      />
      <button
        onClick={searchProducts}
        className="w-1/12 rounded-r-xl bg-blue-1 py-2 text-white"
      >
        <i className="icon-[lucide--search] text-[18px]"></i>
      </button>
    </div>
  );
};

export default SearchProducts;
