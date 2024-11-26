export const fetchMyProducts = async (user) => {
    let { data: myproducts, error } = await supabase
        .from("vlpu")
        .select("*")
        .eq("username", user);
    return { myproducts, error };
};