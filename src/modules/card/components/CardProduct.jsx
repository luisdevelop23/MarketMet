import { Link } from "react-router-dom";
import formatTextLength from "../utils/Utils";

const CardProduct = ({ product }) => {
  const MAX_LENGTH = 50;
  // console.log("desde cart", product);
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
    <div className="flex h-full flex-col rounded-lg">
      <div className="col-span-1 flex h-[400px] flex-col justify-between rounded-lg border-2 border-slate-100 bg-white p-4">
        <div className="flex h-[200px] w-full items-center justify-center">
          <img src={product_photo} alt="" className="h-[185px] rounded-lg" />
        </div>
        <Link to={`/details/${asin}`}  className="hover:text-blue-600 hover:underline">
          <h1 className="mt-3 xl:text-[16px]">
            {formatTextLength(product_title, MAX_LENGTH)}
          </h1>
        </Link>
        <div className="mt-2 flex flex-grow flex-col items-center">
          <div className="flex w-full items-start justify-around lg:text-[19px]">
            <h3 className="">${product_price}</h3>
            {product_star_rating ? (
              <span className="">
                <span>{product_star_rating}</span>
                <span className="icon-[iconamoon--star] text-yellow-400"></span>
              </span>
            ) : (
              <></>
            )}
          </div>
        </div>
        <button className="mt-aut flex w-full items-center justify-center rounded-lg border-2 border-black bg-black py-1 text-white duration-200 ease-in hover:bg-white hover:text-black">
          <span className="icon-[mdi--cart-outline] size-[30px]"></span>{" "}
          <span className="ml-2">Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
