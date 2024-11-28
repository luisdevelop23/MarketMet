import { Link } from "react-router-dom";
import { DeleteMyProducts } from "../../../services/FavoriteProducts/DeleteMyProducts";
import { AuthContext } from "../../../context/AuthContext";
import { useContext, useState } from "react";

const ProductFavorite = ({ product, fetchProducts }) => {
  const { session } = useContext(AuthContext);
  const { product_title, product_price, product_photo, product_id } = product;
  const [disabled, setDisabled] = useState(false);
  const deleteFavorite = async () => {
    setDisabled(true);
    const { error } = await DeleteMyProducts(product_id, session.user.id);
    if (error) {
      console.error("Error deleting favorite:", error);
      throw error;
    }
    fetchProducts();
  };
  return (
    <div className="flex rounded-md border-2 border-slate-200 shadow-lg">
      <div className="flex w-2/12 items-center justify-center">
        <img src={product_photo} className="h-[100px] rounded-lg" />
      </div>
      <div className="flex w-9/12 flex-col justify-around border-r-2 border-slate-200 pl-2">
        <Link
          to={`/details/${product_id}`}
          className="nnf-semi-bold text-sm hover:text-blue-600"
        >
          {product_title}
        </Link>
        <h2 className="text-lg">${product_price}</h2>
      </div>
      <div className="flex w-1/12 items-center justify-center">
        <button
          onClick={deleteFavorite}
          disabled={disabled}
          className="text-gray-500 transition duration-200 hover:text-red-500 lg:text-[40px]"
        >
          <span className="icon-[tabler--trash]" />
        </button>
      </div>
    </div>
  );
};

export default ProductFavorite;
