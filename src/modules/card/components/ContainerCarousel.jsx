import { useState, useEffect } from "react";
import { paginationFilterProducts } from "../../../services/FecthProducts";
import CardProduct from "./CardProduct";
import LoadingCards from "../../ui-state/components/LoadingCards";

const ContainerCarousel = ({ productSearched, title }) => {
  const [loading, setloading] = useState(false);
  const [products, setProducts] = useState([]);
  //  const ramdon = Math.floor(Math.random() * 100 + 1);

  useEffect(() => {
    setloading(true);
    const fetchProducts = async () => {
      if (productSearched.length === 0) return;

      const { data, error } = await paginationFilterProducts(
        productSearched,
        0,
        5,
      );

      if (error) {
        console.error("Error al obtener productos:", error);
      } else {
        setProducts(data); // Asegúrate de setear los productos correctamente
      }
    };
    fetchProducts(); // Llamar a la función asíncrona
    setloading(false);
  }, [productSearched]); // Agregar dependencia para que se ejecute cuando cambie `productSearched`

  return (
    <div className="flex w-full flex-col items-center pt-8">
      <div className="flex w-11/12 rounded-3 pb-2">
        <h2 className="nnf-semi-bold bg-gray-200 px-3 py-2 text-center text-lg uppercase rounded-t-xl">
          {title}
        </h2>
      </div>
      {loading ? (
        <div className="grid w-11/12 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
          <LoadingCards amount={5} />
        </div>
      ) : (
        <div className="grid w-11/12 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
          {products.map((product) => (
            <CardProduct key={product.asin} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContainerCarousel;
