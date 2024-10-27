import supabase from "./supabase";

export async function getProducts(product, page = 1, amount = 16) {
  let amountProducts = amount - 1;
  // ? pagination management
  const PR = {
    start: (page - 1) * amountProducts,
    end: (page - 1) * amountProducts + amountProducts,
  };
  // ? product contains a value
  if (product) {
    const { count } = await countProducts(product);
    const { data, error } = await paginationFilterProducts(
      product,
      PR.start,
      PR.end,
    );
    return { data, error, count };
  }

  // ? product not contains a value
  const { data, error } = await paginationProductsDefault(PR.start, PR.end);
  const { count } = await countProducts();

  return { data, error, count };
}
export async function paginationFilterProducts(product, start, end) {
  try {
    const { data, error } = await supabase
      .from("products")
      .select(
        "product_title,product_price,product_original_price,product_minimum_offer_price,product_photo,asin,product_url,product_star_rating",
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

export async function paginationProductsDefault(start, end) {
  const { data, error } = await supabase
    .from("products")
    .select(
      "product_title,product_price,product_original_price,product_minimum_offer_price,product_photo,asin,product_url,product_star_rating",
    )
    .range(start, end);

  return { data, error };
}

async function countProducts(product) {
  // console.log("count filter util", product);
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

export async function getProductByAsin(asin) {
  const { data, error } = await supabase
    .from("products")
    .select(
      "product_title,product_price,product_original_price,product_minimum_offer_price,product_photo,asin,product_url,product_star_rating,sales_volume,product_star_rating",
    )
    .eq("asin", asin);
  return { data, error };
}
