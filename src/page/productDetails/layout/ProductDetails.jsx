import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByAsin } from "../../../services/FecthProducts";
import ContainerDetail from "../../../modules/products/ContainerDetail";
import ProductDetailsLoader from "../../../modules/ui-state/components/ProductDetailsLoader ";

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
      fetchProduct(); // Solo llama a la API si hay un valor válido en product
    }
    console.log(detailProduct);
  }, [product]);

  return (
    <>
      {loading ? (
        <ProductDetailsLoader value={loading} error={error} />
      ) : (
        <ContainerDetail detailProduct={detailProduct} />
      )}
    </>
  );
};

export default ProductDetails;
