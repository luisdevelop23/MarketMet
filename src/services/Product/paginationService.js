import { paginationFilterProducts, paginationProductsDefault, countProducts } from "./productQueries";

export async function getProducts(product, page = 1, amount = 16) {
  const itemsPerPage = amount - 1; 
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  // Producto especificado
  if (product) {
    const { count } = await countProducts(product);
    const { data, error } = await paginationFilterProducts(product, start, end);
    return { data, error, count };
  }

  // Producto no especificado
  const { data, error } = await paginationProductsDefault(start, end);
  const { count } = await countProducts();

  return { data, error, count };
}
