import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByAsin } from "../../services/Product/FecthProducts";
import ContainerDetail from "../../modules/products/ContainerDetail";
import ProductDetailsLoader from "../../modules/ui-state/components/ProductDetailsLoader ";
import ContainerCarousel from "../../modules/card/components/ContainerCarousel";

const ProductDetails = () => {
  const { product } = useParams();
  const [detailProduct, setDetailProduct] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true); 
      setError(false); 

      try {
        const { data, error: fetchError } = await getProductByAsin(product);
        if (fetchError || !data || data.length === 0) {
          setError(true); 
        } else {
          setDetailProduct(data[0]);
        }
      } catch (err) {
        setError(true); 
      } finally {
        setLoading(false); 
      }
    };

    if (product) {
      window.scrollTo(0, 0);
      fetchProduct();
    }
  }, [product]);

  return (
    <section className="flex flex-col items-center">
      {/* Loader y manejo de estados */}
      {loading ? (
        <ProductDetailsLoader value={loading} error={error} />
      ) : error ? (
        <ProductDetailsLoader value={false} error={error} />
      ) : detailProduct ? (
        <ContainerDetail detailProduct={detailProduct} />
      ) : null}

      {/* Carrusel de sugerencias */}
      <div className="mt-10 flex w-full flex-col items-center rounded-2xl bg-white p-4 md:w-11/12 lg:w-11/12 xl:w-10/12">
        <h1 className="text-center text-2xl font-bold">Suggestions</h1>
        <ContainerCarousel productSearched="" cant={28} title="" detail={true}/>
      </div>
    </section>
  );
};

export default ProductDetails;

