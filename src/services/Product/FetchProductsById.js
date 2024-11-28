import supabase from "../supabase";


export async function FetchProductsById(id) {
    const { data, error } = await supabase
    .from("products")
    .select(
      "product_title,product_price,product_original_price,product_minimum_offer_price,product_photo,asin,product_url,product_star_rating,sales_volume,product_star_rating",
    )
    .eq("asin", id);
  return { data, error };
}