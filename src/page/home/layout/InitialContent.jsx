import React, { useContext } from "react";
import {
  ProductContext
} from "../../../context/ProductsContext";
import CardProduct from "../../../modules/card/components/CardProduct";
import ContainerCards from "../../../modules/card/components/ContainerCards";
import Pagination from "../../../modules/core/components/Pagination";
import NotProductsCards from "../../../modules/ui-state/components/NotProductsCards";
import LoadingCards from "../../../modules/ui-state/components/loadingCards";

const InitialContent = () => {
  const { products, loadingProducts } = useContext(ProductContext);
  return (
    <>
      <div className="mx-auto flex sm:w-11/12 flex-col py-10 md:w-10/12 lg:w-11/12 xl:w-10/12">
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
        <Pagination/>
      </div>
    </>
  );
};

export default InitialContent;
