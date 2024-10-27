import supabase from "./supabase";

export async function updateMyInfo(id, obj) {
    console.log("dta",obj)
  const { names, surnames, document, phone } = obj;
  const { data, error } = await supabase
    .from("users")
    .update({names: names, surnames: surnames, document: document, phone: phone})
    .eq("id", id);
  return { data, error };
  console.log("dataupdate",data)
}
