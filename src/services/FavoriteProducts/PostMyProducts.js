import supabase from "../supabase";
import { SelectMyProducts } from "./SelectMyProducts";

export async function PostMyProducts(product, id) {
  const { data: sdata, error: serror } = await SelectMyProducts(product, id);
  if (sdata.length > 0) {
    const { data, error } = await supabase
      .from("favoriteproduct")
      .eq("product_id", product)
      .eq("user_id", id);
    return { data, error };
  }
  const { data, error } = await supabase.from("favoriteproduct").insert({
    cant: 1,
    product_id: product,
    user_id: id,
  });
  return { data, error };
}
