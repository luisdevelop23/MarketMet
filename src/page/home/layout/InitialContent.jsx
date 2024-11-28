import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import CardProduct from "../../../modules/card/components/CardProduct";
import ContainerCards from "../../../modules/card/components/ContainerCards";
import Pagination from "../../../modules/core/components/Pagination";
import LoadingCards from "../../../modules/ui-state/components/LoadingCards";
import NotProductsCards from "../../../modules/ui-state/components/NotProductsCards";
import { getProducts } from "../../../services/Product/paginationService";

const InitialContent = () => {
  const { product } = useParams(); // Captura el parámetro :product.
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const fetchProducts = async () => {
    const { data, error, count } = await getProducts(product, currentPage);
    if (!error) {
      setProducts(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, [product, currentPage]);

  return (
    <header>
      <div className="mx-auto mt-3 flex flex-col gap-y-2 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-9/12">
        <div className="flex w-full flex-row justify-end">
          <div className="w-full md:w-5/12">
            {products.length === 0 ? <></> : <Pagination />}
          </div>
        </div>

        {loading ? (
          <ContainerCards>
            <LoadingCards />
          </ContainerCards>
        ) : products.length !== 0 ? (
          <ContainerCards>
            {products.map((product) => (
              <CardProduct key={product.asin} product={product} />
            ))}
          </ContainerCards>
        ) : (
          <NotProductsCards />
        )}
      </div>
      {products.length === 0 ? <></> : <Pagination />}
    </header>
  );
};

export default InitialContent;
