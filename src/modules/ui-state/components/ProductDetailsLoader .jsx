const ProductDetailsLoader = ({ value, error }) => {
  const isLoading = value;
  const isEmpty = !value && !error;
  function Loading() {
    return (
      <span className="icon-[eos-icons--loading] h-[200px] w-[200px] text-blue-1"></span>
    );
  }
  function NotProduct() {
    return (
      <>
        <span className="icon-[solar--confounded-square-bold-duotone] h-[200px] w-[200px] bg-blue-1"></span>
        <h1 className="nnf-semi-bold text-center text-2xl uppercase text-gray-500">
          No hay productos
        </h1>
      </>
    );
  }
  return (
    <div className="mt-12 flex items-center justify-center">
      <div className="mt-10 flex h-[50vh] w-8/12 flex-col items-center justify-center rounded-2xl bg-white p-4">
        {isLoading ? <Loading /> : isEmpty ? <></> : <NotProduct />}
      </div>
    </div>
  );
};

export default ProductDetailsLoader;
