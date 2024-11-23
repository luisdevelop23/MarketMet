import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchProducts = () => {
  const [Product, setProduct] = useState("");
  const navigate = useNavigate();

  const searchProducts = (e) => {
    e.preventDefault();
    if (Product.trim() !== "") {
      navigate(`/Products/${Product.trim()}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchProducts(e);
    }
  };

  return (
    <div className="flex w-full max-w-xl items-center">
      {/* Input de búsqueda */}
      <input
        className="flex-1 rounded-l-md border border-gray-300 py-2 px-4 text-sm outline-none focus:border-blue-1 focus:ring focus:ring-blue-200"
        type="search"
        placeholder="Search for products..."
        onChange={(e) => setProduct(e.target.value)}
        onKeyDown={handleKeyDown}
        value={Product}
      />
      {/* Botón de búsqueda */}
      <button
        onClick={searchProducts}
        className="rounded-r-md bg-blue-1 px-4 py-2 text-sm text-white hover:bg-blue-2"
      >
        <span className="icon-[lucide--search] text-lg"></span>
      </button>
    </div>
  );
};

export default SearchProducts;
