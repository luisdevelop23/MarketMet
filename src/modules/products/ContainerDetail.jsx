import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { PostMyProducts } from "../../services/FavoriteProducts/PostMyProducts";
import { DeleteMyProducts } from "../../services/FavoriteProducts/DeleteMyProducts";
import { SelectMyProducts } from "../../services/FavoriteProducts/SelectMyProducts";

const ContainerDetail = ({ detailProduct }) => {
  const { session } = useContext(AuthContext);
  const [count, setCount] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loadingFavorite, setLoadingFavorite] = useState(false); // Estado de carga

  const {
    asin,
    product_title,
    product_url,
    product_price,
    product_photo,
    product_star_rating,
  } = detailProduct;

  useEffect(() => {
    const checkFavorite = async () => {
      const { data, error } = await SelectMyProducts(asin, session.user.id);
      if (error) {
        console.error("Error checking favorite:", error);
        return;
      }
      setIsFavorite(data.length > 0);
    };
    checkFavorite();
  }, [asin]);

  const toggleFavorite = async () => {
    setLoadingFavorite(true); // Inicia el spinner
    try {
      if (isFavorite) {
        await deleteFavorite();
        setIsFavorite(false);
      } else {
        await addFavorite();
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    } finally {
      setLoadingFavorite(false); // Termina el spinner
    }
  };
  //       .update({ cant: data[0].cant + 1 })
  const addFavorite = async () => {
    const { error } = await PostMyProducts(asin, session.user.id);
    if (error) {
      console.error("Error adding favorite:", error);
      throw error;
    }
  };

  const deleteFavorite = async () => {
    const { error } = await DeleteMyProducts(asin, session.user.id);
    if (error) {
      console.error("Error deleting favorite:", error);
      throw error;
    }
  };

  const addCount = (e) => {
    if (e.target.value === "add") {
      setCount(count + 1);
    } else if (e.target.value === "remove") {
      if (count === 1) return;
      setCount(count - 1);
    }
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="mt-10 flex w-11/12 flex-wrap rounded-2xl bg-white p-6 shadow-md md:w-11/12 md:flex-nowrap lg:w-11/12 xl:w-10/12">
        {/* Imagen del producto */}
        <div className="flex w-full items-center justify-center md:w-1/2">
          <img
            className="h-[260px] rounded-lg md:h-[360px]"
            src={product_photo}
            alt={product_title}
          />
        </div>

        {/* Información del producto */}
        <div className="mt-6 flex w-full flex-col items-center md:mt-0 md:w-1/2">
          <div className="flex w-full justify-between px-4">
            <p className="text-sm text-gray-500">Code: {asin}</p>
            <a
              href={product_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <span className="icon-[material-symbols--link] h-[20px] w-[20px]"></span>
            </a>
          </div>
          <h1 className="mt-2 text-left text-lg font-semibold">
            {product_title}
          </h1>

          {/* Precio y calificación */}
          <div className="mt-4 flex w-full justify-around px-4">
            <h3 className="text-xl font-bold text-gray-700">
              ${product_price}
            </h3>
            <h3 className="flex items-center gap-1 text-yellow-500">
              {product_star_rating}{" "}
              <span className="icon-[iconamoon--star]"></span>
            </h3>
          </div>

          {/* Botón de favorito con spinner */}
          <button
            onClick={toggleFavorite}
            disabled={loadingFavorite} // Deshabilita mientras carga
            className={`mt-4 flex items-center justify-center rounded-full p-2 transition ${
              isFavorite
                ? "bg-green-500 text-white hover:bg-red-500"
                : "bg-gray-200 text-gray-500"
            } hover:scale-110`}
          >
            {loadingFavorite ? (
              <span className="icon-[eos-icons--loading] animate-spin text-2xl"></span>
            ) : isFavorite ? (
              <span className="icon-[mdi--heart] text-2xl" />
            ) : (
              <span className={`icon-[mdi--heart-outline] `}></span>
            )}
          </button>

          {/* Contador y añadir al carrito */}
          <div className="mt-6 flex w-full items-center justify-between px-4">
            {/* Controles de cantidad */}
            <div className="flex items-center gap-2">
              <button
                value="remove"
                onClick={addCount}
                className="rounded bg-gray-200 px-4 py-2 text-gray-600 hover:bg-gray-300"
              >
                -
              </button>
              <div className="rounded border px-4 py-2">{count}</div>
              <button
                value="add"
                onClick={addCount}
                className="rounded bg-gray-200 px-4 py-2 text-gray-600 hover:bg-gray-300"
              >
                +
              </button>
            </div>

            {/* Botón de añadir al carrito */}
            <button className="flex items-center gap-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              <span className="icon-[mdi--cart-plus] text-[20px]"></span>
              <span>Add to basket</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerDetail;
