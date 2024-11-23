import { useEffect, useState } from "react";
import { paginationFilterProducts } from "../../../services/FecthProducts";
import LoadingCards from "../../ui-state/components/LoadingCards";
import CardPCarousel from "./CardPCarousel";

const ContainerCarousel = ({ productSearched, title }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(3); 

  useEffect(() => {
    const updateVisibleProducts = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setVisibleProducts(7); // `lg`
      }else if (width >= 1024) {
        setVisibleProducts(6); // `lg`
      } else if (width >= 768) {
        setVisibleProducts(4); // `md`
      } else {
        setVisibleProducts(3); // `sm`
      }
    };

    updateVisibleProducts();
    window.addEventListener("resize", updateVisibleProducts);

    return () => {
      window.removeEventListener("resize", updateVisibleProducts);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      if (productSearched.length === 0) return;

      const { data, error } = await paginationFilterProducts(
        productSearched,
        0,
        10, 
      );

      if (error) {
        console.error("Error al obtener productos:", error);
      } else {
        setProducts(data);
      }
    };
    fetchProducts();
    setLoading(false);
  }, [productSearched]);

  return (
    <div className="mt-4 flex w-full  mx-auto md:w-full flex-col items-center">
      <div className="rounded-3 flex w-full pb-2">
        {title.length > 0 && (
          <h2 className="nnf-semi-bold w-full rounded-t-xl bg-blue-1 px-3 py-2 text-center text-sm uppercase text-white md:w-auto">
            {title}
          </h2>
        )}
      </div>
      {loading ? (
        <div className="grid w-11/12 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
          <LoadingCards />
        </div>
      ) : (
        <div className="grid w-full grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 md:gap-4">
          {products.slice(0, visibleProducts).map((product) => (
            <CardPCarousel key={product.asin} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContainerCarousel;
