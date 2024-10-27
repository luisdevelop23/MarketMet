import supabase from "./supabase";

export async function fetchMyInfo(id) {
  if (!id) {
    return { data: null, error: "No se encontro el usuario" };
  }
  let { data, error } = await supabase
    .from("users")
    .select("email,names,surnames,phone,document")
    .eq("id", id);

  if (error) {
    return { data: null, error: error.message };
  }

  return { data, error };
}
