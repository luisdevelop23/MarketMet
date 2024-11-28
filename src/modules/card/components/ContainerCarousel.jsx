import { useEffect, useState } from "react";
import { getProducts } from "../../../services/Product/paginationService";
import LoadingCards from "../../ui-state/components/LoadingCards";
import CardPCarousel from "./CardPCarousel";
import { FetchRamdonProducts } from "../../../services/Product/FetchRamdonProducts";

const ContainerCarousel = ({
  productSearched,
  title,
  cant = 10,
  detail = false,
}) => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(3);

  useEffect(() => {
    const updateVisibleProducts = () => {
      const width = window.innerWidth;
      if (width >= 1280)
        setVisibleProducts(7); // `xl`
      else if (width >= 1024)
        setVisibleProducts(5); // `lg`
      else if (width >= 768)
        setVisibleProducts(3); // `md`
      else setVisibleProducts(3); // `sm`
    };

    updateVisibleProducts();
    window.addEventListener("resize", updateVisibleProducts);
    return () => window.removeEventListener("resize", updateVisibleProducts);
  }, []);

  useEffect(() => {
    const fetchProductsFilter = async () => {
      const { data, error } = await getProducts(productSearched, 1, cant);
      if (error) {
        console.error("Error al obtener productos:", error);
      } else {
        setProducts(data);
      }
    };
    const fetchProductsRamdon = async () => {
      const { data, error } = await FetchRamdonProducts(cant);
      if (error) {
        console.error("Error al obtener productos:", error);
      } else {
        setProducts(data);
      }
    };

    if (productSearched) {
      fetchProductsFilter();
    } else {
      fetchProductsRamdon();
    }
  }, []);

  const loading = products.length === 0 && productSearched.length > 0;

  return (
    <div className="mx-auto mt-4 flex w-full flex-col items-center py-4 md:w-full">
      {/* Título */}
      {title && title.length > 0 && (
        <div className="rounded-3 flex w-full pb-2">
          <h2 className="nnf-semi-bold w-full rounded-t-xl bg-blue-1 px-3 py-2 text-center text-sm uppercase text-white md:w-auto">
            {title}
          </h2>
        </div>
      )}
      {/* Contenido */}
      {loading ? (
        <div className="grid w-full grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5 xl:grid-cols-7">
          <LoadingCards amount={visibleProducts} />
        </div>
      ) : detail ? (
        <div className="grid w-full grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5 xl:grid-cols-7">
          {products.map((product) => (
            <CardPCarousel key={product.asin} product={product} />
          ))}
        </div>
      ) : (
        <div className="grid w-full grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5 xl:grid-cols-7">
          {products.slice(0, visibleProducts).map((product) => (
            <CardPCarousel key={product.asin} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContainerCarousel;
