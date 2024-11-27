import supabase from "../supabase";

export const fetchMyProducts = async (id) => {
    let { data, error } = await supabase
        .from("myfavoriteproducts")
        .select("*")
        .eq("user_id", id);
    return { data, error };
};
