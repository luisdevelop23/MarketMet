import supabase from "./supabase";

export async function postMyInfo(id, obj) {
  const { names, surnames, document, phone } = obj;
  const { data, error } = await supabase
    .from("users")
    .insert({
      names: names,
      surnames: surnames,
      document: document,
      phone: phone,
      auth_id: id,
    });
  return { data, error };
}
