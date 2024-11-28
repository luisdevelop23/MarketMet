import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { countProducts } from "../../../services/Product/productQueries";

const Pagination = () => {
  const [totalPages, setTotalPages] = useState(0);
  const { product } = useParams(); // Captura el parámetro dinámico de la URL.
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  // Función para contar los productos y calcular el total de páginas.
  const countP = async (product) => {
    const { count } = await countProducts(product);
    setTotalPages(Math.ceil(count / 16));
  };

  useEffect(() => {
    countP(product);
  }, [product]);

  // Generar un rango dinámico de números de página.
  const getPageRange = () => {
    const range = [];
    const maxVisible = 5; // Número máximo de páginas visibles.
    const start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);

    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  };

  return (
    <div className="">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between px-4 bg-white rounded-lg p-2 border-2 border-slate-200">
        {/* Botón Anterior */}
        <Link
          to={`/Products/${product}?page=${currentPage - 1}`}
          aria-disabled={currentPage === 1}
          aria-label="Página anterior"
          className={`flex rounded-xl border-2 px-4 py-2 font-bold ${
            currentPage === 1
              ? "cursor-not-allowed border-gray-300 text-gray-300"
              : "border-zinc-700 text-zinc-700 hover:bg-zinc-700 hover:text-white"
          }`}
        >
          <span className="icon-[icon-park-solid--left-two]" />
        </Link>

        {/* Cubos de Paginación */}
        <div className="flex items-center gap-2">
          {getPageRange().map((page) => (
            <Link
              key={page}
              to={`/Products/${product}?page=${page}`}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border-2 text-lg font-bold ${
                page === currentPage
                  ? "bg-zinc-700 text-white"
                  : "border-gray-300 text-zinc-700 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              {page}
            </Link>
          ))}
        </div>

        {/* Botón Siguiente */}
        <Link
          to={`/Products/${product}?page=${currentPage + 1}`}
          aria-disabled={currentPage === totalPages}
          className={`flex rounded-xl border-2 px-4 py-2 font-bold ${
            currentPage === totalPages
              ? "cursor-not-allowed border-gray-300 text-gray-300"
              : "border-zinc-700 text-zinc-700 hover:bg-zinc-700 hover:text-white"
          }`}
        >
          <span className="icon-[icon-park-solid--right-two]" />
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
