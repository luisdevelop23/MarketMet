import React, { createContext, useEffect, useState } from "react";
import {
  getProductByAsin,
  getProducts,
  paginationProductsDefault,
} from "../services/FecthProducts";

export const ProductContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  // ?text search
  const [textSearch, setTextSearch] = useState("");

  // ?products filter/search/default
  const [productsDefault, setProductsDefault] = useState(
    paginationProductsDefault(0, 16),
  );
  const [detailProduct, setDetailProduct] = useState([])
  
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // ?Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // ?Loadings
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingFavorites, setLoadingFavorites] = useState(false);
  const [loadingAddFav, setLoadingAddFav] = useState(false);
  const [loadingRemoveFav, setLoadingRemoveFav] = useState(false);

// const fetchProduct = async (id) => {
//   const { data, error } = await getProductByAsin(id);
//   setDetailProduct(data[0]);
//   console.log("Producto detalle obtenido:", data[0]);
// };


  const fetchProducts = async (vproducts, vpage) => {
    // console.log(vpage)
    setLoadingProducts(true);
    const { data, error, count } = await getProducts(vproducts, vpage);
    setTotalPages(Math.ceil(count / 16));
    setProducts(data);
    setLoadingProducts(false);
  };

  const paginationProducts = async (value) => {
    console.log(value);
    if (value) {
      console.log("next", page);
      setPage(page + 1);
    } else if (!value) {
      if (page === 1) {
        return;
      }
      setPage(page - 1);
    }
    if (textSearch) {
      console.log("pagina", page);
      fetchProducts(textSearch, page);
      return;
    }
    fetchProducts(null, page);
  };

  const paginationFilterProducts = async (value) => {
    setTextSearch(value);
    fetchProducts(value, 1);
  };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        page,
        totalPages,
        loadingProducts,
        setLoadingProducts,
        favorites,
        setFavorites,
        loadingFavorites,
        setLoadingFavorites,
        loadingAddFav,
        setLoadingAddFav,
        loadingRemoveFav,
        setLoadingRemoveFav,
        paginationProducts,
        paginationFilterProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
