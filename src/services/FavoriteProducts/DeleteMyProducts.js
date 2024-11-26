import supabase from "../supabase";

export async function DeleteMyProducts(product, id) {
    const { data, error } = await supabase
        .from("favoriteproduct")
        .delete()
        .eq("product_id", product)
        .eq("user_id", id);
    return { data, error };
}