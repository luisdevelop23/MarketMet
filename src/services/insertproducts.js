import supabase from "./supabase";

export async function insertProducts(productsArray) {
  // const products = productsArray.map(product => {
  //   return {
  //     asin: product.asin,
  //     product_title: product.product_title,
  //     product_price: product.product_price,
  //     product_original_price: product.product_original_price,
  //     currency: product.currency,
  //     product_star_rating: product.product_star_rating,
  //     product_num_ratings: product.product_num_ratings,
  //     product_url: product.product_url,
  //     product_photo: product.product_photo, // Corregido
  //     product_num_offers: product.product_num_offers,
  //     product_minimum_offer_price: product.product_minimum_offer_price,
  //     is_best_seller: product.is_best_seller,
  //     is_amazon_choice: product.is_amazon_choice,
  //     is_prime: product.is_prime,
  //     climate_pledge_friendly: product.climate_pledge_friendly,
  //     sales_volume: product.sales_volume,
  //     delivery: product.delivery,
  //     has_variations: product.has_variations,
  //   };
  // });

  const { data, error } = await supabase
    .from('products')
    .insert(productsArray)
    .select();

  if (error) {
    console.error('Error al insertar productos:', error);
    console.warn('Error al insertar productos:', error.message);
    console.warn(productsArray)
    return { data: null, error };
  }

  console.log('Productos insertados:', data);
  return { data, error };
}
