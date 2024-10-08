import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchProducts = () => {
  const [Product, setProduct] = useState("");
  const navigate = useNavigate(); // Hook para navegar programáticamente

  const searchProducts = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    navigate(`/Products/${Product}`); // Redirige a la ruta deseada
    console.log("click navigate");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchProducts(e); // Llama a la función searchProducts cuando se presiona Enter
    }
  };

  return (
    <div className="flex w-6/12 items-center justify-center">
      <input
        className="w-10/12 rounded-l-xl py-2 pl-4 outline-none"
        type="search"
        placeholder="Buscar..."
        onChange={(e) => setProduct(e.target.value)}
        onKeyDown={handleKeyDown}
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
