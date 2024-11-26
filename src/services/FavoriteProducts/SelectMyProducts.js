import supabase from "../supabase";

export async function SelectMyProducts(product, id) {
    const { data, error } = await supabase
        .from("favoriteproduct")
        .select("*")
        .eq("product_id", product)
        .eq("user_id", id);
    return { data, error };
}