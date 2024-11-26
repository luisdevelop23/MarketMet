import React from "react";

const ProductDetailsLoader = ({ value, error }) => {
  const isLoading = value && !error; // Loading mientras haya valor y no error.
  const isEmpty = !value && !error; // Vacío si no hay valor ni error.

  const Loading = () => (
    <span className="icon-[eos-icons--loading]  h-[200px] w-[200px] animate-spin text-blue-500"></span>
  );

  const NotProduct = () => (
    <div className="flex flex-col items-center gap-4">
      <span className="icon-[solar--confounded-square-bold-duotone] h-[80px] w-[80px] text-blue-500"></span>
      <h1 className="text-lg font-semibold text-gray-500">
        No hay productos disponibles
      </h1>
    </div>
  );

  const ErrorDisplay = () => (
    <div className="flex flex-col items-center gap-4">
      <span className="icon-[material-symbols--error-outline] h-[80px] w-[80px] text-red-500"></span>
      <h1 className="text-lg font-semibold text-red-500">
        Ocurrió un error al cargar los productos
      </h1>
    </div>
  );

  return (
    <div className="flex items-center justify-center w-full min-h-[50vh] bg-gray-100 py-8">
      <div className="flex flex-col items-center justify-center  max-w-lg rounded-lg bg-white  w-11/12 md:w-11/12 lg:w-11/12 xl:w-10/12 p-6 shadow-md">
        {isLoading && <Loading />}
        {isEmpty && <NotProduct />}
        {error && <ErrorDisplay />}
      </div>
    </div>
  );
};

export default ProductDetailsLoader;
