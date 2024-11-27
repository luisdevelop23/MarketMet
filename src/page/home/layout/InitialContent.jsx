import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../context/ProductsContext";
import CardProduct from "../../../modules/card/components/CardProduct";
import ContainerCards from "../../../modules/card/components/ContainerCards";
import Pagination from "../../../modules/core/components/Pagination";
import LoadingCards from "../../../modules/ui-state/components/LoadingCards";
import NotProductsCards from "../../../modules/ui-state/components/NotProductsCards";
import FilterProducts from "../components/FilterProducts";

const InitialContent = () => {
  const { product } = useParams();
  // console.log('tu url', product)

  const { products, loadingProducts, paginationFilterProducts } =
    useContext(ProductContext);

  useEffect(() => {
    if (product === undefined) {
      paginationFilterProducts("");
    }

    paginationFilterProducts(product);
  }, [product]);
  return (
    <header>
      <div className="mx-auto flex  flex-col mt-3 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-9/12">
        {loadingProducts ? (
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
