import { Link } from "react-router-dom";

const ProductFavorite = ({ product }) => {
  const { product_title, product_price, product_photo, product_id } = product;
  return (
    <div className="flex  shadow-lg rounded-md border-2 border-slate-200">
      <div className="flex w-2/12 items-center justify-center">
        <img src={product_photo} className="h-[100px] rounded-lg" />
      </div>
      <div className="flex w-9/12 flex-col justify-around border-r-2 border-slate-200 pl-2">
        <Link to={`/details/${product_id}`} className="nnf-semi-bold text-sm hover:text-blue-600">
          {product_title}
        </Link>
        <h2 className="text-lg">${product_price}</h2>
      </div>
      <div className="flex w-1/12 items-center justify-center">
        <button  className="lg:text-[40px] text-gray-500 hover:text-red-500 transition duration-200">
          <span className="icon-[tabler--trash]" />
        </button>
      </div>
    </div>
  );
};

export default ProductFavorite;
