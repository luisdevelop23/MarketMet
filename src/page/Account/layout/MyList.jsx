import { useContext, useEffect, useState } from "react";
import { fetchMyProducts } from "../../../services/FavoriteProducts/FetMyProducts";
import ProductFavorite from "../components/ProductFavorite";
import { AuthContext } from "../../../context/AuthContext";

const MyList = () => {
  const { session } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await fetchMyProducts(session.user.id);
      if (error) {
        console.log(error);
        return;
      }
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);
  return (
    <div className="m-4 w-11/12 flex-col rounded-xl bg-white py-6 pl-6 pr-1 shadow-lg md:w-9/12 ">
      <div className="">
        <h1 className="nnf-semi-bold pb-5 text-2xl">My favorite products</h1>

        {loading ? (
          <h1 className="nnf-semi-bold py-5 text-2xl text-gray-500 h-80">
            Loading...
          </h1>
        ) : products.length === 0 ? (
          <h1 className="nnf-semi-bold py-5 text-2xl text-gray-500 h-80">
            You don't have favorite products
          </h1>
        ) : null}

        {products.length > 0 && (
          <div className="grid h-80 grid-cols-1 gap-y-6 overflow-auto  pr-5">
            {products.map((product) => (
              <ProductFavorite key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;
