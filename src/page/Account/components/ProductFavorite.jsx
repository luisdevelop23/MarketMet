import { Link } from "react-router-dom";

const ProductFavorite = () => {
  return (
    <div className="flex border-b-2 border-slate-200 p-2">
      <div className="mr-4">
        <img
          src="https://images.pexels.com/photos/1118875/pexels-photo-1118875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="h-[100px] w-[100px] rounded-lg"
        />
      </div>
      <div className="relative flex w-full flex-col justify-around">
        <button className="absolute right-0 top-0 text-[30px]">
          <span className="icon-[ion--close-circle-outline] hover:text-red-500" />{" "}
        </button>
        <Link className="nnf-semi-bold text-xl">Product name</Link>
        <h2 className="text-lg">Price</h2>
      </div>
    </div>
  );
};

export default ProductFavorite;
