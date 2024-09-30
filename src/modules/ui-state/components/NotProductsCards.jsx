import NotProducts from "../../../assets/img/catSad.png";
const NotProductsCards = () => {
  return (
    <div className="e flex h-[400px] flex-col justify-between p-4">
      <h1 className="nnf-semi-bold text-center text-2xl uppercase text-gray-500">
        No hay productos
      </h1>
      <div className="flex h-full w-full items-center justify-center">
        <img src={NotProducts} alt="" />
      </div>
    </div>
  );
};

export default NotProductsCards;
