import { useContext } from "react";
import supabase from "./supabase";


export async function getMyProducts(user) {
  let { data: myproducts, error } = await supabase
    .from("vlpu")
    .select("*")
    .eq("username", user);
  return { myproducts, error };
}
