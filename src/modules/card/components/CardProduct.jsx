import { Link } from "react-router-dom";
import formatTextLength from "../utils/Utils";

const CardProduct = ({ product }) => {
  const MAX_LENGTH = 30;

  const {
    product_title,
    product_price,
    product_original_price,
    product_minimum_offer_price,
    product_photo,
    asin,
    product_url,
    product_star_rating,
  } = product;

  return (
    <div className="flex h-[300px] flex-col rounded-lg px-1">
      <div className="flex flex-col justify-around rounded-lg border-2 border-slate-200 bg-white pt-4">
        <div className="flex h-[150px] w-full items-center justify-center">
          <img src={product_photo} alt="" className="h-[150px] rounded-lg" />
        </div>
        <Link
          to={`/details/${asin}`}
          className="px-4 lowercase hover:text-blue-600 hover:underline lg:text-[15px]"
        >
          <h1 className="text mt-3">
            {formatTextLength(product_title, MAX_LENGTH)}
          </h1>
        </Link>
        <div className="flex flex-grow flex-col items-center px-4">
          <div className="flex w-full items-start justify-around lg:text-[19px]">
            <h3 className="">${product_price}</h3>
            {product_star_rating ? (
              <span className="text-[18px]">
                <span>{product_star_rating}</span>
                <span className="icon-[iconamoon--star] text-yellow-400"></span>
              </span>
            ) : (
              <></>
            )}
          </div>
        </div>
        <button className="flex w-full items-center justify-center rounded-b-lg border-2 border-black bg-black py-1 text-white duration-200 ease-in hover:bg-white hover:text-black">
          <span className="icon-[mdi--cart-outline]"></span>{" "}
          <span className="ml-2">Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
