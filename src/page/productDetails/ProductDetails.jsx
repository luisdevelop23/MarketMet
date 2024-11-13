import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByAsin } from "../../services/FecthProducts";
import ContainerDetail from "../../modules/products/ContainerDetail";
import ProductDetailsLoader from "../../modules/ui-state/components/ProductDetailsLoader ";
import ContainerCarousel from "../../modules/card/components/ContainerCarousel";

const ProductDetails = () => {
  const { product } = useParams();
  const [detailProduct, setDetailProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true); // Comienza a cargar
      try {
        const { data } = await getProductByAsin(product); // Supongo que la API devuelve data
        if (data.length === 0) {
          setError(true);
          setLoading(false); // Termina de cargar con error
          return;
        }
        setDetailProduct(data[0]); // Guarda los detalles del producto en el estado
        setLoading(false); // Termina de cargar
      } catch (err) {
        setError(true);
        setLoading(false); // Termina de cargar con error
      }
    };

    if (product) {
      window.scrollTo(0, 0);

      fetchProduct(); // Solo llama a la API si hay un valor válido en product
    }
    // console.log(detailProduct);
  }, [product]);

  return (
    <section className="flex flex-col items-center">
      {loading ? (
        <ProductDetailsLoader value={loading} error={error} />
      ) : (
        <ContainerDetail detailProduct={detailProduct} />
      )}
      <div className="mt-10 flex w-8/12 flex-col rounded-2xl bg-white p-4">
        <h1 className="text-center text-2xl font-bold">Suggestions</h1>
        <ContainerCarousel productSearched="4k" title="" />
        <ContainerCarousel productSearched="moni" title="" />
        <ContainerCarousel productSearched="acce" title="" />
        <ContainerCarousel productSearched="tabl" title="" />
      </div>
    </section>
  );
};

export default ProductDetails;
