import React, { useState } from "react";

const ContainerDetail = ({ detailProduct }) => {
  const [Count, setCount] = useState(1);

  const addCount = (e) => {
    if(e.target.value == "add" ){
      setCount(Count + 1);
    }else if(e.target.value == "remove"){
      if(Count == 1){
        return
      }
      setCount(Count - 1);
    }
  };

  const {
    asin,
    product_title,
    product_url,
    product_minimum_offer_price,
    product_price,
    product_photo,
    product_star_rating,
    sales_volume,
  } = detailProduct;
  return (
    <div className="mt-12 flex items-center justify-center">
      <div className="mt-10 flex w-8/12 rounded-2xl bg-white p-4">
        <div className="flex w-3/6 items-center justify-center">
          <img className="h-[360px] py-4" src={product_photo} alt="" />
        </div>
        <div className="flex w-3/6 flex-col items-center">
          <span className="tetx-xl flex w-full items-center justify-end gap-x-6 py-1 pr-9">
            <p>Code:{asin}</p>
            <a hrefLang="es" href={product_url} target="_blank" className="">
              <i className="icon-[material-symbols--link] h-[20px] w-[20px]"></i>
            </a>
          </span>
          <h1 className="nnf-semi-bold text-xl">{product_title}</h1>

          {/* price and rating */}
          <div className="nnf-regular flex w-full items-center justify-around py-4 text-xl">
            <h3>$ {product_price}</h3>
            <h3>
              {product_star_rating}{" "}
              <i className="icon-[iconamoon--star] text-yellow-400"></i>
            </h3>
          </div>

          {/* add to basket + counter */}
          <div className="flex w-full items-center justify-around py-4">
            <div className="items-cente flex justify-around gap-x-2">
              <div className="flex">
                <button
                  value="add"
                  className="rounded-xl border-2 border-blue-1 bg-blue-1 px-5 py-2 text-white"
                  type="button"
                  onClick={addCount}
                >
                  +
                </button>
              </div>
              <div className="flex rounded-xl border-2 border-blue-1 px-5 py-2">
                <p>{Count}</p>
              </div>
              <div className="flex">
                <button
                  value="remove"
                  className="rounded-xl border-2 border-blue-1 bg-blue-1 px-5 py-2 text-white"
                  type="button"
                  onClick={addCount}
                >
                  -
                </button>
              </div>
            </div>

            {/* add to basket */}
            <div className="flex items-center justify-around">
              <button className="nnf-semi-bold flex items-center rounded-xl bg-blue-1 px-5 py-2 text-white hover:bg-blue-2">
                <i className="icon-[mdi--cart-plus] text-[20px]"></i>
                <span>Add to basket</span>
              </button>
            </div>
          </div>
          {/* add to basket + counter */}
        </div>
      </div>
    </div>
  );
};

export default ContainerDetail;
