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
<div className="rounded-lg h-full flex flex-col">
  <div className="col-span-1 h-[400px] flex flex-col justify-between rounded-lg border-2 border-slate-100 bg-white p-4">
    <div className="flex h-[200px] w-full items-center justify-center">
      <img
        src={product_photo}
        alt=""
        className="h-[200px] rounded-lg"
      />
    </div>
    <a href="" className="hover:text-blue-600 hover:underline">
      <h1 className="mt-3">
        {formatTextLength(product_title, MAX_LENGTH)}
      </h1>
    </a>
    <div className="mt-2 flex flex-col items-center flex-grow">
      <div className="flex w-full items-start justify-around">
        <h3 className="text-xl">{product_price}</h3>
        {product_star_rating? <span className="text-xl">
          <span>{product_star_rating}</span>
          <i className="icon-[iconamoon--star] text-yellow-400"></i>
        </span> : <></>}
      </div>
    </div>
    <button className="mt-aut flex w-full items-center justify-center rounded-lg border-2 border-black bg-black py-1 text-white duration-200 ease-in hover:bg-white hover:text-black">
      <i className="icon-[mdi--cart-outline] size-[30px]"></i>{" "}
      <span className="ml-2">Add to cart</span>
    </button>
  </div>
</div>
    
  );
};

export default CardProduct;
