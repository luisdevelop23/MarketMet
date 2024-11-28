import { Link } from "react-router-dom";

const CardProduct = ({ product }) => {
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
    <div className="group flex h-[300px] flex-col rounded-lg px-1">
      <div className="flex h-[200px] flex-col justify-around rounded-lg border-2 border-slate-200 bg-white pt-2 md:h-auto md:pt-4">
        <Link to={`/details/${asin}`}>
          <div className="flex h-[100px] w-full items-center justify-center p-1 md:h-[150px]">
            <img
              src={product_photo}
              alt="Product"
              className="h-[100px] transform rounded-lg duration-200 ease-in group-hover:scale-105 md:h-[140px]"
            />
          </div>

          <h1 className="text-md mt-3 overflow-hidden text-ellipsis whitespace-nowrap p-2 md:text-lg lg:text-[15px]">
            {product_title}
          </h1>
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
        </Link>
        <button className="flex w-full items-center justify-center rounded-b-lg border-2 border-black bg-black py-1 text-white duration-200 ease-in hover:bg-white hover:text-black">
          <span className="icon-[mdi--cart-outline]"></span>{" "}
          <span className="ml-2">Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
