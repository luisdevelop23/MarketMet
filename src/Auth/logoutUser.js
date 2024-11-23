import supabase from "../services/supabase";

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error al cerrar sesión:", error.message);
    return { success: false, error: error.message };
  }
  console.log("Sesión cerrada con éxito");
  return { success: true };
}
