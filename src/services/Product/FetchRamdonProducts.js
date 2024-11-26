import supabase from "../supabase";

export async function FetchRamdonProducts(limit = 10) {
  const { data, error } = await supabase
    .from("random_products")
    .select("*")
    .limit(limit);
  return { data, error };
}
