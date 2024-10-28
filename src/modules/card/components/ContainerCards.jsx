const ContainerCards = ({ children }) => {
  return (
    <>
      <h1 className="nnf-semi-bold pb-4 text-center text-2xl">
        Nuestros Productos
      </h1>
      <div className="grid grid-cols-2 gap-y-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
        {children}
      </div>
    </>
  );
};

export default ContainerCards;
