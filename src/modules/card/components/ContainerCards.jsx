
const ContainerCards = ({ children }) => {
  return (
    <>
      <h1 className="nnf-semi-bold text-center text-2xl pb-4">Nuestros Productos</h1>
      <div className=" grid grid-cols-2 gap-7 px-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {children}
      </div>
    </>
  );
};

export default ContainerCards;
