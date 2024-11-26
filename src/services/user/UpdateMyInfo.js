import supabase from "../supabase";

export async function updateMyInfo(id, obj) {
  // console.log(obj,id,"upjs")
  const { names, surnames, document, phone } = obj;
  const { data, error } = await supabase
    .from("users")
    .update({
      names: names,
      surnames: surnames,
      document: document,
      phone: phone,
    })
    .eq("auth_id", id);
  return { data, error };
}
