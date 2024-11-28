import supabase from "../supabase";

// Paginación filtrada por producto
export async function paginationFilterProducts(product, start, end) {
  try {
    const { data, error } = await supabase
      .from("products")
      .select(
        "product_title, product_price, product_original_price, product_minimum_offer_price, product_photo, asin, product_url, product_star_rating"
      )
      .ilike("product_title", `%${product}%`)
      .range(start, end);

    if (error) {
      console.error("Error al realizar la consulta:", error);
      return { data: [], error };
    }

    return { data, error: null };
  } catch (err) {
    console.error("Error inesperado:", err);
    return { data: null, error: err.message };
  }
}

// Paginación sin filtro
export async function paginationProductsDefault(start, end) {
  const { data, error } = await supabase
    .from("products")
    .select(
      "product_title, product_price, product_original_price, product_minimum_offer_price, product_photo, asin, product_url, product_star_rating"
    )
    .range(start, end);

  return { data, error };
}

// Contar productos (filtrados o no)
export async function countProducts(product) {
  if (product) {
    const { count, error } = await supabase
      .from("products")
      .select("*", { count: "exact", head: true })
      .ilike("product_title", `%${product}%`);
    return { count, error };
  }

  const { count, error } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true });
  return { count, error };
}
