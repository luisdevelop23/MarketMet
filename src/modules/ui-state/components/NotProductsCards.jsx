import NotProducts from "../../../assets/img/catSad.png";
const NotProductsCards = () => {
  return (
    <div className="e flex h-[80vh]  flex-col justify-between p-4">
    
      <div className="flex flex-col h-full w-full items-center justify-center">
        <span className="icon-[solar--confounded-square-bold-duotone] h-[200px] w-[200px] bg-blue-1"></span>
        <h1 className="nnf-semi-bold text-center text-2xl uppercase text-gray-500">
        No hay productos
      </h1>
      </div>
    </div>
  );
};

export default NotProductsCards;
