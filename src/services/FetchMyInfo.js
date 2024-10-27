import supabase from "./supabase";

export async function fetchMyInfo(id) {
  let { data, error } = await supabase.from("names,surnames,").select("*");
}
